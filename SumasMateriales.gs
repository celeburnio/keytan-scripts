//Materiales

var PLAYA_PIEDRO = 'C3';
var PLAYA_MADERO = 'C4';
var PLAYA_BARRO = 'C5';
var PLAYA_PAJA = 'C6';
var PLAYA_OVEJO = 'C7';

function sumaPiedro() {
  var hoja = SpreadsheetApp.getActive().getActiveSheet();
  Logger.log("La hoja activa es: " + hoja.getName());
  var celda = hoja.getRange(PLAYA_PIEDRO);
  var valor = celda.getValue();
  var incremento = celda.setValue(valor + 1);
}

function sumaMadero() {
  var hoja = SpreadsheetApp.getActive().getActiveSheet();
  var celda = hoja.getRange(PLAYA_MADERO);
  var valor = celda.getValue();
  var incremento = celda.setValue(valor + 1);
}

function sumaBarro() {
  var hoja = SpreadsheetApp.getActive().getActiveSheet();
  var celda = hoja.getRange(PLAYA_BARRO);
  var valor = celda.getValue();
  var incremento = celda.setValue(valor + 1);
}

function sumaPaja() {
  var hoja = SpreadsheetApp.getActive().getActiveSheet();
  var celda = hoja.getRange(PLAYA_PAJA);
  var valor = celda.getValue();
  var incremento = celda.setValue(valor + 1);
}

function sumaOvejo() {
  var hoja = SpreadsheetApp.getActive().getActiveSheet();
  var celda = hoja.getRange(PLAYA_OVEJO);
  var valor = celda.getValue();
  var incremento = celda.setValue(valor + 1);
}

function restaPiedro() {
  var hoja = SpreadsheetApp.getActive().getActiveSheet();
  var celda = hoja.getRange(PLAYA_PIEDRO);
  var valor = celda.getValue();
  var incremento = celda.setValue(valor - 1);
}

function restaMadero() {
  var hoja = SpreadsheetApp.getActive().getActiveSheet();
  var celda = hoja.getRange(PLAYA_MADERO);
  var valor = celda.getValue();
  var incremento = celda.setValue(valor - 1);
}

function restaBarro() {
  var hoja = SpreadsheetApp.getActive().getActiveSheet();
  var celda = hoja.getRange(PLAYA_BARRO);
  var valor = celda.getValue();
  var incremento = celda.setValue(valor - 1);
}

function restaPaja() {
  var hoja = SpreadsheetApp.getActive().getActiveSheet();
  var celda = hoja.getRange(PLAYA_PAJA);
  var valor = celda.getValue();
  var incremento = celda.setValue(valor - 1);
}

function restaOvejo() {
  var hoja = SpreadsheetApp.getActive().getActiveSheet();
  var celda = hoja.getRange(PLAYA_OVEJO);
  var valor = celda.getValue();
  var incremento = celda.setValue(valor - 1);
}