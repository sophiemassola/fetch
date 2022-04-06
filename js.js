console.log('Segunda entrega TF');



//Declaración de arrays ↓↓
const precios = [];

//----------------------------------------EVENTOS Y DOM----------------------------------------


//Referencia a los botones de cuadros y esculturas.
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const reset = document.getElementById('reset');
const recuperar = document.getElementById('recuperar');
const subtotal = document.getElementById('subtotal');


//Declaración de variables 
let C1=0; 
let C2=0;
let C3=0;
let C4=0;


//Declaración de funciones ↓↓
function seleccionC1(){
    C1=C1+1;
    if (C1>0){
        listado1.innerHTML = null;
        let x = document.getElementById('x1');
        let xx = document.getElementById('xx1');
        const c1 = `Ha agregado ${x.innerText} ${xx.innerText} x ${C1} al carrito.`;
        alert(c1);
        localStorage.setItem('cuadro1',c1);
        let agregarc1 = document.createElement('li');
        agregarc1.innerHTML = `${c1}`;
        listado1.append(agregarc1);    
        precios.push(150000); 
    }
}



function seleccionC2(){
    C2=C2+1;

    if (C2>0){
        listado2.innerHTML = null;
        let x = document.getElementById('x2');
        let xx = document.getElementById('xx2');
        const c2 = `Ha agregado ${x.innerText} ${xx.innerText} x ${C2} al carrito.`;
        alert(c2);
        localStorage.setItem('cuadro2',c2);
        let agregarc2 = document.createElement('li');
        agregarc2.innerHTML = `${c2}`;
        listado2.append(agregarc2);
        precios.push(90000); 
    }
}

function seleccionC3(){
    C3=C3+1;
    if (C3>0){
        listado3.innerHTML = null;
        let x = document.getElementById('x3');
        let xx = document.getElementById('xx3');
        const c3 = `Ha agregado ${x.innerText} ${xx.innerText} x ${C3} al carrito.`;
        alert(c3);
        localStorage.setItem('cuadro3',c3);
        let agregarc3 = document.createElement('li');
        agregarc3.innerHTML = `${c3}`;
        listado3.append(agregarc3); 
        precios.push(210000);
    }
    }



function seleccionC4(){
    C4=C4+1;

    if (C4>0){
        listado4.innerHTML = null;
        let x = document.getElementById('x4');
        let xx = document.getElementById('xx4');
        const c4 = `Ha agregado ${x.innerText} ${xx.innerText} x ${C4} al carrito.`;
        alert(c4);
        localStorage.setItem('cuadro4',c4);
        let agregarc4 = document.createElement('li');
        agregarc4.innerHTML = `${c4}`;
        listado4.append(agregarc4); 
        precios.push(110000);
    }
}

function fnRecuperar(){
    const cuadro1 = localStorage.getItem('cuadro1');
    const cuadro2 = localStorage.getItem('cuadro2');
    const cuadro3 = localStorage.getItem('cuadro3');
    const cuadro4 = localStorage.getItem('cuadro4');
    //alert(`${cuadro1}\n${cuadro2}\n${cuadro3}\n${cuadro4}`)
    

    if ( cuadro1 != null){
        let agregarc1 = document.createElement('li');
        agregarc1.innerHTML = `${cuadro1}`;
        listado5.append(agregarc1); 
    }
    
    if ( cuadro2 != null){
        let agregarc2 = document.createElement('li');
        agregarc2.innerHTML = `${cuadro2}`;
        listado6.append(agregarc2); 
    }
    
    if ( cuadro3 != null){
        let agregarc3 = document.createElement('li');
        agregarc3.innerHTML = `${cuadro3}`;
        listado7.append(agregarc3); 
    }
    
    if ( cuadro4 != null){
    let agregarc4 = document.createElement('li');
    agregarc4.innerHTML = `${cuadro4}`;
    listado8.append(agregarc4); 
    }
}


function fnSubtotal () {
    let suma = 0;
    const total = (x) => suma = suma+x;
    precios.forEach(total); //Función de orden superior
    localStorage.setItem('suma',suma);
    alert(` Subtotal : $${localStorage.getItem('suma')}`);
    
}



//Eventos para cuadros 
c1.addEventListener('click',seleccionC1);
c2.addEventListener('click',seleccionC2);
c3.addEventListener('click',seleccionC3);
c4.addEventListener('click',seleccionC4);
reset.addEventListener('click', () => localStorage.clear());
recuperar.addEventListener('click', fnRecuperar);
subtotal.addEventListener('click', fnSubtotal);


