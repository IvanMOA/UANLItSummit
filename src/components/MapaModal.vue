<template>
  <div>
    <!-- Button trigger Mapa modal -->
    <button
      class="d-none"
      type="button"
      data-toggle="modal"
      id="mapaModalTrigger"
      data-target="#mapaModal"
    ></button>

    <!-- Mapa Modal -->
    <div class="modal fade" id="mapaModal" tabindex="-1" role="dialog">
      <div
        class="modal-dialog modal-dialog-mapa modal-dialog-centered"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-body overflow-auto">
            <Mapa @cambiar="cambiar" :localizacionActual="localizacionActual" />
          </div>
          <div class="modal-footer p-0">
            <button
              type="button"
              class="btn btn-secondary btn-lg btn-block m-0 rounded-0 bg-white text-dark border-0"
              data-dismiss="modal"
            >
              Volver al recorrido
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mapa from "./Mapa.vue";
export default {
  props: ["localizacionActual"],
  name: "MapaModal",
  components: { Mapa },
  methods: {
    cambiar(hacia) {
      this.$emit("cambiar", hacia);
      let mapaModal = document.querySelector("#mapaModal");
      mapaModal.classList.add("mapaModalBlack");
      setTimeout(() => {
        mapaModal.classList.remove("mapaModalBlack");
      }, 300);
    },
  },
};
</script>
<style>
#mapaModal {
  transition: background 0.15s linear;
}

.mapaModalBlack {
  background: black;
}

.mapaModalRed {
  background: red;
}
.modal-dialog-mapa {
  max-width: 700px !important;
}
</style>
