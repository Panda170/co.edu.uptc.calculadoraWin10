window.onload = function(){}; //Acciones tras cargar la página
pantalla=document.getElementById("ans");
pantallaAcumulada=document.getElementById("accumulated");
x="0"; //número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
ni=0; //número oculto o en espera.
operation="no"; //operación en curso; "no" =  sin operación.
prev=x;

//mostrar número en pantalla según se va escribiendo:
function numero(entrada) { //recoge el número pulsado en el argumento.
         if (x=="0" || xi==1  ) {   // inicializar un número, 
            pantalla.innerHTML=entrada; //mostrar en pantalla
            x=entrada; //guardar número
            prev=x;
            if (entrada==",") { //si escribimos una coma al principio del número
               pantalla.innerHTML="0,"; //escribimos 0.
               x=entrada; //guardar número
               prev=x;
               coma=1; //cambiar estado de la coma
               }
           }
           else { //continuar escribiendo un número
               if (entrada=="," && coma==0) { //si escribimos una coma decimal pòr primera vez
                   pantalla.innerHTML+=entrada;
                   x+=entrada;
                   prev=x;
                   coma=1; //cambiar el estado de la coma  
               }
               //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
               else if (entrada=="," && coma==1) {} 
               //Resto de casos: escribir un número del 0 al 9:      
               else {
                   pantalla.innerHTML+=entrada;
                   x+=entrada;
                   prev=x;
               }
            }
            xi=0; //el número está iniciado y podemos ampliarlo.
         }
function operate(s) {
         solve(); //si hay operaciones pendientes se realizan primero
         ni=x; //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
         operation=s; //guardamos tipo de operación.
         pantallaAcumulada.innerHTML=pantallaAcumulada.innerHTML+prev+s;
         xi=1; //inicializar pantalla.
         }  
function solve() {
         if (operation=="no") { //no hay ninguna operación pendiente.
            pantalla.innerHTML=x;   //mostramos el mismo número
            }
         else { //con operación pendiente resolvemos
            sl=ni+operation+x; // escribimos la operación en una cadena
            sol=eval(sl); //convertimos la cadena a código y resolvemos
            pantalla.innerHTML=sol; //mostramos la solución
            prev=x;// segundo numero del acumulado
            x=sol; //guardamos la solución
            operation="no"; //ya no hayn operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
            }
        }
function solveequal(){
            sl=ni+operation+x; // escribimos la operación en una cadena
            sol=eval(sl); //convertimos la cadena a código y resolvemos
            pantalla.innerHTML=sol; //mostramos la solución
            prev=x;// segundo numero del acumulado
            pantallaAcumulada.innerHTML=pantallaAcumulada.innerHTML+x;
            x=sol; //guardamos la solución
            operation="no"; //ya no hayn operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
}
function raizc() {
         x=Math.sqrt(x); //resolver raíz cuadrada.
         pantalla.innerHTML=x; //mostrar en pantalla resultado
         operation="no"; //quitar operaciones pendientes.
         xi=1; //se puede reiniciar la pantalla 
         }
function opuest() { 
         nx=Number(x); //convertir en número
         nx=-nx; //cambiar de signo
         x=String(nx); //volver a convertir a cadena
         pantalla.innerHTML=x; //mostrar en pantalla.
         }
function inve() {
         nx=Number(x);
         nx=(1/nx);
         x=String(nx);       
         pantalla.innerHTML=x;
         xi=1; //reiniciar pantalla al pulsar otro número.
         }
function retro(){ //Borrar sólo el último número escrito.
         cifras=x.length; //hayar número de caracteres en pantalla
         br=x.substr(cifras-1,cifras); //describir último caracter
         x=x.substr(0,cifras-1); //quitar el ultimo caracter
         if (x=="") {x="0";} //si ya no quedan caracteres, pondremos el 0
         if (br==".") {coma=0;} //Si el caracter quitado es la coma, se permite escribirla de nuevo.
         pantalla.innerHTML=x; //mostrar resultado en pantalla   
         }
