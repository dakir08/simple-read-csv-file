import fs from 'fs';
import path from 'path';

export default class CsvFileReader {
  data: string[][] = [];

  constructor(public fileLocation: string) {}

  readFile(): void {
    this.data = fs
      .readFileSync(path.resolve(__dirname, `../${this.fileLocation}`), {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }

  get length(): number {
    return this.data.length;
  }
}
