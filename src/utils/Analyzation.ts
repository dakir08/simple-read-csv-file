import { MatchData } from './MatchData';
import WinsAnalysis from './WinsAnalysis';
import HtmlReport from './HtmlReport';
import ConsoleReport from './ConsoleReport';

interface Analyzer {
  run(matches: MatchData[]): string;
}

interface OutputTarget {
  print(report: string): void;
}

export default class Analyzation {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static generateHtmlReport(team: string) {
    return new Analyzation(new WinsAnalysis(team), new HtmlReport());
  }
  static generateConsoleReport(team: string) {
    return new Analyzation(new WinsAnalysis(team), new ConsoleReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
