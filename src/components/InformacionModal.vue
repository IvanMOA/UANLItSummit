<template>
  <div>
    <!-- Button trigger modal Informacion -->
    <button
      type="button"
      class="mostrarInformacion d-none btn masInfo btn-primary"
      data-toggle="modal"
      data-target="#exampleModalCenter"
    ></button>
    <!-- Modal información -->
    <div
      class="modal fade p-0"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content border-0">
          <div class="modal-header text-dark">
            <!-- Titulo del stand -->
            <h5 class="modal-title" id="exampleModalLongTitle">
              {{ informacion.titulo }}
            </h5>
            <button
              type="button"
              class="close zh text-dark"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- Imagen para la tarjeta de informacion -->
          <img  
            class="card-img-top"
            :src="require(`../assets/info_img/${informacion.imagen}`)"
            alt="Card image cap"
          />
          <!-- Secciones con informacion desplegable -->
          <Contenido
            v-for="(contenido, index) in informacion.contenidos"
            :key="index"
            :id="index"
            :titulo="contenido.titulo"
            :tipo="contenido.tipo"
            :parrafos="contenido.parrafos"
            :contactos="contenido.contactos"
          />
          <div class="modal-body contact">
            <!-- Metodos de contacto -->
          </div>

          <!-- Footer  -->
          <div class="modal-footer p-0 bg-OTTCeleste">
            <div class="row w-100 p-0 m-0">
              <button
                type="button"
                class="closeInfo btn bg-OTTCeleste text-white p-1 col-12"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../styles/InformacionModal.css";
import Contenido from "./Contenido.vue";
export default {
  props: ["informacion", "tipoStand"],
  name: "InformacionModal",
  components: { Contenido },
};
</script>
