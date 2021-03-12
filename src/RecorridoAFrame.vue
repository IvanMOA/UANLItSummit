<template>
  <div>
    <div id="wrapper">
      <!-- Sidebar -->
      <!-- <div class="menuDisplayed" id="sidebar-wrapper">
        <div v-if="user" class="h-100 w-100">
          <Chats @toggleChat="abrirChat" class="w-100 h-100" />
        </div>
        <div v-else class="h-100">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                class="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
                >Crear cuenta</a
              >
              <a
                class="nav-item nav-link"
                id="botonLogin"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
                >Iniciar sesión</a
              >
              <button class="ml-auto btn text-dark" v-on:click="abrirChat">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane mt-4 fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <Registro @cambiarALogin="cambiarALogin" />
            </div>
            <div
              class="tab-pane mt-4 fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <Login />
            </div>
          </div>
        </div>
      </div> -->

      <!-- Animacion de bienvenida, se activa una sola vez -->
      <!-- <MensajeBienvenida @comenzarCancion="activarCancion" /> -->

      <div class="side-buttons">
        <!-- Abrir mapa -->
        <!--<a href="#" v-on:click="mostrarMapa" class="btn burger-btn-chat"
          ><span class="glyphicon">
            <i v-if="mapOpen" class="fas fa-times text-white"></i>
            <i v-else class="fas fa-map-marked-alt"></i>
          </span>
        </a>-->
        <!-- Abrir / Cerrar chat -->
        <!-- <a
          href="#"
          v-on:click="toggleChat"
          class="chat-toggle btn burger-btn-chat"
          ><span class="glyphicon">
            <i class="fas fa-comments"></i>
          </span>
        </a> -->
        <!-- Logout -->
        <a href="#" v-if="user" v-on:click="logoutV" class="btn burger-btn-chat"
          ><span class="glyphicon">
            <i class="fas fa-sign-out-alt"></i>
          </span>
        </a>
        <!-- Mute -->
        <a href="#" v-on:click="togglePause" class="btn burger-btn-chat"
          ><span class="glyphicon">
            <i :class="`fas fa-volume-${mp3Paused ? 'mute' : 'up'}`"></i>
          </span>
        </a>
        <!-- Info  -->
        <a href="#" v-on:click="abrirModalInfoFIME" class="btn burger-btn-chat"
          ><span class="glyphicon">
            <i class="fas fa-info-circle"></i>
          </span>
        </a>
      </div>

      <!-- Page Content -->
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div
            class="location_info d-none d-sm-flex flex-column align-items-center justify-content-center"
          >
            <div v-if="localizacionActual.totems.length > 0">
              <p
                class="w-100 text-center"
                v-for="stand in localizacionActual.totems"
                :key="stand.informacion.titulo"
              >
                {{ stand.informacion.titulo }}
              </p>
            </div>
            <div v-else><p>Intersección</p></div>
          </div>
          <Escena
            :totems="localizacionActual.totems"
            :rotacionCielo="localizacionActual.rotacionCielo || '0 0 0'"
            :localizacionActual="localizacionActual.cielo.split('.')[0]"
            :bienvenidas="localizacionActual.bienvenidas"
            :idStand="localizacionActual.idStand"
            :chat="localizacionActual.chat"
            :cielo="localizacionActual.cielo"
            :cielos="cielos"
            :navegadores="localizacionActual.navegadores"
            :video="localizacionActual.video"
            @cambiar="cambiar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Escena from './components/Escena.vue';
// import MensajeBienvenida from "./components/MensajeBienvenida.vue";
// import Chats from "./components/Chats.vue";
// import Login from "./components/Login.vue";
// import Registro from "./components/Registro.vue";
import escenas from './configRecorrido.js';
let song = require('./assets/song.mp3');
let cielos = [
  `render0001.jpg`,
  //"render_3.jpg",
  //"render_4.jpg",
  //"render_2.jpg",
  //"render_10.jpg",
  //"render_1.jpg",
];
escenas['render0001'].navegadores.forEach((navegador) => {
  if (!cielos.includes(`${navegador.hacia}.jpg`)) {
    cielos.push(`${navegador.hacia}.jpg`);
  }
  escenas[navegador.hacia].navegadores.forEach((navegador) => {
    if (!cielos.includes(`${navegador.hacia}.jpg`)) {
      cielos.push(`${navegador.hacia}.jpg`);
    }
  });
});

