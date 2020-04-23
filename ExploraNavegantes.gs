var materiasColumn = 'G';
var materiasCogidasColumn = 'H';
var materiasInit = 2;
var materiasTotal = 'E10';
var materiasCogidas = 'E11';

var numfichasColumn = 'J';
var numfichasCogidasColumn = 'K';
var numfichasInit = 2;
var numfichasTotal = 'E24';
var numfichasCogidas = 'E25';

var materiasPhotoColumn = 'A';
var numfichasPhotoColumn = 'B';

var PIEDRO = '=Navegantes!A41';
var MADERO = '=Navegantes!A25';
var BARRO = '=Navegantes!A17';
var PAJA = '=Navegantes!A33';
var OVEJO = '=Navegantes!A9';
var ORO = '=Navegantes!A1';
var DESIERTO = '=Navegantes!A49';
var MAR = '=Navegantes!A57';
var TOTAL = '=Navegantes!AE10';

var DOS = '=Navegantes!B1';
var TRES = '=Navegantes!B5';
var CUATRO = '=Navegantes!B9';
var CINCO = '=Navegantes!B13';
var SEIS = '=Navegantes!B17';
var OCHO = '=Navegantes!B21';
var NUEVE = '=Navegantes!B25';
var DIEZ = '=Navegantes!B29';
var ONCE = '=Navegantes!B33';
var DOCE = '=Navegantes!B37';

var NUM_PIEDRO = 'E2';
var NUM_MADERO = 'E3';
var NUM_BARRO = 'E4';
var NUM_PAJA = 'E5';
var NUM_OVEJO = 'E6';
var NUM_ORO = 'E7';
var NUM_DESIERTO = 'E8';
var NUM_MAR = 'E9';
var NUM_TOTAL = 'E10';

var NUM_DOS = 'E14';
var NUM_TRES = 'E15';
var NUM_CUATRO = 'E16';
var NUM_CINCO = 'E17';
var NUM_SEIS = 'E18';
var NUM_OCHO = 'E19';
var NUM_NUEVE = 'E20';
var NUM_DIEZ = 'E21';
var NUM_ONCE = 'E22';
var NUM_DOCE = 'E23';
var NUM_NUMTOTAL = 'E24';

var materiaHojaMasterPos = 'E14';
var numfichasHojaMasterPos = 'G16';

function checkValidGround(materia) {
  Logger.log("Vamos a chequear la materia: " + materia);
  if (materia === 'DESIERTO') {
    return false;
  } else if(materia === 'MAR') {
    return false;
  } else {
    return true;
  }
}

function getMateriaCell(materia) {
  var cell = '';
  if(materia === 'PIEDRO') {
    cell = PIEDRO;
  } else if(materia === 'MADERO') {
    cell = MADERO;
  } else if(materia === 'BARRO') {
    cell = BARRO;
  } else if(materia === 'PAJA') {
    cell = PAJA;
  } else if(materia === 'OVEJO') {
    cell = OVEJO;
  } else if(materia === 'ORO') {
    cell = ORO;
  } else if(materia === 'DESIERTO') {
    cell = DESIERTO;
  } else if(materia === 'MAR') {
    cell = MAR;
  }
  return cell;
}

function getNumfichasCell(numfichas) {
  var cell = '';
  if(numfichas === 'DOS') {
    cell = DOS;
  } else if(numfichas === 'TRES') {
    cell = TRES;
  } else if(numfichas === 'CUATRO') {
    cell = CUATRO;
  } else if(numfichas === 'CINCO') {
    cell = CINCO;
  } else if(numfichas === 'SEIS') {
    cell = SEIS;
  } else if(numfichas === 'OCHO') {
    cell = OCHO;
  } else if(numfichas === 'NUEVE') {
    cell = NUEVE;
  } else if(numfichas === 'DIEZ') {
    cell = DIEZ;
  } else if(numfichas === 'ONCE') {
    cell = ONCE;
  } else if(numfichas === 'DOCE') {
    cell = DOCE;
  }
  return cell;
}

