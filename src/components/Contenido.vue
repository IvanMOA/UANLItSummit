<template>
  <div>
    <div class="m-1 contenido-component overflow-y-hidden">
      <div
        class="d-flex text-semiblack shadow-md flex-row content-header bg-white"
      >
        <button
          v-on:click="toggleContent"
          class="col-1 btn rounded-0 bg-white color-white text-center border-n z-15 outline-none"
        >
          <i :class="`fas fa-${contentIsIn ? 'minus' : 'plus'}`"></i>
        </button>
        <!-- Titulo de la seccion -->
        <h6 class="mb-0 d-flex bg-white z-15 align-items-center col-8">
          {{ titulo }}
        </h6>
      </div>
      <!-- Parrafos -->
      <div class="contenido" :class="`contenido-${id}`">
        <div v-if="tipo == 'info'">
          <div v-for="(parrafo, index) in parrafos" :key="index">
            <h6 class="mt-2" v-if="parrafo.titulo">{{ parrafo.titulo }}</h6>
            <p class="mb-1" v-if="parrafo.contenido">{{ parrafo.contenido }}</p>
            <ul class="list-group list-group-flush" v-if="parrafo.lista">
              <li
                v-for="punto in parrafo.lista"
                class="list-group-item"
                :key="punto"
              >
                {{ punto }}
              </li>
            </ul>
          </div>
        </div>
        <!-- Metodos de contacto -->
        <div v-else>
          <h6 class="card-title title-link">Contactos</h6>
          <div
            class="card-text"
            v-for="metodo in contactos"
            :key="metodo.contenido"
          >
            <p v-if="metodo.titulo">{{ metodo.titulo }}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <p v-if="metodo.tipo === 'Email'">
                  <i class="fas fa-envelope"></i>
                  {{ metodo.contenido }}
                </p>
                <p v-if="metodo.tipo == 'Telefono'">
                  <i class="fas fa-phone"></i>
                  {{ metodo.contenido }}
                </p>
                <a
                  target="_blank"
                  v-if="metodo.tipo.split('.')[0] == 'Web'"
                  :href="metodo.link"
                >
                  <i
                    v-if="metodo.tipo.split('.')[1] === 'Web'"
                    class="fas fa-globe"
                  ></i>
                  <i
                    v-if="metodo.tipo.split('.')[1] === 'Facebook'"
                    class="fab fa-facebook-square"
                  ></i>
                  <i
                    v-if="metodo.tipo.split('.')[1] === 'Twitter'"
                    class="fab fa-twitter-square"
                  ></i>
                  <i
                    v-if="metodo.tipo.split('.')[1] === 'Linkedin'"
                    class="fab fa-linkedin"
                  ></i>
                  {{ metodo.contenido }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contenido",
  props: ["id", "parrafos", "titulo", "tipo", "contactos"],
  data() {
    return {
      // parrafos: [
      //   {
      //     titulo: "Titulo del parrafoasdasdasdadasdasdasd",
      //     contenido: "Contenido del parrafo",
      //     lista: ["Punto 1", "Punto 2"],
      //   },
      //   {
      //     contenido: "Contenido del parrafo",
      //     lista: ["Punto 1", "Punto 2"],
      //   },
      // ],
      contentIsIn: false,
    };
  },
  methods: {
    toggleContent() {
      let contenido = document.querySelector(".contenido-" + this.id);
      if (this.contentIsIn) {
        this.contentIsIn = !this.contentIsIn;
        contenido.style.maxHeight = "0px";
      } else {
        this.contentIsIn = !this.contentIsIn;
        contenido.style.maxHeight = "800px";
      }
    },
  },
  mounted() {
    let contenido = document.querySelector(".contenido-" + this.id);
    contenido.style.maxHeight = "0px";
  },
};
</script>
<style>
.contenido {
  z-index: 10;
  padding: 0 0.75em 0 0.75em;
  transition: all 0.1s linear;
}
.overflow-y-hidden {
  overflow-y: hidden;
}
.z-15 {
  z-index: 15;
}

.contenido-component i {
  color: #007cba;
}
</style>
