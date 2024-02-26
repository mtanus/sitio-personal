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


/* Validar formulario de contacto */
const campoNombre = document.getElementById('campo-nombre'),
      campoMail = document.getElementById('campo-email'),
      campoMensaje = document.getElementById('campo-mensaje'),
      formularioContacto = document.getElementById('formulario-contacto');

function validarNombre(nombre) {
    let expreg = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2}[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*/gm; // Al menos un nombre de 2 letras
    let expregNumero = /[0-9]+/gm; // Contiene algún número
    return (expreg.test(nombre) && !expregNumero.test(nombre))
}

function validarMail(mail) {
    let expreg = /^[A-Za-z][\w.-]+\@[A-Za-z]+[.][A-Za-z]{2,}/i; // Inicie con letra, puede contener ., -, _ y luego del @ admite sólo letras
    return expreg.test(mail);
}

function validarFormulario() {
    const nombre = campoNombre.value; 
    const mail = campoMail.value; 
    const mj = campoMensaje.value; 

    let formularioValido = true;

    if(!validarNombre(nombre)) {
        console.log("Nombre erróneo: " + nombre);
        campoNombre.focus();
        formularioValido = false;
    } else if(!validarMail(mail)) {
        console.log("Mail erróneo: " + mail);
        campoMail.focus();
        formularioValido = false;
    } else if (mj == "") {
        console.log("Mensaje vacío: " + mj);
        campoMensaje.focus();
        formularioValido = false;
    }

    return formularioValido
}

const enviarFormulario = (evento) => {
    evento.preventDefault();

    if (validarFormulario()) {
        const datosContacto = {
            nombre:campoNombre.value,
            email:campoMail.value,
            "mj-email":campoMensaje.value
        };
        const mjEnviado = document.getElementById('mensaje-enviado');
        
        fetch('https://formbold.com/s/3pM7r', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(datosContacto)
        })
        .then(respuesta => console.log("Respuesta del servidor: ", respuesta))
        .then(respuestaOK => {
            // console.log("Respuesta del servidor: ", respuestaOK);
            formularioContacto.reset();
            mjEnviado.textContent = "Mensaje enviado exitosamente!"
            setTimeout(() => {
                mjEnviado.textContent = ""
            }, 4000)
        })
        .catch(error => {
            console.log("Error al enviar tu mensaje: ", error);
            mjEnviado.textContent = "Error al enviar tu mensaje. Intenta de nuevo en unos segundos."
            setTimeout(() => {
                mjEnviado.textContent = ""
            }, 4000)
        })
    }
}

formularioContacto.addEventListener('submit', enviarFormulario);


/* Aparición flecha para subir al inicio o scroll up */
const aparecerFlechaSubir = () => {
    const linkEncabezado = document.getElementById('link-encabezado');

    // Visualizo la flecha para subir al bajar un poco con el mouse
    if (this.scrollY >= 200) {
        linkEncabezado.classList.remove('elemento-oculto');
        linkEncabezado.classList.add('elemento-visible') 
    } else {
        linkEncabezado.classList.remove('elemento-visible');
        linkEncabezado.classList.add('elemento-oculto'); 
    }
    
}

window.addEventListener('scroll', aparecerFlechaSubir);

/* Aparición de información detallada al posarse sobre los logos de contacto */
const infoAdicional = document.getElementById('info-adicional');

const logoMail = document.querySelector('#listado-contacto .fi-rr-envelope');
const mostrarMail = () => {
    infoAdicional.textContent = 'mtanusmafud@gmail.com';
}
logoMail.addEventListener('mouseover', mostrarMail);

const ocultarMail = () => {
    infoAdicional.textContent = '';
}
logoMail.addEventListener('mouseout', ocultarMail);


const logoTelefono = document.querySelector('#listado-contacto .fi-rr-phone-flip');
const mostrarTelefono = () => {
    infoAdicional.textContent = '+54 9 343 4626333';
}
logoTelefono.addEventListener('mouseover', mostrarTelefono);

const ocultarTelefono = () => {
    infoAdicional.textContent = '';
}
logoTelefono.addEventListener('mouseout', ocultarTelefono);


const logoUbicacion = document.querySelector('#listado-contacto .fi-rr-marker');
const mostrarUbicacion = () => {
    infoAdicional.textContent = 'Neuquén - Argentina';
}
logoUbicacion.addEventListener('mouseover', mostrarUbicacion);

const ocultarUbicacion = () => {
    infoAdicional.textContent = '';
}
logoUbicacion.addEventListener('mouseout', ocultarUbicacion);
