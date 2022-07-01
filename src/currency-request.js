export class CurrencyRequest {
  static async getCurrency(currencyType, currencyConvert) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/10801311019cb9145181614b/pair/${currencyType}/${currencyConvert}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    } catch(error) {
      return error.message;
    }
  }
}