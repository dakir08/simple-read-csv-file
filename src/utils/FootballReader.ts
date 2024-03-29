import dateStringToDate from './dateStringToDate';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import CsvFileReader from './CsvFileReader';

interface DataReader {
  readFile(): void;
  data: string[][];
}

export default class FootballReader {
  static fromCsv(fileLocation: string): FootballReader {
    return new FootballReader(new CsvFileReader(`./${fileLocation}`));
  }

  data: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.readFile();
    this.data = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ];
      }
    );
  }
}
