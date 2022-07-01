import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { CurrencyRequest } from './currency-request';

function getElementsCurrency(response) {
  let usd = response;
  $('#exchangeOutput').html(``)
}

async function makeCurrencyApiCall(usd, currecncyType){
  const response = await CurrencyRequest.getCurrency(exchange);
  getElementsCurrency(response);
}

$(document).ready(function(){
  $('#currencyExchanger').submit(function(event){
    event.preventDefault();
    let usd = $('#usd').val();
    let currecncyType = $('#currencyType').val();
  })
})