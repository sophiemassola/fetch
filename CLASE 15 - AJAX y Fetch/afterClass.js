console.log('After Class - API de Rick & Morty');

const URL_CHARACTERS = "https://rickandmortyapi.com/api/character";

const URL_USD_OFICIAL = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

/*fetch(URL_USD_OFICIAL)
    .then( res => res.json() ) //hacemos un return implicito de convertir eso a JSON. Esto devuelve una 2da promesa.
    .then ( data => {
        console.log(data)
    })*/


    function AgregarNombresAlDom (names) {
        let root = document.getElementById('root');
        root.innerHTML=null; //acá borro lo q había.
        names.forEach( x => { 
            console.log(x.casa.compra); //esto es para ver los nombres del array
            let list = document.createElement('li'); //para mostrarlos al dom.
            list.innerText = x.casa.compra;
            root.appendChild(list);
        });
    
    }
    
    // API NO LOCAL ↓↓
    
    fetch(URL_USD_OFICIAL)//es una función que recibe una URL.
        .then( respuesta => { return respuesta.json()} )//este then va a esperar a que se resuelva la promesa y nos de una rta, que se convierte a JSON. Recibe una función flecha. El convertirlo a JSON hace que se genere una nueva promesa, por lo que debemos capturarla con el próximo then. Si le saco las llaves, tengo un return implicito y no hace falta ponerlo. Retorna una promesa.
        .then( datos => {
            console.log(datos);//muestra todo
            AgregarNombresAlDom(datos);//le pasamos el array completo.
    
           console.log(datos); //para ver sólo el array de obj
           
        } )