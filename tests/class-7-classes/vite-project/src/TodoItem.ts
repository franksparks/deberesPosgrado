export class TodoItem {
  what: string;
  done: boolean;

  constructor(what: string, done?: boolean) {
    this.what = what;
    this.done = done || false;
  }

  toggleDone() {
    this.done = !this.done;
  }
}
