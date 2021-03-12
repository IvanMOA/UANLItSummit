<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({}),
};
</script>

<style>
a:focus {
  outline: none !important;
}
.close-btn {
  margin: 0.75em;
  background-color: #2a589f !important;
  border-radius: 50%;
  position: absolute;
  right: 0;
  color: white !important;
  padding: 6px 12px !important;
}
.close-btn:hover {
  color: white !important;
}
.bg-OTTPink {
  background-color: #ee0a7c !important;
}
.bg-OTTCeleste {
  background-color: #00a9e0 !important;
}
.bg-OTTAzulFuerte {
  background-color: #2a589f !important;
}

.bg-OTTAzul {
  background-color: #007cba !important;
}
.text-semiblack {
  color: #333333;
}
</style>
