export class CurrencyRequest {
  static async getCurrency() {
    try {
      const response = await fetch(``);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    } catch(error) {
      return error.message;
    }
  }
}