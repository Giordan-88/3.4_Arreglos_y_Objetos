const propiedades_ventas = [
  {
    nombre: "Casa de campo, Francia",
    src: "https://a0.muscache.com/im/pictures/d9710888-6104-494b-8ebb-3a16798203f0.jpg?im_w=1200&im_format=avif",
    descripcion: "Acogedora casa de campo rodeada de viñedos y colinas en la campiña francesa. Perfecta para disfrutar de la tranquilidad.",
    ubicacion: "Dordogne, Francia",
    habitaciones: 3,
    bano: 2,
    costo: 4.5, 
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa cíclada en Míkonos, Grecia",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-822913772975856360/original/377d8618-30b8-4ff6-86f5-78b9413416ec.jpeg?im_w=1200&im_format=avif",
    descripcion: "Casa típica griega con paredes blancas y detalles azules, ubicada en la mágica isla de Míkonos, cerca del mar.",
    ubicacion: "Míkonos, Grecia",
    habitaciones: 5,
    bano: 3,
    costo: 6.0, 
    smoke: true,
    pets: true,
  },
  {
    nombre: "Minicasa, Eslovenia",
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTM5Mjk3OTg%3D/original/97a9e62f-62c5-4204-a663-7a101106b127.jpeg?im_w=1200&im_format=avif",
    descripcion: "Encantadora minicasa rodeada de bosques en Eslovenia, ideal para escapadas románticas o como casa de retiro.",
    ubicacion: "Triglav, Eslovenia",
    habitaciones: 1,
    bano: 1,
    costo: 1.2,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Villa en Sporades, Grecia",
    src: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1141163486452217495/original/cdb359d1-a447-433a-8776-224a34dd9255.jpeg?im_w=1200&im_format=avif",
    descripcion: "Elegante villa con vistas panorámicas al mar Egeo, ideal para familias que buscan lujo en las islas griegas.",
    ubicacion: "Skiathos, Grecia",
    habitaciones: 4,
    bano: 4,
    costo: 8.0, 
    smoke: true,
    pets: true,
  },
];

const propiedades_alquiler = [
  {
    nombre: "Chalé en Windebruch, Alemania",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-53225345/original/fadf091f-bfde-4b53-a0b7-ef47b47db118.jpeg?im_w=1200&im_format=avif",
    descripcion: "Chalé rústico con interiores modernos, rodeado de naturaleza en una pintoresca aldea alemana.",
    ubicacion: "Windebruch, Alemania",
    habitaciones: 3,
    bano: 2,
    costoA: 200, 
    smoke: false,
    pets: true,
  },
  {
    nombre: "Cabaña en Gathemo, Francia",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-893923710830876653/original/d2d9ecc2-1f7c-42d9-8afd-32c5578326d4.jpeg?im_w=1200&im_format=avif",
    descripcion: "Cabaña acogedora con chimenea y terraza privada, perfecta para explorar Normandía.",
    ubicacion: "Gathemo, Normandía, Francia",
    habitaciones: 2,
    bano: 1,
    costoA: 150, 
    smoke: true,
    pets: true,
  },
  {
    nombre: "Villa en Lourdata, Grecia",
    src: "https://a0.muscache.com/im/pictures/93966c19-bbad-45b6-bcea-7b6dff8fe005.jpg?im_w=1200&im_format=avif",
    descripcion: "Villa frente al mar en la tranquila aldea de Lourdata, rodeada de jardines exuberantes.",
    ubicacion: "Lourdata, Cefalonia, Grecia",
    habitaciones: 4,
    bano: 3,
    costoA: 350, 
    smoke: false,
    pets: false,
  },
  {
    nombre: "Habitación en Pelago, Italia",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-22644318/original/c186b03e-2357-4011-9127-d952c88b37e3.jpeg?im_w=1200&im_format=avif",
    descripcion: "Habitación con encanto en una villa toscana, rodeada de viñedos y olivos.",
    ubicacion: "Pelago, Toscana, Italia",
    habitaciones: 1,
    bano: 1,
    costoA: 100, 
    smoke: true,
    pets: true,
  },
];

