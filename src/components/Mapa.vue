<template>
  <div class="mapa m-4">
    <div class="d-block map-row" v-for="(fila, index) in mapa" :key="index">
      <svg
        v-for="elemento in fila"
        :key="elemento.hacia"
        :width="tamano * 2"
        :height="tamano * 2"
      >
        <circle
          class="tooltipCont"
          data-toggle="tooltip"
          data-placement="bottom"
          :title="getTooltips(elemento.hacia)"
          v-on:click="$emit('cambiar', elemento.hacia)"
          v-if="elemento.tipo == 0"
          :cx="tamano"
          :cy="tamano"
          :r="tamano * 0.9"
          fill="#006BA1"
        />
        <rect
          :class="
            elemento.diagonal === 0
              ? 'rotate-left'
              : elemento.diagonal === 1
              ? 'rotate-right'
              : ''
          "
          fill="#00A9E0"
          v-else-if="elemento.tipo == 1"
          :x="elemento.posicion === 'h' ? 0 : tamano - tamano / 8"
          :y="elemento.posicion === 'h' ? tamano - tamano / 8 : 0"
          :width="elemento.posicion === 'h' ? tamano * 2 : tamano / 4"
          :height="elemento.posicion === 'h' ? tamano / 4 : tamano * 2"
        />
        <rect v-else />
        <rect
          v-if="elemento.cruz && elemento.cruz == 1"
          :class="elemento.cruz == 1 ? 'horizontal' : ''"
          fill="#00A9E0"
          :x="elemento.posicion === 'h' ? 0 : tamano - tamano / 8"
          :y="elemento.posicion === 'h' ? tamano - tamano / 8 : 0"
          :width="elemento.posicion === 'h' ? tamano * 2 : tamano / 4"
          :height="elemento.posicion === 'h' ? tamano / 4 : tamano * 2"
        />
        <rect
          x="27.591497"
          y="-36.357124"
          v-if="elemento.y == true"
          width="5"
          height="40"
          class=""
          id="rect2"
          style="fill: #00a9e0"
          transform="rotate(43.732986)"
        />
        <rect
          v-if="elemento.x == true"
          x="-2.4935663"
          y="-9.4505997"
          width="5"
          height="40"
          class=""
          id="rect2"
          style="fill: #00a9e0"
          transform="matrix(-0.72256928,0.69129852,0.69129852,0.72256928,0,0)"
        />
        <rect
          v-if="elemento.sy"
          x="-8.2833757"
          y="-57.618221"
          width="5"
          height="40"
          id="rect2"
          style="fill: #00a9e0"
          transform="rotate(110.30028)"
        />

        <rect
          v-if="elemento.sx"
          x="6.1712866"
          y="-20.496908"
          width="5"
          height="40"
          class=""
          id="rect2"
          style="fill: #00a9e0"
          transform="matrix(0.34694023,0.93788724,0.93788724,-0.34694023,0,0)"
        />
        <svg
          v-if="elemento.hacia === localizacionActual"
          :x="tamano / 2 - 2"
          :y="tamano / 2 - 2"
        >
          <path
            d="m 11.567797,1.9237289 c -3.8700004,0 -7.0000004,3.13 -7.0000004,7 0,5.2500001 7.0000004,13.0000001 7.0000004,13.0000001 0,0 7,-7.75 7,-13.0000001 0,-3.87 -3.13,-7 -7,-7 z m 0,9.5000001 c -1.38,0 -2.5000004,-1.12 -2.5000004,-2.5000001 0,-1.38 1.1200004,-2.5 2.5000004,-2.5 1.38,0 2.5,1.12 2.5,2.5 0,1.3800001 -1.12,2.5000001 -2.5,2.5000001 z"
            :x="tamano"
            y="50"
            id="path4"
            fill="#00A9E0"
          />
        </svg>
      </svg>
    </div>
  </div>
</template>
<script>
import escenas from "../configRecorrido.js";

