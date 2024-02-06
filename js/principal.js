/* Contraer y expandir menú del header */
let menuHamburguesa = document.querySelector('#logo-menu-hamburguesa');
let menuCerrar = document.querySelector('#logo-menu-cerrar');
let contenedorListadoMenu = document.querySelector('#contenedor-listado-menu');

menuHamburguesa.addEventListener('click', () => {
    contenedorListadoMenu.classList.remove('elemento-oculto');
    contenedorListadoMenu.classList.add('elemento-visible');

    menuHamburguesa.classList.remove('elemento-visible');
    menuHamburguesa.classList.add('elemento-oculto');

    menuCerrar.classList.remove('elemento-oculto');
    menuCerrar.classList.add('elemento-visible');
})

menuCerrar.addEventListener('click', () => {
    contenedorListadoMenu.classList.remove('elemento-visible');
    contenedorListadoMenu.classList.add('elemento-oculto');

    menuHamburguesa.classList.remove('elemento-oculto');
    menuHamburguesa.classList.add('elemento-visible');

    menuCerrar.classList.remove('elemento-visible');
    menuCerrar.classList.add('elemento-oculto');
})

let arregloItemsMenu = document.querySelectorAll('.item-menu');
for (let i = 0; i < arregloItemsMenu.length; i++) {
    arregloItemsMenu[i].addEventListener('click', () => {
        console.log("Estoy apretando un item del menu");

        contenedorListadoMenu.classList.remove('elemento-visible');
        contenedorListadoMenu.classList.add('elemento-oculto');
    
        menuHamburguesa.classList.remove('elemento-oculto');
        menuHamburguesa.classList.add('elemento-visible');
    
        menuCerrar.classList.remove('elemento-visible');
        menuCerrar.classList.add('elemento-oculto');
        
        });
}