function clearMaterias() {
  var hojaNavegantes = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Navegantes');
  hojaNavegantes.getRange(materiasColumn + materiasInit + ':' + materiasColumn + 90).clearContent();
  hojaNavegantes.getRange(materiasCogidasColumn + materiasInit + ':' + materiasCogidasColumn + 90).clearContent();
  hojaNavegantes.getRange(materiasCogidas).setValue(0);
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Todos').getRange(materiaHojaMasterPos).clearContent();
}

function clearNumfichas() {
  var hojaNavegantes = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Navegantes');
  hojaNavegantes.getRange(numfichasColumn + numfichasInit + ':' + numfichasColumn + 90).clearContent();
  hojaNavegantes.getRange(numfichasCogidasColumn + numfichasInit + ':' + numfichasCogidasColumn + 90).clearContent();
  hojaNavegantes.getRange(numfichasCogidas).setValue(0);
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Todos').getRange(numfichasHojaMasterPos).clearContent();
}

function createRandomMaterias() {
  clearMaterias();
  var hojaNavegantes = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Navegantes');
  var materias = [];
  var numPiedros = hojaNavegantes.getRange(NUM_PIEDRO).getValue();
  var numMaderos = hojaNavegantes.getRange(NUM_MADERO).getValue();
  var numBarros = hojaNavegantes.getRange(NUM_BARRO).getValue();
  var numPajas = hojaNavegantes.getRange(NUM_PAJA).getValue();
  var numOvejos = hojaNavegantes.getRange(NUM_OVEJO).getValue();
  var numOros = hojaNavegantes.getRange(NUM_ORO).getValue();
  var numDesiertos = hojaNavegantes.getRange(NUM_DESIERTO).getValue();
  var numMares = hojaNavegantes.getRange(NUM_MAR).getValue();
  var total = hojaNavegantes.getRange(NUM_TOTAL).getValue();
  
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
  for (i = 0; i < numOros; i++) {
    materias.push('ORO');
  }
  for (i = 0; i < numDesiertos; i++) {
    materias.push('DESIERTO');
  }
  for (i = 0; i < numMares; i++) {
    materias.push('MAR');
  }
  
  for (i = 0; i < total; i++) {
    hojaNavegantes.getRange(materiasColumn + (materiasInit + i)).setValue(materias[i]);
    hojaNavegantes.getRange(materiasCogidasColumn + (materiasInit + i)).setValue(0);
  }
  
  var rango = hojaNavegantes.getRange(materiasColumn + materiasInit + ':' + materiasColumn + (materiasInit + total));
  rango.randomize();
}

function createRandomNumfichas() {
  clearNumfichas();
  var hojaNavegantes = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Navegantes');
  var numfichas = [];
  var numDos = hojaNavegantes.getRange(NUM_DOS).getValue();
  var numTres = hojaNavegantes.getRange(NUM_TRES).getValue();
  var numCuatro = hojaNavegantes.getRange(NUM_CUATRO).getValue();
  var numCinco = hojaNavegantes.getRange(NUM_CINCO).getValue();
  var numSeis = hojaNavegantes.getRange(NUM_SEIS).getValue();
  var numOcho = hojaNavegantes.getRange(NUM_OCHO).getValue();
  var numNueve = hojaNavegantes.getRange(NUM_NUEVE).getValue();
  var numDiez = hojaNavegantes.getRange(NUM_DIEZ).getValue();
  var numOnce = hojaNavegantes.getRange(NUM_ONCE).getValue();
  var numDoce = hojaNavegantes.getRange(NUM_DOCE).getValue();
  var total = hojaNavegantes.getRange(NUM_NUMTOTAL).getValue();
  
  for (i = 0; i < numDos; i++) {
    numfichas.push('DOS');
  }
  for (i = 0; i < numTres; i++) {
    numfichas.push('TRES');
  }
  for (i = 0; i < numCuatro; i++) {
    numfichas.push('CUATRO');
  }
  for (i = 0; i < numCinco; i++) {
    numfichas.push('CINCO');
  }
  for (i = 0; i < numSeis; i++) {
    numfichas.push('SEIS');
  }
  for (i = 0; i < numOcho; i++) {
    numfichas.push('OCHO');
  }
  for (i = 0; i < numNueve; i++) {
    numfichas.push('NUEVE');
  }
  for (i = 0; i < numDiez; i++) {
    numfichas.push('DIEZ');
  }
  for (i = 0; i < numOnce; i++) {
    numfichas.push('ONCE');
  }
  for (i = 0; i < numDoce; i++) {
    numfichas.push('DOCE');
  }
  
  for (i = 0; i < total; i++) {
    hojaNavegantes.getRange(numfichasColumn + (numfichasInit + i)).setValue(numfichas[i]);
    hojaNavegantes.getRange(numfichasCogidasColumn + (numfichasInit + i)).setValue(0);
  }
  
  var rango = hojaNavegantes.getRange(numfichasColumn + numfichasInit + ':' + numfichasColumn + (numfichasInit + total));
  rango.randomize();
}

