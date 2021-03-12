<template>
  <div>
    <button
      type="button"
      class="mostrarVideoUnico d-none btn masInfo btn-primary"
      data-toggle="modal"
      data-target="#videoBienvenidaModal"
    ></button>

    <!-- Modal Galeria -->
    <div
      class="modal fade"
      id="videoBienvenidaModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="galeriaTitle"
      aria-hidden="true"
      v-on:click="pausarVideo"
    >
      <button
        type="button"
        class="close close-btn"
        data-dismiss="modal"
        aria-label="Close"
        v-on:click="pausarVideo"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div
        class="modal-dialog modal-dialog-galeria modal-dialog-centered"
        role="document"
      >
        <div class="modal-content bg-transparent">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              id="iframeVideoModal"
              class="embed-responsive-item"
              :src="url"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["url"],
  name: "VideoModal",
  methods: {
    pausarVideo() {
      document.querySelector("#iframeVideoModal").src = this.url;
    },
  },
};
</script>

<style>
.modal-dialog-galeria {
  max-width: 9999px !important;
  width: 60%;
}
</style>
