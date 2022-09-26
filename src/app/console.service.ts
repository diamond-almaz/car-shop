import { environment } from "src/environments/environment";

export class ConsoleService {
  log(text: string) {
    if (environment.production === false) {
      console.log(text);
    }
  }
}