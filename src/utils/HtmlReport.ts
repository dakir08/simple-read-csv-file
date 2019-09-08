import fs from 'fs';
import path from 'path';

export default class HtmlReport {
  print(report: string): void {
    const html = `
    <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
    </div>`;

    const dir = path.resolve(path.resolve(__dirname, '../output'));

    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    fs.writeFileSync(`${dir}/reportAnalyse.html`, html);
  }
}
