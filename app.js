let obtenerProductos = 'https://api.mercadolibre.com/sites/MLC/categories';

(async function conectarAPI() {
    try {
        const respuesta = await (await fetch(obtenerProductos)).json();
        console.log(respuesta);

        const lista = document.getElementById('miLista');

        respuesta.forEach(categoria => {
            const item = document.createElement('li'); 
            item.textContent = categoria.name; 
            lista.appendChild(item); 
        });
    } catch (error) {
        console.log(error);
    }
})();