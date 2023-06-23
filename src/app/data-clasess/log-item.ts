export class LogItem {
  private lines: string[];
  private logName: string;

  constructor(source: string[], logName: string = '') {
    this.lines = source;
    this.logName = logName;
  }

  get name(): string {
    return this.logName;
  }

  set name(value: string) {
    this.logName = value;
  }

  getSize(): number {
    return this.lines.length;
  }

  getLine(lineNr: number): string {
    if (lineNr < 0) {
      lineNr = 0;
    } else if (lineNr >= this.lines.length) {
      return '';
    }
    return this.lines[lineNr];
  }
  getLines(lineNr: number, size = 0): string[] {
    if (lineNr < 0) {
      lineNr = 0;
    } else if (lineNr >= this.lines.length) {
      lineNr = this.lines.length - 1;
      size = 0;
    }

    if (lineNr + size >= this.lines.length) {
      size = this.lines.length - lineNr - 1;
    }

    if (size < 0) {
      size = 0;
    }
    return this.lines.slice(lineNr, lineNr + size);
  }
}
