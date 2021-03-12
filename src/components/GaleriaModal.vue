<template>
  <div class="galeriaComponent">
    <button
      type="button"
      class="mostrarGaleria d-none btn masInfo btn-primary"
      data-toggle="modal"
      data-target="#galeriaModal"
    ></button>
    <!-- Modal Galeria -->
    <div
      class="modal fade"
      id="galeriaModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="galeriaTitle"
      aria-hidden="true"
    >
      <button
        type="button"
        class="close close-btn mr-4 mt-4"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div
        class="modal-dialog modal-dialog-galeria modal-dialog-centered"
        role="document"
      >
        <div class="modal-content bg-transparent">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <!-- <ol class="carousel-indicators indicators-bottom">
              <li
                data-target="#carouselExampleIndicators"
                v-for="(imagen, index) in imagenes"
                :key="imagen"
                :class="index == 0 ? 'active' : ''"
                :data-slide-to="index"
              ></li>
            </ol> -->
            <div class="carousel-inner">
              <div
                v-for="(imagen, index) in imagenes"
                :key="imagen"
                :class="index == 0 ? 'carousel-item active' : 'carousel-item'"
              >
                <!-- <img
                  class="d-block img-galeria"
                  :src="
                    require(`../assets/galeria/${nombreStand}/${
                      imagen.split('/')[1]
                    }`)
                  "
                  alt="First slide"
                /> -->
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import galerias from "../configGaleria.js";
export default {
  props: ["nombreStand", "imagenes"],
  name: "GaleriaModal",
  data: () => ({
    galerias,
  }),
  methods: {
    iniciarGaleria() {},
  },
};
</script>
<style>
.modal-dialog-galeria {
  max-width: 9999px !important;
}
.indicators-bottom {
  top: auto !important;
  bottom: 0 !important;
}
.galeriaComponent img {
  height: 50vh;
  width: auto; /* or 100% */
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .galeriaComponent img {
    height: auto !important;
    width: 60vw !important; /* or 100% */
  }
}
.carousel-inner {
  border: none;
  outline: none;
}

.galeriaComponent .modal-content {
  border: 0;
}
</style>
