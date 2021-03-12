<template>
  <div
    class="MensajeBienvenida d-flex flex-column justify-content-center align-items-center bg-white w-100 h-100"
  >
    <div>
      <h1 class="ml1">
        <span class="text-wrapper">
          <span class="line line1"></span>
          <span class="letters">IT Summit</span>
          <span class="line line2"></span>
        </span>
      </h1>
    </div>
    <div class="m-2">
      <h1 class="ml11">
        <span class="text-wrapper">
          <span class="line line1"></span>
          <span class="letters">Conferencias magistrales Talleres Exposición Digital Hackatones y Networking</span>
        </span>
      </h1>
    </div>
    <p
      :class="user ? 'd-none' : ''"
      class="texto-bienvenida text-center m-4 opacity-0"
    >
      <!-- Para tener una experiencia más agradable te invitamos a registrarte para
      interactuar con nuestros colaboradores -->
    </p>
    <button
      v-on:click="
        () => {
          cerrarBienvenida();
          $emit('comenzarCancion');
        }
      "
      class="btn comenzar-btn opacity-0"
    >
      Comenzar
    </button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "MensajeBienvenida",
  methods: {
    cerrarBienvenida() {
      let MensajeBienvenidaEl = document.querySelector(".MensajeBienvenida");
      document.querySelector(".comenzar-btn").classList.remove("opacity-1");
      document.querySelector(".comenzar-btn").classList.add("d-none");
      document.querySelector(".texto-bienvenida").classList.remove("opacity-1");
      document.querySelector(".texto-bienvenida").classList.add("d-none");
      MensajeBienvenidaEl.childNodes.forEach((el) => {
        el.classList.add("opacity-0");
      });
      MensajeBienvenidaEl.classList.remove("bg-white");
      MensajeBienvenidaEl.classList.add("negativeZIndex");
    },
  },
  computed: {
    ...mapState("User", ["user"]),
  },
  mounted() {
    let comenzarBoton = document.querySelector(".comenzar-btn");
    var textWrapper = document.querySelector(".ml1 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    textWrapper = document.querySelector(".ml11 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /([^\x00-\x80]|\w)/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml1 .letter",
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1),
      })
      .add({
        targets: ".ml1 .line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: "-=875",
        delay: (el, i, l) => 80 * (l - i),
      });

    // Desvaecer bienvenida a los 2.3 segundos
    // let MensajeBienvenidaEl = document.querySelector(".MensajeBienvenida");
    // setTimeout(() => {
    //   MensajeBienvenidaEl.classList.remove("bg-white");
    //   textWrapper.classList.add("opacity-0");
    //   setTimeout(() => {
    //     MensajeBienvenidaEl.classList.add("negativeZIndex");
    //   }, 1000);
    // }, 2300);

    // Texto secundario
    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml11 .line",
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        delay: 700,
      })
      .add({
        targets: ".ml11 .line",
        translateX: [
          0,
          document.querySelector(".ml11 .letters").getBoundingClientRect()
            .width + 10,
        ],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100,
      })
      .add({
        targets: ".ml11 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=775",
        delay: (el, i) => 34 * (i + 1),
      })
      .add({
        targets: ".ml11",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
    setTimeout(() => {
      let textoBienvenida = document.querySelector(".texto-bienvenida");
      comenzarBoton.classList.add("opacity-1");
      comenzarBoton.classList.remove("opacity-0");
      textoBienvenida.classList.add("opacity-1");
      textoBienvenida.classList.remove("opacity-0");
    }, 3000);
  },
};
</script>
<style>
.MensajeBienvenida {
  transition: all 1s ease-out;
  z-index: 999999;
  position: absolute;
  left: 0;
  top: 0;
  color: #013159;
  text-align: center;
}
.negativeZIndex {
  z-index: -1 !important;
}
.ml1 {
  font-weight: 900;
  font-size: 3.5em;
}

.ml1 .letter {
  display: inline-block;
  line-height: 1em;
}
.ml1 .text-wrapper {
  transition: opacity 1s ease-out;
  max-width: 90vw;
}
.ml1 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml1 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 3px;
  width: 100%;
  background-color: #ffc10e;
  transform-origin: 0 0;
}

.ml1 .line1 {
  top: 0;
}
.ml1 .line2 {
  bottom: 0;
}
.ml11 {
  font-weight: 700;
  font-size: 1.5em;
}

.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #fff;
  transform-origin: 0 50%;
}

.ml11 .line1 {
  top: 0;
  left: 0;
}

.ml11 .letter {
  display: inline-block;
  line-height: 1em;
}
.comenzar-btn {
  transition: all 0.3s ease-in-out;
  background: #02335c;
  border-radius: 0;
  color: white !important;
  margin-top: 1em;
}
.texto-bienvenida {
  transition: all 0.3s ease-in-out;
}
.opacity-1 {
  opacity: 1;
}
.opacity-0 {
  opacity: 0;
}
@media (max-width: 500px) {
  .ml1 {
    font-size: 2em;
  }
  .ml11 {
    font-size: 1em;
  }
}
</style>
