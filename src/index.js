import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { CurrencyRequest } from './currency-request';

function getElementsCurrency(response) {
  if (response) {
    $('#conversionOutput').text(response.conversion_rate);
    $('#exchangeOutput').text(response.conversion_result);
  } else { $('#errorOutput').text(`THERE WAS AN ERROR ${response}`); }
}

async function makeCurrencyApiCall(currencyType, currencyConvert, exchangeAmount) {
  const response = await CurrencyRequest.getCurrency(currencyType, currencyConvert, exchangeAmount);
  getElementsCurrency(response);
}

$(document).ready(function () {
  $('#currencyExchanger').submit(function (event) {
    event.preventDefault();
    let currencyType = $('#currencyType').val();
    let currencyConvert = $('#currencyConvert').val();
    let exchangeAmount = $('#exchangeAmount').val();
    makeCurrencyApiCall(currencyType, currencyConvert, exchangeAmount);
  });
});