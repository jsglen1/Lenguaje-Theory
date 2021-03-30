// valida lo que sea que entre
function ejecutar() {

  var data1 = document.getElementById("text1").value;
  var data2 = document.getElementById("text2").value;

  if(globaltype!=10){
    data1 = data1.split(",");
  }
  data2 = data2.split(",");

  if (ProValida(data1) == ProValida(data2)) { // no permite las pendejadas en teoria xd
    
    switch (globaltype) {
      case 1:
         VerAlertNice(union(data1, data2));
        break;
      case 2:
        VerAlertNice(diferencia(data1, data2));
        break;
      case 3:
        VerAlertNice(interseccion(data1, data2));
        break;
      case 4:
        VerAlertNice(union(data1, data2));
        break;
      case 5:
        VerAlertNice(diferencia(data1, data2));
        break;
      case 6:
        VerAlertNice(interseccion(data1, data2));
        break;
      case 7:
        VerAlertNice(concatenacion(data1, data2));
        break;
      case 8:
        VerAlertNice(inversa(data1));
        break;
      case 9:
        if (ValidaPotencia.test(data2)) {
          VerAlertNice(ValidaPotencia.test(data2));
          VerAlertNice(potencia(data1, data2));
        } else{
          VerAlertNice("!ERROR Exponente Undefined ");
        }
        break;
      case 10:
        VerAlertNice(cardinalidad(data1));
        break;
      default: alert("F*");
    }
    
  }else{
    VerAlertNice("!ERROR Datos Undefined ");
  }
  
}