function resetNavegantes() {
  createRandomMaterias()
  createRandomNumfichas()
}

function descubrirIsla() {
  var navegantesHoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Navegantes");
  var masterHoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Todos");
  var numMaterialesTotal = navegantesHoja.getRange(materiasTotal).getValue();
  var numMaterialesCogidos = navegantesHoja.getRange(materiasCogidas).getValue();
  var numNumfichasTotal = navegantesHoja.getRange(numfichasTotal).getValue();
  var numNumfichasCogidos = navegantesHoja.getRange(numfichasCogidas).getValue();

  if (numMaterialesCogidos === numMaterialesTotal) {
    Browser.msgBox("No quedan más cartas !!!");
    return;
  }

  var cartaPillada = false;
  var posicion = materiasInit;
  while (cartaPillada != true) {
    var numCeldaCheck = materiasCogidasColumn + posicion;
    var celdaCheck = navegantesHoja.getRange(numCeldaCheck);
    if (navegantesHoja.getRange(numCeldaCheck).getValue() === 0) {
      var numCelda = materiasColumn + posicion;
      var celda = navegantesHoja.getRange(numCelda);
      var valor = celda.getValue();
      celdaCheck.setValue(1);
      navegantesHoja.getRange(materiasCogidas).setValue(numMaterialesCogidos + 1);
      cartaPillada = true; 
      masterHoja.getRange(materiaHojaMasterPos).setValue(getMateriaCell(valor));
      
      if (checkValidGround(valor)) {
        var cartaNumfichasPillada = false;
        var posicionNumfichas = numfichasInit;
        while (cartaNumfichasPillada != true) {
          var numCeldaNumfichasCheck = numfichasCogidasColumn + posicionNumfichas;
          var celdaNumFichasCheck = navegantesHoja.getRange(numCeldaNumfichasCheck);
          if (navegantesHoja.getRange(numCeldaNumfichasCheck).getValue() === 0) {
            var numCeldaNumfichas = numfichasColumn + posicionNumfichas;
            var celdaNumfichas = navegantesHoja.getRange(numCeldaNumfichas);
            var valorNumfichas = celdaNumfichas.getValue();
            celdaNumFichasCheck.setValue(1);
            navegantesHoja.getRange(numfichasCogidas).setValue(numNumfichasCogidos + 1);
            cartaNumfichasPillada = true; 
            masterHoja.getRange(numfichasHojaMasterPos).setValue(getNumfichasCell(valorNumfichas));
          } else {
            posicionNumfichas = posicionNumfichas + 1;
          }
        }
      } else {
        masterHoja.getRange(numfichasHojaMasterPos).clearContent();
      }
    } else {
      posicion = posicion + 1;
    }
  }

}

