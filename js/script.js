//Declaracion de variables
var data = [100];
var resultados = document.getElementById('resultados');
var valores = document.getElementById('valores');
var compuertas = document.getElementById('compuertas');

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}

function burbuja() {
    graficar();
    var n, i, k, aux;
    n = data.length;
        console.log("Lista desordenada: ",data);
        for (k = 1; k < n; k++) {
            for (i = 0; i < (n - k); i++) {
                if (data[i] > data[i + 1]) {
                    aux = data[i];
                    data[i] = data[i + 1];
                    data[i + 1] = aux;
                    console.log(data);
                    graficar();
                    sleep(5000);
                }
            }
        }
        console.log("Lista ordenada: ",data); 
}

function aleatorio(){
    //declarar el indice para el arreglo y luego que sea recursiva
    var numero = Math.floor((Math.random() * (500-1)) + 1);
    console.log(numero);
    return numero;
}

function generar(){
    data = [];
   var nume = prompt("¿Cuantos numeros desea generar?");
    var num = parseInt(nume);
    var cont = 0;
    parseInt(cont);
    for (cont = 0; cont < num; cont++) {
        var aleatori = aleatorio();
        console.log(aleatori);
        data[cont]=aleatori;      
    }
    console.log(data);
    graficar();
}

function maximo() {
    var max = Math.max.apply(null, data);
    console.log(max);
    valores.innerHTML = 'Valor maximo: '+ max;
}

function minimo() {
    var min = Math.min.apply(null, data);
    console.log(min);
    valores.innerHTML = 'Valor minimo: '+ min;
}

function graficar() {
    vaciar();
    d3.select('#chart').remove();
    var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

    d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });    
}

function vaciar(){
    resultados.innerHTML = '';
    valores.innerHTML = '';
    compuertas.innerHTML = '';
}

function deMenorAMayor(elem1, elem2) {return elem1-elem2;}

function ordenar() {
    data.sort(deMenorAMayor);
    console.log("Lista ordenada: ",data); 
    graficar();
}


function compuerta() {
    vaciar();
    var a, b, c, d, eTexto; 
    a = 3; 
    b = 5; 
    c = true; 
    d = false; 
    eTexto = '1';

    compuertas.innerHTML = 'Variables: '+'a='+a+' b='+b+' c='+c+' d='+d+' eTexto='+eTexto+'<br>Valor de verdad para a+b == 8 && a-b ==1 es: ' + (a+b == 8 && a-b ==1) + '<br>Valor de verdad para a+b == 8 && a-b ==-2 es: ' + (a+b == 8 && a-b ==-2) +
    ('<br>Valor de verdad para c == d es: ' + (c==d)) + ('<br>Valor de verdad para c&&d es: ' + (c&&d)) + ('<br>Valor de verdad para c||d es: ' + (c||d)) + 
    ('<br>Valor de verdad para !a es: ' + (!a)) + ('<br>Valor de verdad para eTexto === 1: ' + (eTexto === 1)) +
    ('<br>Valor de verdad para eTexto == 1: ' + (eTexto == 1)) + ('<br>Valor de verdad para Zapato < avellano es: ' + ('Zapato'<'avellano'));

}