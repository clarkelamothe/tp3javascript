// Array de productos
const productos = [
    {
        id: 1,
        imgUrl: './img/cereza.jpg',
        nombre: 'Cereza',
        precio: 60
    },
    {
        id: 2,
        imgUrl: './img/limon.jpg',
        nombre: 'Limón',
        precio: 50
    },
    {
        id: 3,
        imgUrl: './img/ajo.jpg',
        nombre: 'Ajo',
        precio: 250
    },
    {
        id: 4,
        imgUrl: './img/cebollas.jpg',
        nombre: 'Cebolla',
        precio: 90
    },
    {
        id: 5,
        imgUrl: './img/cafe.jpg',
        nombre: 'Café',
        precio: 120
    },
    {
        id: 6,
        imgUrl: './img/huevos.jpg',
        nombre: 'Huevos',
        precio: 70
    },
    {
        id: 7,
        imgUrl: './img/banana.jpg',
        nombre: 'Bananas',
        precio: 200
    },
    {
        id: 8,
        imgUrl: './img/remolacha.jpg',
        nombre: 'Remolacha',
        precio: 300
    }
]

const listaProductos = document.querySelector('.listaProductos');
function crearLista(producto) {
    const card = document.createElement('section');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = producto.imgUrl;
    image.alt = 'foto de ' + producto.nombre;

    const infoProducto = document.createElement('div');
    const titulo = document.createElement('h2');
    const titulotTexto = document.createTextNode(producto.nombre);
    titulo.appendChild(titulotTexto);
    const precio = document.createElement('p');
    const precioTexto = document.createTextNode('$ ' + producto.precio);
    precio.appendChild(precioTexto);
    infoProducto.append(titulo, precio);
    infoProducto.className = 'infoProducto';

    const botonAgregar = document.createElement('div');
    const agregar = document.createElement('button');
    const agregarTexto = document.createTextNode('Agregar al Carrito');
    agregar.appendChild(agregarTexto);
    botonAgregar.appendChild(agregar);
    botonAgregar.className = 'agregarAlCarrito';

    botonAgregar.addEventListener('click', () => {
        let carrito = [];
        carrito.push(
            {
                'id': producto.id,
                'nombre': producto.nombre,
                'precio': producto.precio
            });
        eliminarCard(card);

        carrito.forEach(itemDelCarrito => {
            crearCarrito(itemDelCarrito);
        })
    });

    card.append(image, infoProducto, botonAgregar);
    listaProductos.appendChild(card);
}

productos.forEach((producto) => {
    crearLista(producto);
})

function eliminarCard(card) {
    card.id = 'seleccionado';
    let seleccionado = document.getElementById('seleccionado');
    listaProductos.removeChild(seleccionado);
}

let total = 0;
function crearCarrito(e) {
    const productosComprados = document.getElementById('productos');
    const productosCompradosTexto = document.createTextNode(e.nombre + '\n');
    productosComprados.append(productosCompradosTexto);

    const precio = document.getElementById('preciosProductoComprado');
    const precioTexto = document.createTextNode(e.precio + '\n');
    precio.appendChild(precioTexto);

    total += e.precio;
}



function realizarCompra(item) {
    /*var precioTotal = document.getElementById('total');
    var precioFinal = document.createElement('p');
    precioFinal.className = 'miP';
    var precioFinalTexto = document.createTextNode(' $ '  + total);
    precioFinal.appendChild(precioFinalTexto);
    precioTotal.appendChild(precioFinal);  */


    let resultado = document.querySelector('h6');
    resultado.innerHTML = total;

}
function remove() {
    window.location.reload();
}




