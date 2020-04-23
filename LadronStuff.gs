//Materiales

var LADRON_PIEDRO = 'C3';
var LADRON_MADERO = 'C4';
var LADRON_BARRO = 'C5';
var LADRON_PAJA = 'C6';
var LADRON_OVEJO = 'C7';
var LADRON_TOTAL = 'C8';

var playasList = ['Rojo', 'Verde', 'Amarillo', 'Azul', 'Marron', 'Naranja'];

function tieneMaterias(playaName) {
  Logger.log("tieneMaterias: Checking playa " + playaName);
  hojaPlaya = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playaName)
  totalCell = hojaPlaya.getRange(LADRON_TOTAL);
  total = totalCell.getValue();
  Logger.log("tieneMaterias: Checking playa " + playaName + " materias number " + total);
  Logger.log("el total es type: " + typeof A);
  if (total === 0) {
    Logger.log("tieneMaterias: Checking playa " + playaName + " materias number " + total + "que tiene ceroooooo");  
    return false;
  }
  return true;
}

function cogeCartaAleatoria(playaName) {
  Logger.log("cogeCartaAleatoria: Checking playa " + playaName);
  var materias = [];
  var numPiedros = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playaName).getRange(LADRON_PIEDRO).getValue();
  var numMaderos = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playaName).getRange(LADRON_MADERO).getValue();
  var numBarros = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playaName).getRange(LADRON_BARRO).getValue();
  var numPajas = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playaName).getRange(LADRON_PAJA).getValue();
  var numOvejos = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playaName).getRange(LADRON_OVEJO).getValue();
  var total = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playaName).getRange(LADRON_TOTAL).getValue();
  Logger.log("cogeCartaAleatoria: Checking playa " + playaName + " materias number " + total);
  
  for (i = 0; i < numPiedros; i++) {
    materias.push('PIEDRO');
  }
  for (i = 0; i < numMaderos; i++) {
    materias.push('MADERO');
  }
  for (i = 0; i < numBarros; i++) {
    materias.push('BARRO');
  }
  for (i = 0; i < numPajas; i++) {
    materias.push('PAJA');
  }
  for (i = 0; i < numOvejos; i++) {
    materias.push('OVEJO');
  }
  
  var randomNum = Math.floor(Math.random() * (total));
  Logger.log("Robamos la carta n" + randomNum + " que es un " + materias[randomNum]);
  Browser.msgBox("Has robado un " + materias[randomNum]);
  if (materias[randomNum] === 'PIEDRO') {
    return LADRON_PIEDRO;
  } else if (materias[randomNum] === 'MADERO') {
    return LADRON_MADERO;
  } else if (materias[randomNum] === 'BARRO') {
    return LADRON_BARRO;
  } else if (materias[randomNum] === 'PAJA') {
    return LADRON_PAJA;
  } else if (materias[randomNum] === 'OVEJO') {
    return LADRON_OVEJO;
  }
}

function robarCarta() {
  var hojaPlaya = SpreadsheetApp.getActive();
  var ui = SpreadsheetApp.getUi();
  var result = ui.prompt("A quién quieres robarle?");
  var playaFound = false;
  for (playa in playasList) {
    Logger.log("Checking playa " + playasList[playa]);
    Logger.log("la hoja actual es " + hojaPlaya.getSheetName());
    if (result.getResponseText() === playasList[playa]) {
      playaFound = true;
      if (result.getResponseText() === hojaPlaya.getSheetName()) {
        Browser.msgBox("No puedes robarte a ti mismo!! PSICOFALLO!!");
        break;
      }

      if (tieneMaterias(playasList[playa]) === true) {
        Logger.log("Encontraste al playa " + result.getResponseText());
        var cartaRobada = cogeCartaAleatoria(playasList[playa]);
        var playaRobadoNumCartas = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playasList[playa]).getRange(cartaRobada).getValue();
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playasList[playa]).getRange(cartaRobada).setValue(playaRobadoNumCartas - 1);

        var playaLadronNumCartas = SpreadsheetApp.getActive().getRange(cartaRobada).getValue();
        SpreadsheetApp.getActive().getRange(cartaRobada).setValue(playaLadronNumCartas + 1);
      } else {
        Browser.msgBox("El playa " + result.getResponseText() + " no tiene materias. PSICOFALLO!!");
      }
      break;
    }
  }

  if (playaFound === false) {
    Browser.msgBox("No existe ese playa, TRY HARDER!!");
    return;
  }
}

function robarCartaAlPlaya(playa) {
  var hojaPlaya = SpreadsheetApp.getActive();
  Logger.log("La hoja activa es: " + hojaPlaya.getSheetName());
  Logger.log("El playa es: " + playa);

  if (playa === hojaPlaya.getSheetName()) {
    Browser.msgBox("No puedes robarte a ti mismo!! PSICOFALLO!!");
    return;
  }
  
  if (tieneMaterias(playa) === true) {
    var cartaRobada = cogeCartaAleatoria(playa);
    var playaRobadoNumCartas = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playa).getRange(cartaRobada).getValue();
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playa).getRange(cartaRobada).setValue(playaRobadoNumCartas - 1);
    
    var playaLadronNumCartas = SpreadsheetApp.getActive().getRange(cartaRobada).getValue();
    SpreadsheetApp.getActive().getRange(cartaRobada).setValue(playaLadronNumCartas + 1);
  } else {
    Browser.msgBox("El playa " + playa + " no tiene materias. PSICOFALLO!!");
  }
}

function robarCartaAlPlayaRojo() {
  robarCartaAlPlaya('Rojo');
}

function robarCartaAlPlayaVerde() {
  robarCartaAlPlaya('Verde');
}

function robarCartaAlPlayaAmarillo() {
  robarCartaAlPlaya('Amarillo');
}

function robarCartaAlPlayaAzul() {
  robarCartaAlPlaya('Azul');
}

function robarCartaAlPlayaMarron() {
  robarCartaAlPlaya('Marron');
}

function robarCartaAlPlayaNaranja() {
  robarCartaAlPlaya('Naranja');
}

function onOpen(e) {
  SpreadsheetApp.getUi()
      .createMenu('Ladron')
      .addItem('Robar al Rojo', 'robarCartaAlPlayaRojo')
      .addItem('Robar al Verde', 'robarCartaAlPlayaVerde')
      .addItem('Robar al Amarillo', 'robarCartaAlPlayaAmarillo')
      .addItem('Robar al Azul', 'robarCartaAlPlayaAzul')
      .addItem('Robar al Marron', 'robarCartaAlPlayaMarron')
      .addItem('Robar al Naranja', 'robarCartaAlPlayaNaranja')
      .addToUi();
  SpreadsheetApp.getUi()
      .createMenu('UseDevCard')
      .addItem('Usar Carta Seleccionada', 'useDevelopmentCard')
      .addToUi();
}

