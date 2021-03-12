<template>
  <div>
    <!-- Button trigger modal -->

    <button
      type="button"
      class="modalPdfBtn d-none"
      v-on:click="toggleList"
      data-toggle="modal"
      data-target="#modalPdf"
    >
      Launch demo modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modalPdf"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <button
        type="button"
        class="close close-btn"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-pdf d-100 w-md-75"
        role="document"
      >
        <div class="modal-content border-0">
          <div
            class="modal-header d-flex flex-col justify-content-between align-items-center p-2 modal-body-pdf"
          >
            <p class="m-0">
              {{
                ofertaTecno.ofertaTecno
                  ? "Selecciona un documento para visualizarlo"
                  : "No se encontraron documentos"
              }}
            </p>
            <div class="toggleList">
              <button v-on:click="toggleList">
                <i class="fas fa-angle-double-left"></i>
              </button>
            </div>
          </div>
          <div class="modal-body m-0 p-0 d-flex flex-row">
            <div class="pdfList p-0">
              <ul class="list-group p-0 m-0">
                <li
                  v-on:click="
                    () => {
                      pdfSeleccionado = pdf;
                      toggleList();
                    }
                  "
                  v-for="pdf in ofertaTecno.ofertaTecno"
                  :key="pdf"
                  class="list-group-item pdflink"
                  :class="
                    pdf == pdfSeleccionado ? 'bg-OTTCeleste text-white' : ''
                  "
                >
                  <i class="far fa-file-alt mr-2"></i>
                  {{ pdf.split("/")[1].split(/\.(?=[^\.]+$)/)[0] }}
                </li>
              </ul>
            </div>
            <div
              class="pdfDisplay w-100 embed-responsive embed-responsive-16by9"
              v-if="pdfSeleccionado"
            >
              <iframe
                class="embed-responsive-item"
                :src="
                  require(`../assets/ofertatecnologica/${ofertaTecno.nombreStand}/${
                    pdfSeleccionado.split('/')[1]
                  }`)
                "
              ></iframe>
            </div>
            <p v-else class="text-center mt-4 w-100">Selecciona un documento</p>
          </div>
          <div class="modal-footer p-0">
            <div class="row w-100 p-0 m-0">
              <button
                type="button"
                class="closeInfo btn bg-white text-dark p-1 col-12"
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
export default {
  name: "PdfModal",
  props: ["ofertaTecno"],
  data() {
    return {
      listIsIn: false,
      pdfSeleccionado: null,
    };
  },
  watch: {
    ofertaTecno: function(){
      this.pdfSeleccionado = null
    }
  },
  methods: {
    toggleList() {
      let pdfList = document.querySelector(".pdfList");
      let pdfDialog = document.querySelector(".modal-dialog-pdf");
      if (this.listIsIn) {
        this.listIsIn = !this.listIsIn;
        pdfList.style.transform = `translateX(-${pdfDialog.clientWidth}px)`;
      } else {
        this.listIsIn = !this.listIsIn;
        pdfList.style.transform = `translateX(0)`;
      }
    },
  },
};
</script>
<style>
.modal-dialog-pdf {
  max-width: 10000px !important;
  height: 75vh;
}
.modal-dialog-pdf .modal-content {
  height: 100%;
}
@media (min-width: 576px) {
  .modal-dialog-pdf {
    width: 75% !important;
    overflow: hidden;
  }
}
.toggleList button {
  background: #007bff00;
  color: #efefef;
  outline: none;
  border: none;
  border-radius: 100px;
}
.toggleList button:hover {
  color: #ee0a7c !important;
}
.pdfList,
.pdfDisplay {
  transition: all 0.2s ease-out;
}
.pdfList {
  overflow-y: scroll;
  background: white;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.pdfList i {
  color: #007cba !important;
}
.modal-body-pdf {
  background: #2a589f;
  color: #efefef;
}
.pdflink {
  cursor: pointer;
}
</style>
