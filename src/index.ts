import FootballReader from './utils/FootballReader';
import Analyzation from './utils/Analyzation';

const footballReader = FootballReader.fromCsv('../football.csv');

footballReader.load();

const analyze = Analyzation.generateConsoleReport('Bournemouth');

const htmlAnalyze = Analyzation.generateHtmlReport('Bournemouth');

analyze.buildAndPrintReport(footballReader.data);
htmlAnalyze.buildAndPrintReport(footballReader.data);
