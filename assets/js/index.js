const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://construir.com.pe/wp-content/uploads/2023/04/PLAYA3.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];

/* -------------------- despligue de propiedades --------------------------*/
function despliegue(data) {
  const mach = document.querySelector(".mach");
  mach.innerHTML = data.length;
  const propiedades = document.querySelector(".propiedades");
  let html = ``;
  for (propiedad of data){
    html += `
    <div class="propiedad">
      <div class="img" style="background-image: url('${propiedad.src}')"></div>
      <section>
        <h5>${propiedad.name}</h5>
        <div class="d-flex justify-content-between">
          <p>Cuartos: ${propiedad.rooms}</p>
          <p>Metros: ${propiedad.m}</p>
        </div>
          <p class="my-3">${propiedad.description}</p>
          <button class="btn btn-info ">Ver más</button>
      </section>
    </div>  
    `
  };
  propiedades.innerHTML = html;
};
despliegue(propiedadesJSON);


/* ----------------- captura y validacion de entradas ------------------------*/
//captura de los input
const roomsData = document.querySelector("#rooms");
const desdeData = document.querySelector("#desde");
const hastaData = document.querySelector("#hasta");

//captura y escucha de evento click del boton
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {

  //almacena los valores de input al escuchar el click
  let rooms =(Number(roomsData.value));
  let desde =(Number(desdeData.value));
  let hasta =(Number(hastaData.value));

  //valida los valores de los input
  if (rooms <= 0 || desde <= 0 || hasta <= 0){
    alert("valores no pueden ser 0 o menores que 0");
  } else if (hasta < desde){
    alert("valor [-hasta-] debe ser igual o mayor que [-desde-]");
  } else {
    //se llama a la funcion con los valores validados ok
    filtrarPropiedades(rooms, desde, hasta);
  };
});


/* ------------------- filtrado propiedades --------------------------------*/
function filtrarPropiedades(habit, desde, hasta){
  let newpropiedades = [];
  for (propiedad of propiedadesJSON){
    if (propiedad.rooms >= habit && propiedad.m >= desde && propiedad.m <= hasta){
      newpropiedades.push(propiedad);
    };
  };
  despliegue(newpropiedades);  
};

