<template>
      <a-entity
        id="totem"
        geometry="primitive: box; color: white;"
        :position="posicion"
        :scale="`0.368 2 0.5`"
        material="side: double; color: #2ea3f2;  opacity: 1"
        :rotation="rotacion"
      >
        <!-- Texto -->
        <a-entity
          text="value: Interactuar; align: center;"
          scale="4 1 0"
          position="0 0.455 0.6"
        ></a-entity>
        <a-entity
          text="value: Info; align: center;"
          scale="3 1 0"
          position="0 0.4 0.1"
        ></a-entity>
        <a-entity
          text="value:  Galeria; align: center;"
          scale="3 1 0"
          position="0 0.19 0.6"
        ></a-entity>
        <a-entity
          text="value: Videos; align: center;"
          scale="3 1 0"
          position="0 -0.04 0.6"
        ></a-entity>
        <a-entity
          text="value: Chat; align: center;"
          scale="3 1 0"
          position="0 -0.27 0.6"
        ></a-entity>

        <!-- Info  -->
        <a-entity
          v-if="informacion"
          v-on:click="mostrarInformacion"
          id="informacion"
          class="link"
          position="0 0.3 0.6"
          geometry="primitive: plane; height: 1; width: 1"
          material="shader: flat; src: #info; alpha-test: 0.230 ;transparent: true"
          scale="0.7 0.1288 0.7"
          animation__mouseenter="property: scale; to: 0.75 0.138 0.8; startEvents: mouseenter; dur: 100"
          animation__mouseleave="property: scale; to: 0.70 0.1288 0.7; startEvents: mouseleave; dur: 100"
        >
        </a-entity>

        <!-- Galeria  -->
        <a-entity
          v-on:click="mostrarGaleria"
          id="galeriaIcon"
          class="link"
          geometry="primitive: plane; height: 1; width: 1"
          position="0 0.085 0.6"
          material="shader: flat; src: #galeria; alpha-test: 0.230 ;transparent: true"
          scale="0.7 0.1288 0.7"
          animation__mouseenter="property: scale; to: 0.75 0.138 0.8; startEvents: mouseenter; dur: 100"
          animation__mouseleave="property: scale; to: 0.70 0.1288 0.7; startEvents: mouseleave; dur: 100"
        >
        </a-entity>

        <!-- Video  -->
        <a-entity
          v-if="videos"
          v-on:click="mostrarVideo"
          id="videoIcon"
          class="link"
          geometry="primitive: plane; height: 1; width: 1"
          position="0 -0.14 0.6"
          material="shader: flat; src: #video; alpha-test: 0.230 ;transparent: true"
          scale="0.7 0.1288 0.7"
          animation__mouseenter="property: scale; to: 0.75 0.138 0.8; startEvents: mouseenter; dur: 100"
          animation__mouseleave="property: scale; to: 0.70 0.1288 0.7; startEvents: mouseleave; dur: 100"
        >
        </a-entity>

        <!-- Chat  -->
        <a-entity
          v-on:click="agregarChat"
          id="chatIcon"
          class="link"
          position="0 -0.36 0.6"
          geometry="primitive: plane; height: 1; width: 1"
          material="shader: flat; src: #chat; alpha-test: 0.230 ;transparent: true"
          scale="0.7 0.1288 0.7"
          animation__mouseenter="property: scale; to: 0.75 0.138 0.8; startEvents: mouseenter; dur: 100"
          animation__mouseleave="property: scale; to: 0.70 0.1288 0.7; startEvents: mouseleave; dur: 100"
        >
        </a-entity>
      </a-entity>
  </template>

<script>
 import Swal from 'sweetalert2' 
export default {
  props: ['videos', 'informacion', 'posicion', 'rotacion', ''],
  name: "Totem",
  methods: {
    mostrarVideo() {
      if (this.elementos.videos.length == 0) {
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
    mostrarInformacion() {
      let mostrarInformacion = document.querySelector(".mostrarInformacion");
      console.log(mostrarInformacion);
      mostrarInformacion.click();
    },
    mostrarGaleria() {
      if (
        this.elementos.standInformativo &&
        this.elementos.standInformativo === true
      ) {
        return Swal.fire({
          icon: "info",
          ...this.colores,
          title: "Stand informativo",
          text: "Este stand no cuenta con oferta educativa",
        });
      }
      let mostrarGaleria = document.querySelector(".mostrarGaleria");
      mostrarGaleria.click();
    },
  }
};
</script>
