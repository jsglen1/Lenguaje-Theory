//asigna el respectivo nombre de los metodos testeo  no mas
function NombresFunciones() {
    if (globaltype >= 1 && globaltype <= 3) {
        label1title.innerHTML = "Alfabeto  N°1";
        label2title.innerHTML = ">Alfabeto  N°2";
    } else if (globaltype >= 4 && globaltype <= 9) {
        label1title.innerHTML = "Lenguaje  N°1";
        label2title.innerHTML = ">Lenguaje  N°2";
    } else {
        label1title.innerHTML = "Palabra  N°1";
        label2title.innerHTML = ">Palabra  N°2";
    }
    //alert(ArrayNombres[globaltype-1]);
}

// manejo de los forms graficos
function MostrarForms(){
    document.getElementById("FormIndex").style.display = "block";
    LabeltitleNames2.innerHTML =" Use [,] para separar los datos" ;
    if(globaltype>=1 && globaltype<=7){
        document.getElementById("FormText2").style.display = "block";
    }else if(globaltype==8 || globaltype==10){
        document.getElementById("FormText2").style.display = "none";
    }else if(globaltype==9){
        label2title.innerHTML = ">Exponente";
        document.getElementById("FormText2").style.display = "block";
    }
}

//Comiensa implementar la logica desde aqui
function mostrar(tipol) {
    globaltype = tipol;
    LabeltitleNames.innerHTML = ArrayNombres[globaltype-1] ;
    NombresFunciones();
    MostrarForms();
}

// run por defecto aparece en pantalla en el index html 
if(globaltype==-1){
    document.getElementById("FormIndex").style.display = "none";
}
