var devCardsRange = 'B18:B51';
var devCardsColumn = 'B';
var devCardsCogidaColumn = 'C';
var devCardsInit = 18;
var devCardsEnd = 51;
var devCardsTotal = 'C13';
var devCardsCogidas = 'C14';
var devCardsPlaya = 'C10';
var devCardsPlayaPhotoRow = 15;
var devCardsPlayaPhotoColumn = ['G', 'I', 'K', 'M', 'O', 'Q', 'R', 'T', 'V'];

var DC_caballero = '=DevelopmentCards!H14';
var DC_monopolio = '=DevelopmentCards!I14';
var DC_carreteras = '=DevelopmentCards!J14';
var DC_invento = '=DevelopmentCards!K14';
var DC_VP_mercado = '=DevelopmentCards!H3';
var DC_VP_biblioteca = '=DevelopmentCards!I3';
var DC_VP_ayuntamiento = '=DevelopmentCards!J3';
var DC_VP_iglesia = '=DevelopmentCards!K3';
var DC_VP_universidad = '=DevelopmentCards!L3';

var USED_DC_caballero = '=DevelopmentCards!H36';
var USED_DC_monopolio = '=DevelopmentCards!I36';
var USED_DC_carreteras = '=DevelopmentCards!J36';
var USED_DC_invento = '=DevelopmentCards!K36';
var USED_DC_VP_mercado = '=DevelopmentCards!H25';
var USED_DC_VP_biblioteca = '=DevelopmentCards!I25';
var USED_DC_VP_ayuntamiento = '=DevelopmentCards!J25';
var USED_DC_VP_iglesia = '=DevelopmentCards!K25';
var USED_DC_VP_universidad = '=DevelopmentCards!L25';

var showCardUsed = 'G26';

var playasList = ['Rojo', 'Verde', 'Amarillo', 'Azul', 'Marron', 'Naranja'];

var dado1position = 'E11';
var dado2position = 'F11';

function clearDevCards(){
  //colNumber is the numeric value of the colum
  //startRow is the number of the starting row

  var sheet = SpreadsheetApp.getActiveSheet();
  var numRows = sheet.getLastRow() - startRow + 1; // The number of row to clear
  var range = sheet.getRange(startRow, colNumber, numRows);
  range.clear();

}

function resetBoard() {
  var developmentCardHoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DevelopmentCards");
  var masterHoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Todos");
  var result = devCardsInit;
  
  // clear devel cards
  while (result <= devCardsEnd) {
    var numCeldaCheck = devCardsCogidaColumn + result;
    developmentCardHoja.getRange(numCeldaCheck).setValue(0);
    result = result + 1;
  }

  // randomize development cards
  
  var rango = developmentCardHoja.getRange(devCardsRange);
  rango.randomize();
  
  // reset playas cards
 
  developmentCardHoja.getRange(devCardsCogidas).setValue(0);
  for (playa in playasList) {
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playasList[playa]).getRange(devCardsPlaya).setValue(0);
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playasList[playa]).getRange('F15:Z25').clearContent(); // clean development cards
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(playasList[playa]).getRange('C3:C7').setValue(0); // Reset cartas materiales
  }
  
  // clear dices
  
  masterHoja.getRange(dado1position).clearContent();
  masterHoja.getRange(dado2position).clearContent();
  
}

function getCardCell(card) {
  var cell = '';
  if(card === 'DC_caballero') {
    cell = DC_caballero;
  } else if(card === 'DC_monopolio') {
    cell = DC_monopolio;
  } else if(card === 'DC_carreteras') {
    cell = DC_carreteras;
  } else if(card === 'DC_invento') {
    cell = DC_invento;
  } else if(card === 'DC_VP_mercado') {
    cell = DC_VP_mercado;
  } else if(card === 'DC_VP_biblioteca') {
    cell = DC_VP_biblioteca;
  } else if(card === 'DC_VP_ayuntamiento') {
    cell = DC_VP_ayuntamiento;
  } else if(card === 'DC_VP_iglesia') {
    cell = DC_VP_iglesia;
  } else if(card === 'DC_VP_universidad') {
    cell = DC_VP_universidad;
  }
  return cell;
}