let lastRender = 'render0001'
const lastRenderFromStorage = localStorage.getItem('lastLoc')
if(lastRenderFromStorage){
  lastRender = lastRenderFromStorage
  cielos.push(`${lastRender}.jpg`)
}

export default {
  name: 'RecorridoAFrame',
  components: {
    //  MensajeBienvenida,
    Escena },
  data() {
    return {
      localizacionActual: escenas[lastRender],
      cielos: cielos,
      renderActual: 0,
      rendersCargados: cielos.length - 1,
      mapOpen: false,
      chatOpen: false,
      mp3: new Audio(song),
      mp3Paused: false,
    };
  },
  methods: {
    ...mapActions('User', ['logout']),
    abrirModalInfoFIME() {
      document.querySelector('.InfoFIMEModalBtn').click();
    },
    logoutV() {
      this.logout();
    },
    cambiarALogin() {
      let loginBtn = document.querySelector('#botonLogin');
      loginBtn.click();
    },
    abrirChat() {
      let abrir = document.querySelector('.chat-toggle');
      abrir.click();
    },
    activarCancion() {
      if (!this.user && !localStorage.getItem('haEntradoAntes')) {
        this.abrirChat();
        localStorage.setItem('haEntradoAntes', 'y');
      }
      let audioPlayin = false;
      let that = this;
      this.mp3.volume = 0.1;
      this.mp3.loop = true;
      if (audioPlayin == false) {
        that.mp3.play();
        audioPlayin = true;
      }
    },
    togglePause() {
      let that = this;
      let nuevoVolumen;
      if (this.mp3Paused) {
        this.mp3.play();
        let play = setInterval(() => {
          nuevoVolumen = that.mp3.volume + 0.01;
          if (nuevoVolumen > 0.1) {
            clearInterval(play);
          } else {
            that.mp3.volume = nuevoVolumen;
          }
        }, 100);
      } else {
        let pause = setInterval(() => {
          nuevoVolumen = that.mp3.volume - 0.01;
          if (nuevoVolumen < 0) {
            that.mp3.pause();
            clearInterval(pause);
          } else {
            that.mp3.volume = nuevoVolumen;
          }
        }, 100);
      }
      this.mp3Paused = !this.mp3Paused;
    },
    // toggleChat() {
    //   this.chatOpen = !this.chatOpen;
    // },
    mostrarMapa() {
      document.querySelector('#mapaModalTrigger').click();
    },
    cambiar(hacia) {
      if (!this.cielos.includes(`${hacia}.jpg`))
        this.cielos.push(`${hacia}.jpg`);
      localStorage.setItem('lastLoc', hacia);
      let numRender = hacia.split('r')[2];
      let that = this; 
      escenas[`render${numRender}`].navegadores.forEach((navegador) => {
        if (!that.cielos.includes(`${navegador.hacia}.jpg`)) {
          that.cielos.push(`${navegador.hacia}.jpg`);
        }
        escenas[navegador.hacia].navegadores.forEach((navegador) => {
          if (!cielos.includes(`${navegador.hacia}.jpg`)) {
            cielos.push(`${navegador.hacia}.jpg`);
          }
        });
      });
      setTimeout(() => {
        this.localizacionActual = escenas[hacia];
      }, 300);
    },
  },
  computed: {
    ...mapState('User', ['user']),
  },
  mounted() {
    $(document).ready(function() {
      // setTimeout(() => {
      // let afConfirmBtn = document.querySelector('.a-dialog-ok-button')
      //   console.log(afConfirmBtn)
      // afConfirmBtn.innerHTML = 'Cerrar'
      // }, 500)
      $('.chat-toggle').click(function(e) {
        e.preventDefault();
        $('#wrapper').toggleClass('menuDisplayed');
      });
    });
  },
};
</script>

<style>
.mt-8 {
  margin-top: 2em !important;
}
.location_info {
  z-index: 100;
  color: #222222 !important;
  border-radius: 4px;
  background-color: #ffffff88;
  height: 5em;
  width: min(80vw, 20em);
  position: absolute;
  right: 0;
  top: 89vh;
  margin: 0 1em 1em 0;
}
.a-enter-ar {
  display: none;
}
.a-enter-vr-button {
  display: none;
  padding: 0 !important;
  margin: 0 !important;
  top: 0 !important;
  left: 15px;
}
.a-dialog-button {
  background: #007cba !important;
}
.svg-img-icon {
  height: 0.8em;
  width: 0.8em;
}
.side-buttons {
  transition: all 0.1s;
  z-index: 50;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 4em;
}
</style>
