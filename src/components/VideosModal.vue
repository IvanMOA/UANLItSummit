<template>
  <div>
    <button
      class="d-none activadorVideo z-depth-1"
      data-toggle="modal"
      data-target="#modal1"
    ></button>

    <div class="row h-100" v-if="videos">
      <div class="col-lg-12 m-0">
        <div
          v-on:click="resetVideos"
          class="modal fade"
          id="modal1"
          tabindex="-1"
          role="dialog"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div class="modal-content border-0 bg-transparent">
              <div class="modal-body mb-0 p-0">
                <!-- Top content -->
                <div class="top-content">
                  <div class="container">
                    <!-- Carousel row -->
                    <div class="row">
                      <div class="col-12 p-0">
                        <!-- Carousel -->
                        <div
                          id="carousel-example"
                          class="carousel slide"
                          data-interval="false"
                        >
                          <ol class="carousel-indicators">
                            <li
                              v-for="index in videos.length"
                              :key="index"
                              data-target="#carousel-example"
                              :data-slide-to="index"
                              :class="index == 0 ? 'active' : ''"
                            ></li>
                          </ol>
                          <div class="carousel-inner">
                            <div
                              v-for="(link, videoIndex) in videos"
                              :class="
                                videoIndex == 0
                                  ? 'carousel-item active'
                                  : 'carousel-item'
                              "
                              :key="link + videoIndex"
                            >
                              <div
                                class="embed-responsive embed-responsive-16by9"
                              >
                                <!-- <iframe
                                  class="video-yt embed-responsive-item"
                                  :id="`video-${index}`"
                                  :src="link"
                                  allowfullscreen
                                ></iframe> -->
                                <div :id="`video-${videoIndex}`"></div>
                              </div>
                            </div>
                          </div>
                          <a
                            class="carousel-control-prev"
                            v-on:click="resetVideos"
                            href="#carousel-example"
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
                            v-on:click="resetVideos"
                            href="#carousel-example"
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
                        <!-- End carousel -->
                      </div>
                    </div>
                    <!-- End carousel row -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["videos"],
  name: "VideosModal",
  data() {
    return {
      ytVideos: [],
    };
  },
  methods: {
    resetVideos() {
      this.ytVideos.forEach((video) => {
        video.stopVideo();
      });
    },
  },
  updated() {
    this.ytVideos = this.videos.map((video, index) => {
      let splittedUrl = video.split("/");
      return new YT.Player(`video-${index}`, {
        height: "390",
        width: "640",
        videoId: splittedUrl[splittedUrl.length - 1],
      });
    });
  },
  mounted() {
    // 4. The API will call this function when the video player is ready.
    this.ytVideos = this.videos.map((video, index) => {
      let splittedUrl = video.split("/");
      let player = new YT.Player(`video-${index}`, {
        height: "390",
        width: "640",
        videoId: splittedUrl[splittedUrl.length - 1],
      });
      return player;
    });
  },
};
</script>
