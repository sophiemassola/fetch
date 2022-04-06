console.log('Ajax y Fetch');

const URL = 'https://swapi.dev/api/planets/';

function AgregarNombresAlDom (names) {
    let root = document.getElementById('root');
    root.innerHTML=null; //acá borro lo q había.
    names.forEach( x => { 
        console.log(x.name); //esto es para ver los nombres del array
        let list = document.createElement('li'); //para mostrarlos al dom.
        list.innerText = x.name;
        root.appendChild(list);
    });

}

// API NO LOCAL ↓↓

fetch(URL)//es una función que recibe una URL.
    .then( respuesta => { return respuesta.json()} )//este then va a esperar a que se resuelva la promesa y nos de una rta, que se convierte a JSON. Recibe una función flecha. El convertirlo a JSON hace que se genere una nueva promesa, por lo que debemos capturarla con el próximo then. Si le saco las llaves, tengo un return implicito y no hace falta ponerlo. Retorna una promesa.
    .then( datos => {
        console.log(datos);//muestra todo
        AgregarNombresAlDom(datos.results);//le pasamos el array completo.

       console.log(datos.results); //para ver sólo el array de obj
       
    } )


// API LOCAL

const data = 'data.json';

fetch(URL)
    .then( res => res.json())
    .then( data => {
        // console.log(data);
        data.forEach( data =>{
            console.log(data.climate)
        })
    } );