const mapa = [
  [
    { tipo: 0, hacia: "render0016" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0015" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0014" },
    {},
    {},
    {},
    { tipo: 0, hacia: "render0012" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0011" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0010" },
  ],
  [
    { tipo: 1, posicion: "v" },
    {},
    {},
    {},
    { tipo: 1, posicion: "v", sy: true },
    {},
    { tipo: 0, hacia: "render0013" },
    {},
    { tipo: 1, posicion: "v", sx: true },
    {},
    {},
    {},
    { tipo: 1, posicion: "v" },
  ],
  [
    { tipo: 1, posicion: "v" },
    {},
    {},
    {},
    { tipo: 1, posicion: "v", y: true },

    {},
    {},
    {},
    { tipo: 1, posicion: "v", x: true },
    {},
    {},
    {},
    { tipo: 1, posicion: "v" },
  ],
  [
    { tipo: 0, hacia: "render0017" },
    {},
    {},
    {},
    { tipo: 0, hacia: "render0038" },
    {},
    {},
    {},
    { tipo: 0, hacia: "render0037" },
    {},
    {},
    {},
    { tipo: 0, hacia: "render0009" },
  ],
  [
    { tipo: 1, posicion: "v" },
    {},
    {},
    {},
    { tipo: 1, posicion: "v" },
    {},
    {},
    {},
    { tipo: 1, posicion: "v" },
    {},
    {},
    {},
    { tipo: 1, posicion: "v" },
  ],
  [
    { tipo: 0, hacia: "render0019" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0034" },
    { tipo: 1, posicion: "h" },
    { tipo: 1, posicion: "v", cruz: 1 },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0035" },
    { tipo: 1, posicion: "h" },
    { tipo: 1, posicion: "v", cruz: 1 },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0036" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0007" },
  ],
  [
    { tipo: 1, posicion: "v" },
    { tipo: 1, posicion: "v", diagonal: 1 },
    {},
    {},
    { tipo: 1, posicion: "v" },
    {},
    {},
    {},
    { tipo: 1, posicion: "v" },
    {},
    {},
    { tipo: 1, posicion: "v", diagonal: 0 },
    { tipo: 1, posicion: "v" },
  ],
  [
    { tipo: 1, posicion: "v" },
    {},
    { tipo: 0, hacia: "render0031" },
    {},
    { tipo: 0, hacia: "render0033" },
    {},
    {},
    {},
    { tipo: 0, hacia: "render0030" },
    {},
    { tipo: 0, hacia: "render0032" },
    {},
    { tipo: 1, posicion: "v" },
  ],
  [
    { tipo: 1, posicion: "v" },
    { tipo: 1, posicion: "v", diagonal: 0 },
    {},
    {},
    { tipo: 1, posicion: "v" },
    {},
    {},
    {},
    { tipo: 1, posicion: "v" },
    {},
    {},
    { tipo: 1, posicion: "v", diagonal: 1 },
    { tipo: 1, posicion: "v" },
  ],
  [
    { tipo: 0, hacia: "render0020" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0027" },
    { tipo: 1, posicion: "h" },
    { tipo: 1, posicion: "v", cruz: 1 },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0028" },
    { tipo: 1, posicion: "h" },
    { tipo: 1, posicion: "v", cruz: 1 },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0029" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0006" },
  ],
  [
    { tipo: 1, posicion: "v" },
    {},
    {},
    {},
    { tipo: 1, posicion: "v" },

    {},
    {},
    {},
    { tipo: 1, posicion: "v" },
    {},
    {},
    {},
    { tipo: 1, posicion: "v" },
  ],
  [
    { tipo: 0, hacia: "render0021" },
    {},
    {},
    {},
    { tipo: 0, hacia: "render0026" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0003" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0025" },
    {},
    {},
    {},
    { tipo: 0, hacia: "render0005" },
  ],
  [
    { tipo: 1, posicion: "v" },
    {},
    {},
    {},
    {},
    { tipo: 1, posicion: "v", diagonal: 1 },
    { tipo: 1, posicion: "v" },
    { tipo: 1, posicion: "v", diagonal: 0 },
    {},
    {},
    {},
    {},
    { tipo: 1, posicion: "v" },
  ],
  [
    { tipo: 0, hacia: "render0022" },
    { tipo: 1, posicion: "h" },
    { tipo: 1, posicion: "h" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0023" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0002" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0024" },
    { tipo: 1, posicion: "h" },
    { tipo: 1, posicion: "h" },
    { tipo: 1, posicion: "h" },
    { tipo: 0, hacia: "render0004" },
  ],

  [
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 1, posicion: "v" },
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 2 },
  ],
  [
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 0, hacia: "render0001" },
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 2 },
    { tipo: 2 },
  ],
];

export default {
  name: "Mapa",
  props: ["localizacionActual"],
  data() {
    return {
      mapa,
      tamano: 20,
    };
  },
  methods: {
    getTooltips(render) {
      return escenas[render].totems
        .map((totem) => totem.informacion.titulo)
        .join(" || ");
    },
  },
  mounted() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip({ boundary: "window" });
    });
  },
};
</script>

<style>
.mapa {
  min-width: 280px;
  overflow: scroll;
}
circle {
  transition: fill 0.3s ease-out;
  cursor: pointer;
}
circle:hover {
  fill: #ee0a7c;
}
svg .rotate-left {
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(45deg);
}

svg .rotate-right {
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(-45deg);
}

svg .horizontal {
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(90deg);
}
.map-row {
  width: 550px !important;
}

@media (min-width: 768px) {
  .map-row{
    margin-left: 3em;
  }
}
</style>