function borradoParcial() {
    pantalla.innerHTML=0; //Borrado de pantalla;
    x=0;//Borrado indicador número pantalla.
        coma=0; //reiniciamos también la coma               
        }
function borradoTotal() {
    pantalla.innerHTML=0; //poner pantalla a 0
    pantallaAcumulada.innerHTML="";
    x="0"; //reiniciar número en pantalla
    coma=0; //reiniciar estado coma decimal 
    i=0; //indicador de número oculto a 0;
    operation="no"; //borrar operación en curso.
         }
function power(){
    x=Math.pow(x,2); //resolver exponente
    pantalla.innerHTML=x; //mostrar en pantalla resultado
    operation="no"; //quitar operaciones pendientes.
    xi=1; 
}
function sin(){
    auxdisplay=x;
    x=Math.sin(x);
    pantalla.innerHTML=x;
    pantallaAcumulada.innerHTML="sin ("+auxdisplay+")";
}
function cos(){
    auxdisplay=x;
    x=Math.cos(x);
    pantalla.innerHTML=x;
    pantallaAcumulada.innerHTML="cos ("+auxdisplay+")";
}
function tan(){
    auxdisplay=x;
    x=Math.tan(x);
    pantalla.innerHTML=x;
    pantallaAcumulada.innerHTML="tan ("+auxdisplay+")";
}
function x3(){
    x=Math.pow(x,3); //resolver exponente
    pantalla.innerHTML=x; //mostrar en pantalla resultado
    operation="no"; //quitar operaciones pendientes.
    xi=1; 
}
function yroot(){
}
function arcsin(){
    auxdisplay=x; // guarda el valor antes de ser procesado
    x=Math.asin(x);
    pantalla.innerHTML=x;
    pantallaAcumulada.innerHTML="sen^-1 ("+auxdisplay+")";
}
function arccos(){
    auxdisplay=x;
    x=Math.acos(x);
    pantalla.innerHTML=x;
    pantallaAcumulada.innerHTML="cos^-1 ("+auxdisplay+")";    
}
function arctan(){
    auxdisplay=x;
    x=Math.atan(x);
    pantalla.innerHTML=x;
    pantallaAcumulada.innerHTML="tan^-1 ("+auxdisplay+")";
}
function x10(){
    auxdisplay=x;
    x=Math.pow(10,x);
    pantalla.innerHTML=x;
    pantallaAcumulada.innerHTML="10^"+auxdisplay;
}
function log(){
    auxdisplay=x;
    x=Math.log(x);
    pantalla.innerHTML=x;
    pantallaAcumulada.innerHTML="Log ("+auxdisplay+")";
}
function unosobrex(){
    auxdisplay=x;
    x=1/(x);
    pantalla.innerHTML=x;
    pantallaAcumulada.innerHTML="1 / "+auxdisplay;
}
function epowx(){
    auxdisplay=x;
    x=Math.pow(Math.E,x);
    pantalla.innerHTML=x;
    pantallaAcumulada.innerHTML="e ^ "+auxdisplay;
}
function logn(){
    auxdisplay=x;
    x=Math.ln(x);
    pantalla.innerHTML=x;
    pantallaAcumulada.innerHTML="Ln ("+auxdisplay+")";   
}
function ppi(){
    auxdisplay=x;
    x=Math.PI;
    pantalla.innerHTML=x;
    pantallaAcumulada.innerHTML=x;
}
function fact(){
    //pantalla.innerHTML=x;
   // pantallaAcumulada.innerHTML=x;
   factorial(x,x-1);
}
function factorial(x, i){
    if(i==0){
        pantalla.innerHTML=x;
        pantallaAcumulada.innerHTML=x;
    }
    else{
    x=x*i;
    i--;
    factorial(x,i);
    }
}






