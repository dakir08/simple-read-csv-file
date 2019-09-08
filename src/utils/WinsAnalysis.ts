import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';

export default class WinsAnalysis {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    matches.forEach(match => {
      if (match[1] === this.teamName && match[5] === MatchResult.homeWin) {
        wins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResult.awayWin
      ) {
        wins++;
      }
    });

    return `Team ${this.teamName} won ${wins} games`;
  }
}
