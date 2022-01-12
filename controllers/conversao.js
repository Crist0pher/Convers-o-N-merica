

function conversao(numeros) {
  var unidades = ["", "Um", "Dois", "Três", "Quatro ", "Cinco", "Seis", "Sete", "Oito", "Nove"];
  var especiais = ["Dez", "Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezsete", "Dezoito", "Deznove"];
  var dezenas = ["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
  var centenas = ["Cento", "Duzentos", "Trezentos", "Quatrocentos", "Quinhetos", "Seiscentos", "Setescentos", "Oitocentos", "Novecentos"];

  if (numeros.length === 1) {

    if (numeros[0] == '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') {
      return unidades[parseInt(numeros[0])];
    }
  } else if (numeros.length === 2) {
    if (numeros[0] == '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' && numeros[1] === '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') {
      return dezenas[parseInt(numeros[0] - 2)] + " e " + unidades[parseInt(numeros[1])];
    } if (numeros[0]=='1' && numeros[1]=='0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9') {
      return especiais[parseInt(numeros[0] - 1)]
  }

  }
   else if (numeros.length === 3) {
    if (numeros[0] == '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' && numeros[1] === '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' && numeros[1] === '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') {
      return centenas[parseInt(numeros[0] - 1)] + " e " + dezenas[parseInt(numeros[0] - 2)] + " e " + unidades[parseInt(numeros[0])-1];
    }

  } else if (numeros.length === 4) {
    if (numeros[0] == '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' && numeros[0] == '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' && numeros[1] === '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' && numeros[1] === '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') {
      return unidades[parseInt(numeros[0])] + " mil e " + centenas[parseInt(numeros[1] - 1)] + " e " + dezenas[parseInt(numeros[2] - 2)] + " e " + unidades[parseInt(numeros[3])];
    }

  } else if (numeros.length === 5) {
    if (numeros[0] == '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' && numeros[0] == '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' && numeros[0] == '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' && numeros[1] === '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' && numeros[1] === '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') {
      return dezenas[parseInt(numeros[0] - 2)] + " e " + unidades[parseInt(numeros[1])] + " mil e " + centenas[parseInt(numeros[2] - 2)] + " e " + dezenas[parseInt(numeros[3] - 1)] + " e " + unidades[parseInt(numeros[0])];
    }

  }


}



module.exports = conversao;