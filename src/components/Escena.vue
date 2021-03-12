<template>
  <div>
    <InfoFIMEModal />
    <VideoModal :url="videoSeleccionado" />
    <div v-if="totemSeleccionado">
      <InformacionModal :informacion="totemSeleccionado.informacion" />
      <GaleriaModal
        :nombreStand="totemSeleccionado.nombreStand"
        :imagenes="
          totemSeleccionado.informacion.galeria ||
          totemSeleccionado.imagenesPresentacion
        "
      />
      <VideosModal :videos="totemSeleccionado.videos" />
      <PdfModal
        :ofertaTecno="{
          nombreStand: totemSeleccionado.nombreStand,
          ofertaTecno: totemSeleccionado.informacion.ofertatecnologica,
        }"
      />
    </div>
    <MapaModal @cambiar="cambiar" :localizacionActual="localizacionActual" />
    <!-- Button trigger modal Galeria -->
    <a-scene
      device-orientation-permission-ui="enabled: true"
      loading-screen="dotsColor: #00a9e0; backgroundColor: #007cba"
      class="escena"
      inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
      cursor="fuseTimeout: 0;rayOrigin: mouse"
    >
      <a-entity rotation="0 90 0" camera position="0 0 0">
        <a-camera look-controls wasd-controls="acceleration:0"></a-camera>
      </a-entity>
      <a-assets>
        <img src="../assets/play.svg" id="bienvenida" alt="" />
        <img src="../assets/bienvenida.svg" id="bienvenido" alt="" />
        <img src="../assets/bar.svg" id="bar" alt="" />
        <img src="../assets/video.svg" id="video" alt="" />
        <img src="../assets/info.svg" id="info" alt="" />
        <img src="../assets/chat.svg" id="chat" alt="" />
        <img src="../assets/galeria.svg" id="galeria" alt="" />
        <img src="../assets/presentacion.svg" id="presentacion" alt="" />
        <img src="../assets/hotspot.png" id="circulo" alt="" />
        <img src="../assets/flecha.png" id="flecha" alt="" />
        <img src="../assets/doc.svg" id="doc" alt="" />
        <img
          v-for="cielo in cielos"
          :key="cielo"
          :src="require(`../assets/renders/${cielo}`)"
          :id="cielo"
          alt=""
        />
      </a-assets>
      <a-sky
        :rotation="rotacionCielo"
        :src="`#${cielo}`"
        id="cielo"
        animation__fade="property: components.material.material.color; type: color; from: #FFF; to: #000; dur: 300; startEvents: fade"
        animation__fadeback="property: components.material.material.color; type: color; from: #000; to: #FFF; dur: 300; startEvents: animationcomplete__fade"
        radius="150"
      ></a-sky>
      <!-- Navegación -->
      <a-entity
        v-for="(navegador, index) in navegadores"
        :key="index"
        :id="navegador.tipo"
        :position="navegador.posicion"
        v-on:click="cambiar(navegador.hacia)"
        class="link"
        :rotation="navegador.tipo == 'circulo' ? '-90 0 0' : navegador.rotacion"
        :event-set__click="`_target: #cielo; _delay: 300; material.src: #${navegador.hacia}.jpg`"
        geometry="primitive: plane; height: 1; width: 1"
        scale="1.8 1.8 1.8"
        :material="`shader: flat; src: #${navegador.tipo}; alpha-test: 0.230 ;transparent: true`"
        proxy-event="event: click; to: #cielo; as: fade"
        animation__mouseenter="property: scale; to: 2.1 2.1 2.1; startEvents: mouseenter; dur: 100"
        animation__mouseleave="property: scale; to: 1.8 1.8 1.8; startEvents: mouseleave; dur: 100"
      >
      </a-entity>

      <!-- Minitotem video -->
      <a-entity
        v-for="bienvenida in bienvenidas"
        :key="bienvenida.video + bienvenida.posicion"
        id="bienvenida"
        :position="bienvenida.posicion"
        :rotation="bienvenida.rotacion"
        :scale="`0.368 1 0.1`"
        material="side: double; color: #ffffff;  opacity: 1"
        geometry="primitive: box; color: white;"
      >
        <a-entity
          material="side: double; color: #005a87;  opacity: 1"
          geometry="primitive: box; color: white;"
          scale="0.1 1 0.1"
          position="-0.52 0 0.5"
        ></a-entity>
        <a-entity
          text="value: Bienvenida; align: center; color: #333333;"
          scale="4 2 0"
          :position="
            tieneGaleria(bienvenida.video) ? '0  0.35 0.6' : '0 0.1 0.6'
          "
        ></a-entity>
        <!-- Video de bienvenida  -->
        <a-entity
          v-on:click="
            bienvenida.video.length < 8
              ? mostrarTecnologias(bienvenida.video)
              : abrirVideo(bienvenida.video)
          "
          id="bienvenidaIcon"
          class="link"
          :position="
            tieneGaleria(bienvenida.video) ? '0  0.15 0.6' : '0 -0.1 0.6'
          "
          geometry="primitive: plane; height: 1; width: 1"
          material="shader: flat; src: #bienvenida; alpha-test: 0.230 ;transparent: true"
          scale="0.7 0.3 0"
          animation__mouseenter="property: scale; to: 0.75 0.32 0; startEvents: mouseenter; dur: 100"
          animation__mouseleave="property: scale; to: 0.7 0.3 0; startEvents: mouseleave; dur: 100"
        >
        </a-entity>

        <a-entity
          v-if="tieneGaleria(bienvenida.video)"
          text="value: Chat; align: center; color: #333333;"
          scale="4 2 0"
          position="0 -0.05 0.6"
        ></a-entity>

        <!-- Chat  -->
        <a-entity
          class="link"
          v-on:click="abrirWaOChatOChat(bienvenida.nombreStand)"
          position="0  -0.25 0.6"
          geometry="primitive: plane; height: 1; width: 1"
          material="shader: flat; src: #chat; alpha-test: 0.230 ;transparent: true"
          scale="0.7 0.3 0"
          animation__mouseenter="property: scale; to: 0.75 0.32 0; startEvents: mouseenter; dur: 100"
          animation__mouseleave="property: scale; to: 0.7 0.3 0; startEvents: mouseleave; dur: 100"
        >
        </a-entity>
      </a-entity>
      <!-- Bienvenida a la feria  -->
      <!-- <a-entity
        v-if="cielo == 'render0001.jpg'"
        id="bienvenida"
        position="-2.9 1.1 -1.86"
        rotation="0 70 0"
        :scale="`1.3 1.3 0.1`"
      >
        <a-entity
          id="bienvenidaIcon"
          class="link"
          v-on:click="abrirVideo('https://www.youtube.com/embed/0kistbFF_vs')"
          :position="'0 -0.1 0.6'"
          geometry="primitive: plane; height: 1; width: 1"
          material="shader: flat; src: #bienvenido; alpha-test: 0.230 ;transparent: true"
          scale="1 1 0"
          animation__mouseenter="property: scale; to: 1.1 1.1 0; startEvents: mouseenter; dur: 100"
          animation__mouseleave="property: scale; to: 1 1 0; startEvents: mouseleave; dur: 100"
        >
        </a-entity>
      </a-entity> -->

      <!-- Totem de elementos -->
      <a-entity
        v-for="(elementos, index) in totems"
        :key="elementos.id"
        id="totem"
        geometry="primitive: box; color: white;"
        :position="elementos.posicion"
        :scale="`0.368 2 0.1`"
        material="side: double; color: #ffffff;  opacity: 1"
        :rotation="elementos.rotacion"
      >
        <a-entity
          material="side: double; color: #005a87;  opacity: 1"
          geometry="primitive: box; color: white;"
          scale="0.1 1 0.1"
          position="-0.52 0 0.5"
        ></a-entity>
        <!-- Texto -->

        <!-- Titulo totem -->
        <a-entity
          text="value: Interactuar; align: center; color: #222222;"
          scale="4 1 0"
          :position="'0 0.455 0.6'"
        ></a-entity>
        <!-- Texto -->
        <a-entity
          text="value: Info; align: center; color: #333333;"
          scale="3 1 0"
          :position="'0 0.4 0.6'"
        ></a-entity>
       <!-- Conocenos -->
        <a-entity
          :text="`value: Videos'
          }; align: center; color: #333333;`"
          scale="3 1 0"
          :position="'0 -0.04 0.6'"
        ></a-entity>
        <!-- Documentos -->
        <a-entity
          v-if="
            elementos.nombreStand != 'goglobal' &&
            elementos.nombreStand != 'upinnovation'
          "
          :text="`value:  ${
            elementos.tipoStand == 'tecnologias' ? 'Nosotros' : 'Servicios'
          }; align: center; color: #333333;`"
          scale="3 1 0"
          position="0 0.2 0.6"
        ></a-entity>
        
        <!-- Chat -->
        <a-entity
          :text="`value: ${
            elementos.tipoStand == 'tecnologias' ? 'Chat' : 'Fotos'
          }; align: center; color: #333333;`"
          scale="3 1 0"
          :position="'0 -0.27 0.6'"
        ></a-entity>
        <!-- Info  -->
        <a-entity
          v-if="elementos.informacion"
          v-on:click="mostrarInformacion(index)"
          id="informacion"
          class="link"
          :position="'0 0.3 0.6'"
          geometry="primitive: plane; height: 1; width: 1"
          material="shader: flat; src: #info; alpha-test: 0.230 ;transparent: true"
          scale="0.7 0.1288 0.7"
          animation__mouseenter="property: scale; to: 0.75 0.138 0.8; startEvents: mouseenter; dur: 100"
          animation__mouseleave="property: scale; to: 0.70 0.1288 0.7; startEvents: mouseleave; dur: 100"
        >
        </a-entity>

        <!-- Documentos  -->
        <a-entity
          v-on:click="mostrarTecnologias(index)"
          id="documentosIcon"
          class="link"
          geometry="primitive: plane; height: 1; width: 1"
          :position="
            elementos.tipoStand == 'tecnologias' ? '0 -0.14 0.6' : '0 0.085 0.6'
          "
          :material="`shader: flat; src: #doc; alpha-test: 0.230 ;transparent: true`"
          scale="0.7 0.1288 0.7"
          animation__mouseenter="property: scale; to: 0.75 0.138 0.8; startEvents: mouseenter; dur: 100"
          animation__mouseleave="property: scale; to: 0.70 0.1288 0.7; startEvents: mouseleave; dur: 100"
        >
        </a-entity>

        <!-- Video  -->
        <a-entity
          v-if="elementos.videos.length > 0"
          v-on:click="
             mostrarVideo(index)
          "
          id="videoIcon"
          class="link"
          geometry="primitive: plane; height: 1; width: 1"
          :position="
            elementos.tipoStand == 'tecnologias' ? '0 0.085 0.6' : '0 -0.14 0.6'
          "
          :material="`shader: flat; src: #video; alpha-test: 0.230 ;transparent: true`"
          scale="0.7 0.1288 0.7"
          animation__mouseenter="property: scale; to: 0.75 0.138 0.8; startEvents: mouseenter; dur: 100"
          animation__mouseleave="property: scale; to: 0.70 0.1288 0.7; startEvents: mouseleave; dur: 100"
        >
        </a-entity>

        <a-entity
          v-if="
            elementos.nombreStand == 'goglobal' ||
            elementos.nombreStand == 'upinnovation'
          "
          geometry="primitive: plane; height: 1; width: 1"
          position="
            0 0.12 0.6
          "
          material="shader: flat; src: #bar; alpha-test: 0.230 ;transparent: true"
          scale="0.7 0.1288 0.7"
          animation__mouseenter="property: scale; to: 0.75 0.138 0.8; startEvents: mouseenter; dur: 100"
          animation__mouseleave="property: scale; to: 0.70 0.1288 0.7; startEvents: mouseleave; dur: 100"
        >
        </a-entity>

        <!-- Galeria  o Chat -->
        <a-entity
          id="chatIcon"
          class="link"
          v-if="elementos.tipoStand == 'patrocinador'"
          v-on:click="mostrarGaleria(index)"
          :position="'0 -0.36 0.6'"
          geometry="primitive: plane; height: 1; width: 1"
          material="shader: flat; src: #galeria; alpha-test: 0.230 ;transparent: true"
          scale="0.7 0.1288 0.7"
          animation__mouseenter="property: scale; to: 0.75 0.138 0.8; startEvents: mouseenter; dur: 100"
          animation__mouseleave="property: scale; to: 0.70 0.1288 0.7; startEvents: mouseleave; dur: 100"
        >
        </a-entity>
        <a-entity
          v-if="elementos.tipoStand == 'tecnologias' && elementos.whatsapp != ''"
          id="chatIcon"
          class="link"
          v-on:click="abrirWaOChatOChat(elementos.nombreStand)"
          :position="'0 -0.36 0.6'"
          geometry="primitive: plane; height: 1; width: 1"
          material="shader: flat; src: #chat; alpha-test: 0.230 ;transparent: true"
          scale="0.7 0.1288 0.7"
          animation__mouseenter="property: scale; to: 0.75 0.138 0.8; startEvents: mouseenter; dur: 100"
          animation__mouseleave="property: scale; to: 0.70 0.1288 0.7; startEvents: mouseleave; dur: 100"
        >
        </a-entity>
      </a-entity>
    </a-scene>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Swal from "sweetalert2";
