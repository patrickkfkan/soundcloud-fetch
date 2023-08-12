export default class FetchError extends Error {

  #status: number;
  #statusText: string;

  constructor(status: number, statusText: string) {
    super(`${status} - ${statusText}`);
    this.name = 'FetchError';
    this.#status = status;
    this.#statusText = statusText;
  }

  get status() {
    return this.#status;
  }

  get statusText() {
    return this.#statusText;
  }
}
