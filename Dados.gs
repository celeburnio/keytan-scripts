var dado1position = 'E11';
var dado2position = 'F11';

var dadoFormula = '=Dados!A';

var showCardUsed = 'G26';

var playasList = ['Rojo', 'Verde', 'Amarillo', 'Azul', 'Marron', 'Naranja'];

function tirarDado() {
  var randomNum = Math.floor(Math.random() * (6)) + 1;
  Logger.log("Ha salido: " + randomNum);
  return randomNum;
}

function tirarDados() {
  var dado1 = tirarDado();
  var dado2 = tirarDado();
  var hojaMaster = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Todos");
  Logger.log("El resultado de los dados: [" + dado1 + "] [" + dado2 + "]");
  hojaMaster.getRange(dado1position).setValue(dadoFormula + dado1);
  hojaMaster.getRange(dado2position).setValue(dadoFormula + dado2);
  
  //clear devCardShowed
  for (playa in playasList) {
    Logger.log("Clearing card in playa: " + playasList[playa]);
    SpreadsheetApp.getActive().getSheetByName(playasList[playa]).getRange(showCardUsed).clearContent();
  }
}