import { db } from "../firebase.js";
import firebase from "firebase/app";
const chatsCollection = db.collection("chats");
const estudiantesCollection = db.collection("estudiantes");
import InformacionModal from "../components/InformacionModal.vue";
import GaleriaModal from "../components/GaleriaModal.vue";
import VideosModal from "../components/VideosModal.vue";
import PdfModal from "../components/PdfModal.vue";
import MapaModal from "../components/MapaModal.vue";
import VideoModal from "../components/VideoModal.vue";
import InfoFIMEModal from "../components/InfoFIMEModal.vue";
let totemRandom = {
  nombreStand: "axen", // Mismo nombre que el del objeto. Este nombre es el de las carpetas que contengan los documentos.
  tipoStand: "tecnologias",
  id: "zfDIzeuHhVof0AtQrX1h", // ID del stand en Firebase
  whatsapp: "https://wa.link/2t7f51",
  videos: ["https://www.youtube.com/embed/UwbEYtMr2tQ"], // Lista de videos del icono Videos en el Totem
  videoBienvenida: "https://www.youtube.com/embed/UwbEYtMr2tQ", // Video que aparecera en el icono Video de Bienvenida
  informacion: {
    titulo: "Universidad Iberoamericana - Ciudad de México", // Este nombre aparecera en el modal Informacion
    ofertatecnologica: require // Contiene los nombres de los archivos pdf
      .context(`@/assets/ofertatecnologica/axen/`, true, /.*/)
      .keys(),
    imagen: "axen.png", // Nombre de la imagen que aparecera en el modal Informacion
    contenidos: [
      // Secciones de informacion a mostrar en el modal Informacion
      // El titulo muestra el titulo de la seccion, el tipo define si es de informacion o de contacto. Luego se puede agregar o no un parrafo y una lista para desplegar. Ambas, parrafo y lista, son opcionales, si una no se necesita NO SE INCLUYE.
      {
        titulo: "Misión",
        tipo: "info",
        parrafos: [
          {
            contenido:
              "Contribuir al logro de una sociedad más justa, solidaria, libre, incluyente, productiva y pacífica, mediante el poder transformador de la docencia, la investigación, la innovación y la vinculación, en estrecho contacto con la realidad.",
          },
        ],
      },
      {
        titulo: "Visión",
        tipo: "info",
        parrafos: [
          {
            contenido:
              "La Visión de La IBERO se propone desde la reflexión sobre cinco grandes temas que son fundamentales para la institución:",
            lista: [
              "La IBERO es una Universidad incluyente, diversa y plural, en estrecha vinculación con sectores académicos, sociales y productivos, tanto locales como globales.",
              "La IBERO es una Universidad de excelencia, con pertinencia social, que genera conocimientos y forma hombres y mujeres para los demás.",
              "La IBERO es una Universidad crítica y propositiva con liderazgo humanista e intelectual, que contribuye a transformar la realidad y a construir un mundo más justo.",
              "La IBERO, como actor social, contribuye a la solución de problemas complejos con creatividad e innovación.",
            ],
          },
        ],
      },
      // En los contactos se utiliza un pequeno truco, pues se incluye un titulo en uno y en el otro no para simular que el titulo engloba a todos los que esten abajo de el hasta que otro titulo lo detenga
      {
        titulo: "Contacto",
        tipo: "contacto",
        contactos: [
          // De nuevo, se incluye el titulo solo en este y se muestra como si el titulo fuera para todos los de abajo
          {
            tipo: "Email",
            titulo: "Dr. Eduardo Gamaliel Hernández Martínez.",
            contenido: "eduardo.gamaliel@ibero.mx",
          },
          {
            tipo: "Telefono",
            contenido: "Tel. 59 50 4000 ext. 4409",
          },
          {
            tipo: "Email",
            titulo: "Dr. Carlos Omar López López.",
            contenido: "carlos.lopez@ibero.mx",
          },
          {
            tipo: "Telefono",
            contenido: "Tel. 59 50 4000 ext. 7993",
          },
          {
            tipo: "Email",
            titulo: "Mtro. Carlos Galván Duque Gastélum.",
            contenido: "carlos.galván@ibero.mx",
          },
          {
            tipo: "Telefono",
            contenido: "Tel. 59 50 4000 ext. 7187",
          },

          {
            tipo: "Email",
            titulo: "Ing. Isabel Bolívar Tellería.",
            contenido: "isabel.bolivar@ibero.mx",
          },
          {
            tipo: "Telefono",
            contenido: "Tel. 59 50 4000 ext. 7169",
          },
          {
            tipo: "Web.Web",
            titulo: "Redes Sociales",
            contenido: "Página principal",
            link: "https://ibero.mx/",
          },

          {
            tipo: "Web.Facebook",
            contenido: "Facebook",
            link: "https://www.facebook.com/laibero",
          },
          {
            tipo: "Web.Twitter",
            contenido: "Twitter",
            link: "https://twitter.com/IBERO_mx",
          },
          {
            tipo: "Web.Linkedin",
            contenido: "Linkedin",
            link: "https://mx.linkedin.com/company/universidad-iberoamericana",
          },
        ],
      },
    ],
  },
};
export default {
  props: [
    "totems",
    "rotacionCielo",
    "localizacionActual",
    "bienvenidas",
    "chat",
    "cielo",
    "cielos",
    "navegadores",
    "botones",
    "video",
    "nombreStand",
    "idStand",
  ],
  name: "Escena",
  components: {
    InformacionModal,
    VideosModal,
    PdfModal,
    GaleriaModal,
    MapaModal,
    VideoModal,
    InfoFIMEModal,
  },
  data() {
    return {
      totemSeleccionado: this.totems[0] || totemRandom,
      haAbiertoGaleria: false,
      videoSeleccionado: "",
      noGaleriaOffset: 0.3,
      colores: {
        iconColor: "#007cba",
        confirmButtonColor: "#007cba",
      },
    };
  },
  methods: {
    cambiar(hacia) {
      this.$emit("cambiar", hacia);
    },
    abrirWaOChatOChat(nombreStand) {
      let totemPert = this.totems[
        this.totems.findIndex((totem) => totem.nombreStand == nombreStand)
      ];
      let url = totemPert.whatsapp;
      let id = totemPert.id;
      let that = this;
      Swal.fire({
        title:
          "Puedes comunicarte por whatsapp",
        showDenyButton: true,
        showCancelButton: true,
        showConfirmButton: false,
        denyButtonText: `Whatsapp`,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#2A589F",
        denyButtonColor: "#007CBA",
      }).then((result) => {
        if (result.isConfirmed) {
          // Se eligio chat
          that.agregarChat(id);
        } else if (result.isDenied) {
          // Se eligio whatsapp
          let link = document.createElement("a");
          link.setAttribute("href", url);
          link.setAttribute("target", "_blank");
          link.click();
        }
      });
    },
    // Un solo video
    abrirVideo(url) {
      this.videoSeleccionado = url;
      document.querySelector(".mostrarVideoUnico").click();
    },
    mostrarTecnologias(totem) {
      let that = this;
      if (typeof totem == "string") {
        this.totemSeleccionado = this.totems[
          this.totems.findIndex((totemT) => totemT.videoBienvenida == totem)
        ];
      } else {
        this.totemSeleccionado = this.totems[totem];
      }
      // db.collection("contadores")
      //   .doc(this.totemSeleccionado.nombreStand)
      //   .update({ visitas: firebase.firestore.FieldValue.increment(1) });
      if (
        this.totemSeleccionado.nombreStand == "unam" ||
        this.totemSeleccionado.nombreStand == "ciett"
      ) {
        Swal.fire({
          title: "Selecciona que tipo de oferta deseas ver",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonColor: "#007CBA",
          denyButtonColor: "#00A9E0",
          confirmButtonText: `Servicios`,
          denyButtonText: `Tecnologías`,
          cancelButtonText: "Cerrar",
        }).then((result) => {
          if (result.isConfirmed) {
            that.totemSeleccionado.informacion.ofertatecnologica =
              that.totemSeleccionado.informacion.servicios;
          } else if (result.isDenied) {
            that.totemSeleccionado.informacion.ofertatecnologica =
              that.totemSeleccionado.informacion.tecnologias;
          }
          document.querySelector(".modalPdfBtn").click();
        });
      } else {
        document.querySelector(".modalPdfBtn").click();
      }
    },
    // Carousel de videos
    mostrarVideo(totem) {
      this.totemSeleccionado = this.totems[totem];
      if (this.totemSeleccionado.videos.length == 0) {
        return Swal.fire({
          icon: "info",
          ...this.colores,
          title: "Videos no encontrados",
          text: "No se encontraros videos",
        });
      }
      let activadorVideo = document.querySelector(".activadorVideo");
      activadorVideo.click();
    },
    mostrarInformacion(totem) {
      this.totemSeleccionado = this.totems[totem];
      // db.collection("contadores")
      //   .doc(this.totemSeleccionado.nombreStand)
      //   .update({ visitas: firebase.firestore.FieldValue.increment(1) });
      let mostrarInformacion = document.querySelector(".mostrarInformacion");
      mostrarInformacion.click();
    },
    mostrarGaleria(totem) {
      if (typeof totem == "string") {
        let video = (" " + totem).slice(1);
        totem = this.totems.findIndex(
          (totem) => totem.videoBienvenida == video
        );
      }
      this.totemSeleccionado = this.totems[totem];
      let mostrarGaleria = document.querySelector(".mostrarGaleria");
      mostrarGaleria.click();
    },
    tieneGaleria(video) {
      let tiene = this.totems.findIndex(
        (totem) => totem.videoBienvenida == video
      );
      return tiene != 1;
    },
    agregarChat(idStand) {
      if (!this.user) {
        let abrir = document.querySelector(".chat-toggle");
        abrir.click();
        return Swal.fire({
          icon: "info",
          title: "Inicia sesión",
          text: "Por favor inicia sesión para abrir un chat",
        });
      }

      // El stand no cuenta con un id
      if (idStand == "") {
        return Swal.fire({
          icon: "info",
          title: "Oops...",
          text: "Chat no disponible para este stand",
        });
      }

      // El usuario ya tiene un chat abierto con el stand
      if (this.user.idChats.includes(this.user.uid + idStand)) {
        return Swal.fire({
          icon: "info",
          title: "Chat ya iniciado",
          text: "Parece que ya tienes un chat iniciado con este stand",
        });
      } else {
        // Crear un nuevo chat
        let batch = db.batch();
        let chatRef = chatsCollection.doc(this.user.uid + idStand);
        let userRef = estudiantesCollection.doc(this.user.uid);
        let totem = this.totems.filter((totem) => totem.id == idStand)[0]; // Obtener el totem con el id del stand con el que se quiere iniciar un chat
        batch.set(chatRef, {
          idChat: this.user.uid + idStand,
          idFacultad: idStand,
          idEstudiante: this.user.uid,
          nombreFacultad: totem.informacion.titulo,
          nombreEstudiante: this.user.displayName,
          noVistosEstudiante: 0,
          noVistosFacultad: 0,
          actualizado: new Date(),
          ultimoMensajeEstudiante: "",
        });
        // Agregar chat a la lista del usuario
        batch.update(userRef, {
          idChats: firebase.firestore.FieldValue.arrayUnion(
            this.user.uid + idStand
          ),
        });
        batch.commit().then(() => {
          Swal.fire({
            icon: "success",
            title: "Chat iniciado",
            text:
              "El chat ha sido iniciado, ahora puedes conversar con alguien encargado del stand",
          });
        });
      }
    },

    galeriaRemovida(elementos) {
      if (elementos.nombreStand == "christus") return false;
      return !(
        elementos.tipoStand != "patrocinador" || elementos.informacion.galeria
      );
    },
  },

  computed: {
    ...mapState("User", ["user"]),
  },
  updated() {
    // No me acuerdo de porque puse esto, creo que fue porque se quedaban los totems al cambiar de escena
    //if (this.totems.length > 0) {
    //this.totemSeleccionado = this.totems[0];
    //}
  },
  mounted() {
    $(document).ready(function () {
      $("body").tooltip({ selector: "[data-toggle=tooltip]" });
    });
  },
};
</script>

<style>
.sitioweb {
  word-wrap: break-word !important;
}
.sitioweb:hover {
  color: #007cba !important;
}
.zh {
  z-index: 99999;
}
.carrerasDisplay {
  max-width: 1em !important;
  word-break: break-all;
}
.carrerasDisplay button {
  padding: 0px 12px !important;
}
.justify {
  text-align: justify;
}
@media (max-width: 767px) {
  /* ... */

  .top-content .carousel-control-prev,
  .top-content .carousel-control-next {
    display: none;
  }
  .top-content .carousel-indicators li {
    margin-left: 10px;
    margin-right: 10px;
  }

  /* ... */
}
.contact i {
  color: #007cba;
}
.gallery {
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
}
.gallery .pics {
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
}
.gallery .animation {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

@media (max-width: 450px) {
  .gallery {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }
}

@media (max-width: 400px) {
  .btn.filter {
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }
}
.modal-dialog-galeria {
  max-width: 9999px !important;
}

@media (max-width: 576px) {
  .modal-dialog-galeria {
    width: 95% !important;
  }
}
</style>
