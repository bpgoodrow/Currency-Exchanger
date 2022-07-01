export class CurrencyRequest {
  static async getCurrency(currencyType, currencyConvert, exchangeAmount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/10801311019cb9145181614b/pair/${currencyType}/${currencyConvert}/${exchangeAmount}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}