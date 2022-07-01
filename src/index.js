import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { CurrencyRequest } from './currency-request';

function getElementsCurrency(response) {
  $('#exchangeOutput').text(response.conversion_rate);
}

async function makeCurrencyApiCall(currencyType, currencyConvert){
  const response = await CurrencyRequest.getCurrency(currencyType, currencyConvert);
  getElementsCurrency(response);
}

$(document).ready(function(){
  $('#currencyExchanger').submit(function(event){
    event.preventDefault();
    let currencyType = $('#currencyType').val();
    let currencyConvert = $('#currencyConvert').val();
    makeCurrencyApiCall(currencyType, currencyConvert);
  });
});