let todasLasVentas = document.getElementById("todasLasVentas");
let venta = document.getElementById("venta");
let alquiler = document.getElementById("alquiler");

function mostrarPropiedades(array, receptor, numero) {
  let plantilla = `<div class='cards'>`;

  for (let elemento of array.slice(0, numero)) {
    plantilla += `
 <div class="card">
        <h3>${elemento.nombre}</h3>
        <img src="${elemento.src}" alt="${elemento.nombre}" />
        <p>${elemento.descripcion}</p>
        <p><strong>Ubicación:</strong> <i class="fas fa-map-marker-alt"></i> ${elemento.ubicacion} </p>
        <p><strong>Habitaciones:</strong> <i class="fas fa-bed"></i> ${elemento.habitaciones}  |  <strong>Baños:</strong> <i class="fas fa-bath"></i> ${elemento.bano}</p>
        <p><strong>Costo:</strong> <i class="fas fa-dollar-sign"></i> $${elemento.costo}Millones</p>
        <div class="smoke">
          ${
            elemento.smoke
              ? `<p class='fumar'><i class="fas fa-smoking"></i> Se puede fumar</p>`
              : `<p class='nofumar'><i class="fas fa-smoking-ban"></i> NO se puede fumar</p>`
          }
        </div>
        <div class="pet">
          ${
            elemento.pets
              ? `<p class='mascotas'><i class="fas fa-paw"></i> Se permiten mascotas</p>`
              : `<p class='sinMascotas'><i class="fa-solid fa-ban"></i> NO se permiten mascotas</p>`
          }
        </div>
      </div>
    `;
  }

  

  plantilla += `</div>`;
  receptor.innerHTML = plantilla;
}

function mostrarPropiedadesAlquiler(array, receptor, numero) {
  let plantilla = `<div class='cards'>`;

  for (let elemento of array.slice(0, numero)) {
    plantilla += `
 <div class="card">
        <h3>${elemento.nombre}</h3>
        <img src="${elemento.src}" alt="${elemento.nombre}" />
        <p>${elemento.descripcion}</p>
        <p><strong>Ubicación:</strong> <i class="fas fa-map-marker-alt"></i> ${elemento.ubicacion} </p>
        <p><strong>Habitaciones:</strong> <i class="fas fa-bed"></i> ${elemento.habitaciones}  |  <strong>Baños:</strong> <i class="fas fa-bath"></i> ${elemento.bano}</p>
        <p><strong>Costo:</strong> <i class="fas fa-dollar-sign"></i> $${elemento.costoA} | Mensual</p>
        <div class="smoke">
          ${
            elemento.smoke
              ? `<p class='fumar'><i class="fas fa-smoking"></i> Se puede fumar</p>`
              : `<p class='nofumar'><i class="fas fa-smoking-ban"></i> NO se puede fumar</p>`
          }
        </div>
        <div class="pet">
          ${
            elemento.pets
              ? `<p class='mascotas'><i class="fas fa-paw"></i> Se permiten mascotas</p>`
              : `<p class='sinMascotas'><i class="fa-solid fa-ban"></i> NO se permiten mascotas</p>`
          }
        </div>
      </div>
    `;
  }

  

  plantilla += `</div>`;
  receptor.innerHTML = plantilla;
}

//Pagina Ventas
let pVentas = document.getElementById("pVentas");

//Pagina Alquiler

let pAlquiler = document.getElementById("pAlquiler");

//Condicion para validar id
if (venta && alquiler) {
  mostrarPropiedades(propiedades_ventas, venta, 3),
    mostrarPropiedadesAlquiler(propiedades_alquiler, alquiler, 3);
} else {
}

if (pVentas) {
  mostrarPropiedades(propiedades_ventas, pVentas);
} else {
}

if (pAlquiler) {
  mostrarPropiedadesAlquiler(propiedades_alquiler, pAlquiler);
} else {
}
