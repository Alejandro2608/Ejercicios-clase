// Declarar mis variables
var metrosCuadrados = 0;
var tipoDeInmueble= "";
var valorDeAdministracion = 0;
var cuotaDeAseo = 0;
var valorDerechosDeGimnasio= 0;
var genero = "";
var edad = 0;
var cantidadPersonas = 0;


//capturar datos de entrada
metrosCuadrados = prompt("Digite los " +
"metros cuadrados");

tipoDeInmueble = prompt ("Digite el tipo de inmueble" + 
'Inmueble "Casa" o "Apartamento".');
tipoDeInmueble = tipoDeInmueble.toUpperCase();


cantidadPersonas = prompt("digite la cantidad de personas "+
"que viven en el inmueble");

for(var i=0; i<cantidadPersonas; i++){
    genero = prompt ("Digite su genero"+(i+1));
    genero = genero.toUpperCase();

    edad = prompt ("Digite su edad"+(i+1));

valorDerechosDeGimnasio += calcularValorDerechosDeGimnasio(
    genero, edad
);

}






//Proceso o calculos del problema
valorDeAdministracion=
    calcularValorDeAdministracion(
        metrosCuadrados, tipoDeInmueble
    );
cuotaDeAseo = calcularCuotaDeAseo(
    valorDeAdministracion
);


    

function calcularValorDeAdministracion(
metrosCuadrados, tipoDeInmueble

){
    if(tipoDeInmueble=="CASA"){
        return metrosCuadrados*1500+100000;
    }else if(tipoDeInmueble=="APARTAMENTO"){
        return metrosCuadrados*1500+50000
    }else{
        return "Tipo de inmueble no valido";
    }
    

}
function calcularCuotaDeAseo(
     valorDeAdministracion
){
    return (valorDeAdministracion*0.1)+
    (metrosCuadrados*1000);
}

function calcularValorDerechosDeGimnasio(
    genero, edad){
        switch(genero){
            case "MASCULINO":
                if (edad<10){
                    return 0;
                }else if (edad>= 10 && edad <20){
                    return 20000;
                    
                }
                else if (edad>=20 && edad < 60 ){
                    return 15000
                }else if(edad>=40 && edad<60){
                    return 1000;
                }else {
                    return 0;
                }
            break;
            case  "FEMENINO":
                if (edad<10){
                    return 0; 
                }else if (edad>=10 && edad<18 ){
                    return 15000;
                }else if(edad>=18 && edad<35){
                    return 12000;
                }else if (edad >=35 && edad <55){
                    return 8000;
                }
                else {
                    return 0
                }
                break;
        }
    
}



//salidas el sistema
document.write("el valor de la administracion es: " 
+ valorDeAdministracion+"<br>");
document.write("El valor de la cuota de aseo es: "
+cuotaDeAseo+"<br>");
document.write("El valor de los derechos del gimnasio es: "
+valorDerechosDeGimnasio);