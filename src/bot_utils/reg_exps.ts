export class RegExps {
  readonly start: RegExp;
  readonly tar: RegExp;
  readonly add: RegExp;
  readonly Status: RegExp;
  readonly list: RegExp;
  readonly getFolder: RegExp;
  readonly cancel: RegExp;
  readonly cancelAll: RegExp;

  constructor(commands: string[]) {
    this.start = new RegExp(commands[0], 'i');
    this.tar = new RegExp(commands[1], 'i');
    this.add = new RegExp(commands[2], 'i');
    this.Status = new RegExp(commands[3], 'i');
    this.list = new RegExp(commands[4], 'i');
    this.getFolder = new RegExp(commands[5], 'i');
    this.cancel = new RegExp(commands[6], 'i');
    this.cancelAll = new RegExp(commands[7], 'i');
  }
}