function cogerDevelopmentCard() {
  var hojaPlaya = SpreadsheetApp.getActive();
  var numDevCardsPlaya = hojaPlaya.getRange(devCardsPlaya).getValue();
  var developmentCardHoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DevelopmentCards");
  var numCartasTotal = developmentCardHoja.getRange(devCardsTotal).getValue();
  var numCartasCogidas = developmentCardHoja.getRange(devCardsCogidas).getValue();

  if (numCartasCogidas === numCartasTotal) {
    Browser.msgBox("No quedan más cartas");
    return;
  }

  var cartaPillada = false;
  var result = devCardsInit;
  while (cartaPillada != true) {
    var numCeldaCheck = devCardsCogidaColumn + result;
    var celdaCheck = developmentCardHoja.getRange(numCeldaCheck);
    if (developmentCardHoja.getRange(numCeldaCheck).getValue() === 0) {
      var numCelda = devCardsColumn + result;
      var celda = developmentCardHoja.getRange(numCelda);
      var valor = celda.getValue();
      celdaCheck.setValue(1);
      developmentCardHoja.getRange(devCardsCogidas).setValue(numCartasCogidas + 1);
      cartaPillada = true; 
      hojaPlaya.getRange(devCardsPlayaPhotoColumn[numDevCardsPlaya] + devCardsPlayaPhotoRow).setValue(getCardCell(valor));
      hojaPlaya.getRange(devCardsPlaya).setValue(numDevCardsPlaya + 1);
    } else {
      result = result + 1;
    }
  }
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function revealCardOnAllPlayas(card) {
   for (playa in playasList) {
     if (playasList[playa] === SpreadsheetApp.getActive().getActiveSheet().getName()) {
       continue;
     }
     SpreadsheetApp.getActive().getSheetByName(playasList[playa]).getRange(showCardUsed).setValue(card);
  }
 // Logger.log("INIT TIMER");
 // Utilities.sleep(15000);
  //Logger.log("AFTER TIMER");
  //for (playa in playasList) {
//    Logger.log("Clearing card in playa: " + playasList[playa]);
//    SpreadsheetApp.getActive().getSheetByName(playasList[playa]).getRange(showCardUsed).clearContent();
//  }

}

function useDevelopmentCard() {
  var hojaPlaya = SpreadsheetApp.getActiveSheet();
  var numDevCardsPlaya = hojaPlaya.getRange(devCardsPlaya).getValue();
  var currentCell = hojaPlaya.getCurrentCell();
  var formula = currentCell.getFormula();

  if (formula === DC_caballero) {
    hojaPlaya.getRange(currentCell.getA1Notation()).setValue(USED_DC_caballero);
  } else if (formula === DC_monopolio) {
    hojaPlaya.getRange(currentCell.getA1Notation()).setValue(USED_DC_monopolio);
  } else if (formula === DC_carreteras) {
    hojaPlaya.getRange(currentCell.getA1Notation()).setValue(USED_DC_carreteras);
  } else if (formula === DC_invento) {
    hojaPlaya.getRange(currentCell.getA1Notation()).setValue(USED_DC_invento);
  } else if (formula === DC_VP_mercado) {
    hojaPlaya.getRange(currentCell.getA1Notation()).setValue(USED_DC_VP_mercado);
  } else if (formula === DC_VP_biblioteca) {
    hojaPlaya.getRange(currentCell.getA1Notation()).setValue(USED_DC_VP_biblioteca);
  } else if (formula === DC_VP_ayuntamiento) {
    hojaPlaya.getRange(currentCell.getA1Notation()).setValue(USED_DC_VP_ayuntamiento);
  } else if (formula === DC_VP_iglesia) {
    hojaPlaya.getRange(currentCell.getA1Notation()).setValue(USED_DC_VP_iglesia);
  } else if (formula === DC_VP_universidad) {
    hojaPlaya.getRange(currentCell.getA1Notation()).setValue(USED_DC_VP_universidad);
  }
  
  revealCardOnAllPlayas(formula);
}

