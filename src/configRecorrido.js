const elementos = {
  //AXEN
  axen: {
    nombreStand: 'axen',
    tipoStand: 'tecnologias',
    id: '',
    whatsapp: 'https://wa.link/9dz2k9',
    videos: ['https://www.youtube.com/embed/HMe3-9Vs9xc'],
    videoBienvenida: '',
    informacion: {
      titulo: 'Axen',
      ofertatecnologica: require
        .context(`@/assets/ofertatecnologica/axen/`, true, /.*/)
        .keys(),
      imagen: 'axen.png',
      contenidos: [
        {
          titulo: 'Contacto',
          tipo: 'contacto',
          contactos: [
            {
              tipo: 'Email',
              contenido: 'contacto@axen.pro',
            },
            {
              tipo: 'Telefono',
              contenido: 'Tel. 81 1130 9494',
            },
            {
              tipo: 'Telefono',
              contenido: 'Tel. 55 6818 7976',
            },
            {
              tipo: 'Web.Web',
              titulo: 'Redes Sociales',
              contenido: 'Página principal',
              link: 'http://www.axen.pro/',
            },

            {
              tipo: 'Web.Facebook',
              contenido: 'Facebook',
              link: 'https://www.facebook.com/AXEN.pro',
            },
          ],
        },
      ],
    },
  },

  //CIIIA
  ciiia: {
    nombreStand: 'ciiia',
    tipoStand: 'tecnologias',
    id: '',
    whatsapp: 'https://wa.link/tg9t05',
    videos: ['https://www.youtube.com/embed/7WqS0efm2Vc'],
    videoBienvenida: '',
    informacion: {
      titulo:
        'Centro de Innovación Industrial en Inteligencia Artificial CIIIA',
      ofertatecnologica: require
        .context(`@/assets/ofertatecnologica/ciiia/`, true, /.*/)
        .keys(),
      imagen: 'ciiia.png',
      contenidos: [
        {
          titulo: 'Contacto',
          tipo: 'contacto',
          contactos: [
            {
              tipo: 'Email',
              titulo: 'Héctor Joel González Santos',
              contenido: ' hector.gonzalez@ciiia.mx',
            },
            {
              tipo: 'Telefono',
              contenido: 'Tel. 8112555500',
            },
            {
              tipo: 'Telefono',
              contenido: 'Conmutador. 8182863400',
            },
            {
              tipo: 'Email',
              titulo: 'Mauricio Leal',
              contenido: 'mauricio.leal@ciiia.mx',
            },
            {
              tipo: 'Telefono',
              contenido: 'Tel. 81 2000 2127',
            },
            {
              tipo: 'Web.Web',
              titulo: 'Redes Sociales',
              contenido: 'Página principal',
              link: 'https://www.ciiia.mx/',
            },

            {
              tipo: 'Web.Facebook',
              contenido: 'Facebook',
              link: 'https://www.facebook.com/CII.IA1',
            },
          ],
        },
      ],
    },
  },

  //CIIC MEXICO
  ciic: {
    nombreStand: 'ciic',
    tipoStand: 'tecnologias',
    id: '',
    whatsapp: '',
    videos: [],
    videoBienvenida: '',
    informacion: {
      titulo: 'CIIC México',
      ofertatecnologica: require
        .context(`@/assets/ofertatecnologica/ciic/`, true, /.*/)
        .keys(),
      imagen: 'ciic.png',
      contenidos: [
        {
          titulo: 'Contacto',
          tipo: 'contacto',
          contactos: [
            {
              tipo: 'Web.Web',
              titulo: 'Redes Sociales',
              contenido: 'Página principal',
              link: 'https://ciicmexico.com/',
            },

            {
              tipo: 'Web.Facebook',
              titulo: 'Test',
              contenido: 'Facebook',
              link: 'https://www.facebook.com/CIICMexico',
            },
          ],
        },
      ],
    },
  },

  //CSOFTMTY
  csoft: {
    nombreStand: 'csoft',
    tipoStand: 'tecnologias',
    id: 'Csoftmty',
    whatsapp: '',
    videos: ['https://www.youtube.com/embed/9XdUfuWhVHs'],
    videoBienvenida: '',
    imagenesPresentacion: require.context(``, true, /.*/).keys(),
    informacion: {
      titulo: 'Csoftmty',
      ofertatecnologica: require
        .context(`@/assets/ofertatecnologica/csoft/`, true, /.*/)
        .keys(),
      imagen: 'csoft.png',
      contenidos: [
        {
          titulo: 'Contacto',
          tipo: 'contacto',
          contactos: [
            {
              tipo: 'Email',
              contenido: 'info@csoftmty.org',
            },
            {
              tipo: 'Telefono',
              contenido: 'Tel. 81 8340 7840',
            },
            {
              tipo: 'Web.Web',
              titulo: 'Redes Sociales',
              contenido: 'Página principal',
              link: 'https://www.csoftmty.org/',
            },
            {
              tipo: 'Web.Facebook',
              contenido: 'Facebook',
              link: 'https://www.facebook.com/csoftmty/',
            },
          ],
        },
      ],
    },
  },

  //HACSYS MEXICO
  hacsys: {
    nombreStand: 'hacsys',
    tipoStand: 'tecnologias',
    id: '',
    whatsapp: '',
    videos: [],
    videoBienvenida: '',
    imagenesPresentacion: require.context(``, true, /.*/).keys(),
    informacion: {
      titulo: 'Hacsys México',
      ofertatecnologica: require
        .context(`@/assets/ofertatecnologica/hacsys/`, true, /.*/)
        .keys(),
      imagen: 'hacsys.png',
      contenidos: [
        {
          titulo: 'Contacto',
          tipo: 'contacto',
          contactos: [
            {
              tipo: 'Email',
              contenido: 'hello@hacsys.mx',
            },
            {
              tipo: 'Telefono',
              contenido: 'Tel. 81 1167 0373',
            },
            {
              tipo: 'Web.Web',
              titulo: 'Redes Sociales',
              contenido: 'Página principal',
              link: 'https://www.hacsys.com/',
            },

            {
              tipo: 'Web.Facebook',
              contenido: 'Facebook',
              link: 'https://www.facebook.com/hacsys.latam/',
            },
          ],
        },
      ],
    },
  },

  //IPC SERVICES
  ipc: {
    nombreStand: 'ipc',
    tipoStand: 'tecnologias',
    id: '',
    whatsapp: '',
    videos: [],
    videoBienvenida: '',
    imagenesPresentacion: require.context(``, true, /.*/).keys(),
    informacion: {
      titulo: 'IPC Services',
      ofertatecnologica: require
        .context(`@/assets/ofertatecnologica/ipc/`, true, /.*/)
        .keys(),
      imagen: 'ipc.png',
      contenidos: [
        {
          titulo: 'Contacto',
          tipo: 'contacto',
          contactos: [
            {
              tipo: 'Email',
              contenido: 'ventas@ipcservices.net',
            },
            {
              tipo: 'Telefono',
              contenido: 'Tel. 81 1352 2600',
            },
            {
              tipo: 'Web.Web',
              titulo: 'Redes Sociales',
              contenido: 'Página principal',
              link: 'http://www.ipcservices.net/',
            },

            {
              tipo: 'Web.Facebook',
              contenido: 'Facebook',
              link: 'https://www.facebook.com/IPCServices',
            },
          ],
        },
      ],
    },
  },

  //MICROSIP
  microsip: {
    nombreStand: 'microsip',
    tipoStand: 'tecnologias',
    id: '',
    whatsapp: '',
    videos: ['https://www.youtube.com/embed/jrZ52Llop6A'],
    videoBienvenida: '',
    imagenesPresentacion: require.context(``, true, /.*/).keys(),
    informacion: {
      titulo: 'Microsip',
      ofertatecnologica: require
        .context(`@/assets/ofertatecnologica/microsip/`, true, /.*/)
        .keys(),
      imagen: 'microsip.png',
      contenidos: [
        {
          titulo: 'Contacto',
          tipo: 'contacto',
          contactos: [
            {
              tipo: 'Email',
              contenido: 'redes@microsip.com',
            },
            {
              tipo: 'Telefono',
              contenido: 'Tel. 871 720 0302',
            },
            {
              tipo: 'Web.Web',
              titulo: 'Redes Sociales',
              contenido: 'Página principal',
              link: 'http://www.microsip.com/ ',
            },

            {
              tipo: 'Web.Facebook',
              contenido: 'Facebook',
              link: 'https://www.facebook.com/Microsip/',
            },
          ],
        },
      ],
    },
  },
  //OCTOPY
  octopy: {
    nombreStand: 'octopy',
    tipoStand: 'tecnologias',
    id: '',
    whatsapp: '',
    videos: ['https://www.youtube.com/embed/rTO82f-TG4U'],
    videoBienvenida: '',
    imagenesPresentacion: require.context(``, true, /.*/).keys(),
    informacion: {
      titulo: 'Octopy',
      ofertatecnologica: require
        .context(`@/assets/ofertatecnologica/octopy/`, true, /.*/)
        .keys(),
      imagen: 'octopy.png',
      contenidos: [
        {
          titulo: 'Contacto',
          tipo: 'contacto',
          contactos: [
            {
              tipo: 'Email',
              contenido: 'octopymx@gmail.com',
            },
            {
              tipo: 'Telefono',
              contenido: 'Tel. 55 7159 7824',
            },
            {
              tipo: 'Web.Web',
              titulo: 'Redes Sociales',
              contenido: 'Página principal',
              link: 'https://octopy.com/#/',
            },

            {
              tipo: 'Web.Facebook',
              contenido: 'Facebook',
              link: 'https://www.facebook.com/octopymxx/',
            },
          ],
        },
      ],
    },
  },

  //TECNOAP
  tecnoap: {
    nombreStand: 'tecnoap',
    tipoStand: 'tecnologias',
    id: '',
    whatsapp: '',
    videos: ['https://www.youtube.com/embed/RPQ9pOs6YIM'],
    videoBienvenida: '',
    imagenesPresentacion: require.context(``, true, /.*/).keys(),
    informacion: {
      titulo: 'Tecnoap',
      ofertatecnologica: require
        .context(`@/assets/ofertatecnologica/tecnoap/`, true, /.*/)
        .keys(),
      imagen: 'tecnoap.png',
      contenidos: [
        {
          titulo: 'Contacto',
          tipo: 'contacto',
          contactos: [
            {
              tipo: 'Email',
              contenido: 'contacto@tecnoap.com',
            },
            {
              tipo: 'Telefono',
              contenido: 'Tel. 81 1934 5590',
            },
            {
              tipo: 'Web.Web',
              titulo: 'Redes Sociales',
              contenido: 'Página principal',
              link: 'https://www.tecnoap.com/',
            },

            {
              tipo: 'Web.Facebook',
              contenido: 'Facebook',
              link: 'https://www.facebook.com/tecnoap.global/',
            },
          ],
        },
      ],
    },
  },

  //KERNEL LOG
  kernel: {
    nombreStand: 'kernel',
    tipoStand: 'tecnologias',
    id: '',
    whatsapp: 'https://wa.link/9dz2k9',
    videos: ['https://www.youtube.com/embed/-JCptb9ROko'],
    videoBienvenida: '',
    imagenesPresentacion: require.context(``, true, /.*/).keys(),
    informacion: {
      titulo: 'Kernel Logistic',
      ofertatecnologica: require
        .context(`@/assets/ofertatecnologica/kernel/`, true, /.*/)
        .keys(),
      imagen: 'kernel.png',
      contenidos: [
        {
          titulo: 'Contacto',
          tipo: 'contacto',
          contactos: [
            {
              tipo: 'Telefono',
              titulo: 'Lic. Johana Castillo Galván',
              contenido: 'Tel.+52 81 2598.6138',
            },
            {
              tipo: 'Web.Web',
              titulo: 'Redes Sociales',
              contenido: 'Página principal',
              link: 'http://kernel-logistics.com/',
            },
          ],
        },
      ],
    },
  },
  //MY MOTTION
  mymottion: {
    nombreStand: 'mymottion',
    tipoStand: 'tecnologias',
    id: '',
    whatsapp: '',
    videos: ['https://www.youtube.com/embed/67nKYT0PLQ0'],
    videoBienvenida: '',
    imagenesPresentacion: require.context(``, true, /.*/).keys(),
    informacion: {
      titulo: 'MY MOTTION',
      ofertatecnologica: require
        .context(`@/assets/ofertatecnologica/mymottion/`, true, /.*/)
        .keys(),
      imagen: 'mymottion.png',
      contenidos: [
        {
          titulo: 'Contacto',
          tipo: 'contacto',
          contactos: [
            {
              tipo: 'Email',
              contenido: 'contacto@mymottion.com',
            },
            {
              tipo: 'Telefono',
              contenido: 'Tel. +52 818000-0331',
            },
            {
              tipo: 'Web.Web',
              titulo: 'Redes Sociales',
              contenido: 'Página principal',
              link: 'https://mymottion.com/',
            },

            {
              tipo: 'Web.Facebook',
              contenido: 'Facebook',
              link: 'https://www.facebook.com/MyMottion/',
            },
          ],
        },
      ],
    },
  },

  //IT CLUSTER
  itcluster: {
    nombreStand: 'itcluster',
    tipoStand: 'tecnologias',
    id: '',
    whatsapp: '',
    videos: [],
    videoBienvenida: '',
    imagenesPresentacion: require.context(``, true, /.*/).keys(),
    informacion: {
      titulo: 'Monterrey IT Cluster',
      ofertatecnologica: require
        .context(`@/assets/ofertatecnologica/itcluster/`, true, /.*/)
        .keys(),
      imagen: 'itcluster.png',
      contenidos: [
        {
          titulo: 'Contacto',
          tipo: 'contacto',
          contactos: [
            {
              tipo: 'Email',
              titulo: 'Carlos Hernández Bermea',
              contenido: 'presidencia@mitc.com.mx',
            },
            {
              tipo: 'Email',
              titulo: 'Rafael Jimenez Orozco',
              contenido: 'secretario@mitc.com.mx',
            },
            {
              tipo: 'Email',
              titulo: 'Javier Rodriguez Sáenz',
              contenido: 'tesoreria@mitc.com.mx',
            },

            {
              tipo: 'Telefono',
              contenido: 'Tel. (81) 8286-3400',
            },
            {
              tipo: 'Web.Web',
              titulo: 'Redes Sociales',
              contenido: 'Página principal',
              link: 'http://mitc.com.mx/',
            },

            {
              tipo: 'Web.Facebook',
              contenido: 'Facebook',
              link: 'https://www.facebook.com/MTYITC/',
            },
          ],
        },
      ],
    },
  },
};

const escenas = {
  // Render de prueba, aqui estan todos los totems
  render0001: {
    cielo: 'render0001.jpg', // Nombre de la imagen
    navegadores: [
      // Up
      {
        tipo: 'flecha',
        posicion: '-8 -3 0',
        hacia: 'render0002',
        rotacion: '-90 90 0',
      },
    ],
    totems: [
      // {
      // 	...elementos["axen"],
      // 	posicion: "-2 1 2",
      // 	rotacion: "0 90 0",
      // },
      // {
      // 	...elementos["ciiia"],
      // 	posicion: "-2 1 1.5",
      // 	rotacion: "0 90 0",
      // },
      // {
      // 	...elementos["ciic"],
      // 	posicion: "-2 1 1",
      // 	rotacion: "0 90 0",
      // },
      // {
      // 	...elementos["csoft"],
      // 	posicion: "-2 1 0.5",
      // 	rotacion: "0 90 0",
      // },
      // {
      // 	...elementos["hacsys"],
      // 	posicion: "-2 1 0",
      // 	rotacion: "0 90 0",
      // },
      // {
      // 	...elementos["ipc"],
      // 	posicion: "-2 1 -0.5",
      // 	rotacion: "0 90 0",
      // },
      // {
      // 	...elementos["microsip"],
      // 	posicion: "-2 1 -1",
      // 	rotacion: "0 90 0",
      // },
      // {
      // 	...elementos["octopy"],
      // 	posicion: "-2 1 -1.5",
      // 	rotacion: "0 90 0",
      // },
      // {
      // 	...elementos["tecnoap"],
      // 	posicion: "-2 1 -2",
      // 	rotacion: "0 90 0",
      // },
      // {
      // 	...elementos["kernel"],
      // 	posicion: "-2 1 -2.5",
      // 	rotacion: "0 90 0",
      // },
      // {
      // 	...elementos["mymottion"],
      // 	posicion: "-2 1 -3",
      // 	rotacion: "0 90 0",
      // },
      // {
      // 	...elementos["itcluster"],
      // 	posicion: "-2 1 -3.5",
      // 	rotacion: "0 90 0",
      // },
    ],
    bienvenidas: [],
  },
  render0002: {
    cielo: 'render0002.jpg', // Nombre de la imagen
    navegadores: [
      // Down
      {
        tipo: 'flecha',
        posicion: '8 -3 0',
        hacia: 'render0001',
        rotacion: '-90 -90 0',
      },
      // Up Left
      {
        tipo: 'flecha',
        posicion: '-6 -3 6',
        hacia: 'render0003',
        rotacion: '-90 135 0',
      },
      // Up Right
      {
        tipo: 'flecha',
        posicion: '-6 -3 -6',
        hacia: 'render0004',
        rotacion: '-90 45 0',
      },
    ],
    totems: [
      {
        ...elementos['axen'],
        posicion: '-3 0.875 -1.4',
        rotacion: '0 60 0',
      },
    ],
    bienvenidas: [],
  },

  render0003: {
    rotacionCielo: '0 90 0',
    cielo: 'render0003.jpg', // Nombre de la imagen
    navegadores: [
      //Abajo Hacia Izuierda
      {
        tipo: 'flecha',
        posicion: '8 -3 0',
        hacia: 'render0002',
        rotacion: '-90 -45 0',
      },
      // Up Right
      {
        tipo: 'flecha',
        posicion: '-6 -3 -2',
        hacia: 'render0005',
        rotacion: '-90 45 0',
      },
      // Up
      {
        tipo: 'flecha',
        posicion: '-7.5 -3 0',
        hacia: 'render0006',
        rotacion: '-90 90 0',
      },
    ],
    totems: [
      {
        ...elementos['csoft'],
        posicion: '-1.3 1 1.75',
        rotacion: '0 160 0',
      },
    ],
    bienvenidas: [],
  },
  render0004: {
    cielo: 'render0004.jpg', // Nombre de la imagen
    rotacionCielo: '0 -90 0',
    navegadores: [
      //Abajo Hacia Derecha
      {
        tipo: 'flecha',
        posicion: '8 -3 0',
        hacia: 'render0002',
        rotacion: '-90 -135 0',
      },
      // Up Left
      {
        tipo: 'flecha',
        posicion: '-6 -3 2',
        hacia: 'render0005',
        rotacion: '-90 135 0',
      },
      // Up
      {
        tipo: 'flecha',
        posicion: '-7.5 -3 0',
        hacia: 'render0007',
        rotacion: '-90 90 0',
      },
    ],
    totems: [
      {
        ...elementos['itcluster'],
        posicion: '1.3 1 -1.75',
        rotacion: '0 -20 0',
      },
	],
    bienvenidas: [],
  },
  render0005: {
    cielo: 'render0005.jpg', // Nombre de la imagen
    navegadores: [
      //   Right Down
      {
        tipo: 'flecha',
        posicion: '1.5 -3 -8',
        hacia: 'render0004',
        rotacion: '-90 -45 0',
      },
      //   Right Up
      {
        tipo: 'flecha',
        posicion: '-1.5 -3 -8',
        hacia: 'render0007',
        rotacion: '-90 45 0',
      },
      //   Left Down
      {
        tipo: 'flecha',
        posicion: '1.5 -3 8',
        hacia: 'render0003',
        rotacion: '-90 -135 0',
      },
      //   Left Up
      {
        tipo: 'flecha',
        posicion: '-1.5 -3 8',
        hacia: 'render0006',
        rotacion: '-90 135 0',
      },
    ],
    totems: [
      {
        ...elementos['microsip'],
        posicion: '-1.75 1 -1.3',
        rotacion: '0 60 0',
      },
	],
    bienvenidas: [],
  },
  render0006: {
    cielo: 'render0006.jpg', // Nombre de la imagen
    rotacionCielo: '0 90 0',
    navegadores: [
      // Up Right
      {
        tipo: 'flecha',
        posicion: '-6 -3 -2',
        hacia: 'render0008',
        rotacion: '-90 45 0',
      },
      // Up
      {
        tipo: 'flecha',
        posicion: '-7.5 -3 0',
        hacia: 'render0009',
        rotacion: '-90 90 0',
      },
      // Down Right
      {
        tipo: 'flecha',
        posicion: '6 -3 -2',
        hacia: 'render0005',
        rotacion: '-90 -45 0',
      },
      // Down
      {
        tipo: 'flecha',
        posicion: '7.5 -3 0',
        hacia: 'render0003',
        rotacion: '-90 -90 0',
      },
    ],
    totems: [
      {
        ...elementos['ciiia'],
        posicion: '-1.3 1 1.75',
        rotacion: '0 160 0',
      },
	],
    bienvenidas: [],
  },
  render0007: {
    cielo: 'render0007.jpg', // Nombre de la imagen
    rotacionCielo: '0 -90 0',
    navegadores: [
      // Up Left
      {
        tipo: 'flecha',
        posicion: '-6 -3 2',
        hacia: 'render0008',
        rotacion: '-90 135 0',
      },
      // Up
      {
        tipo: 'flecha',
        posicion: '-7.5 -3 0',
        hacia: 'render0010',
        rotacion: '-90 90 0',
      },
      // Down Left
      {
        tipo: 'flecha',
        posicion: '6 -3 2',
        hacia: 'render0005',
        rotacion: '-90 -135 0',
      },
      // Down
      {
        tipo: 'flecha',
        posicion: '7.5 -3 0',
        hacia: 'render0004',
        rotacion: '-90 -90 0',
      },
    ],
    totems: [
      {
        ...elementos['kernel'],
        posicion: '1.3 1 -1.75',
        rotacion: '0 -20 0',
      },
	],
    bienvenidas: [],
  },
  render0008: {
    cielo: 'render0008.jpg', // Nombre de la imagen
    navegadores: [
      //   Right Down
      {
        tipo: 'flecha',
        posicion: '1.5 -3 -8',
        hacia: 'render0007',
        rotacion: '-90 -45 0',
      },
      //   Right Up
      {
        tipo: 'flecha',
        posicion: '-1.5 -3 -8',
        hacia: 'render0010',
        rotacion: '-90 45 0',
      },
      //   Left Down
      {
        tipo: 'flecha',
        posicion: '1.5 -3 8',
        hacia: 'render0006',
        rotacion: '-90 -135 0',
      },
      //   Left Up
      {
        tipo: 'flecha',
        posicion: '-1.5 -3 8',
        hacia: 'render0009',
        rotacion: '-90 135 0',
      },
    ],
    totems: [
      {
        ...elementos['ciic'],
        posicion: '-1.75 1 -1.3',
        rotacion: '0 60 0',
      },
	],
    bienvenidas: [],
  },

  render0009: {
    cielo: 'render0009.jpg', // Nombre de la imagen
    rotacionCielo: '0 90 0',
    navegadores: [
      // Up Right
      {
        tipo: 'flecha',
        posicion: '-6 -3 -2',
        hacia: 'render0008',
        rotacion: '-90 45 0',
      },
      // Up
      {
        tipo: 'flecha',
        posicion: '-7.5 -3 0',
        hacia: 'render0012',
        rotacion: '-90 90 0',
      },
      // Down Right
      {
        tipo: 'flecha',
        posicion: '6 -3 -2',
        hacia: 'render0008',
        rotacion: '-90 -45 0',
      },
      // Down
      {
        tipo: 'flecha',
        posicion: '7.5 -3 0',
        hacia: 'render0006',
        rotacion: '-90 -90 0',
      },
    ],
    totems: [
      {
        ...elementos['ipc'],
        posicion: '-1.3 1 1.75',
        rotacion: '0 160 0',
      },
	],
    bienvenidas: [],
  },
  render0010: {
    cielo: 'render0010.jpg', // Nombre de la imagen
    rotacionCielo: '0 -90 0',
    navegadores: [
      // Up Left
      {
        tipo: 'flecha',
        posicion: '-6 -3 2',
        hacia: 'render0011',
        rotacion: '-90 135 0',
      },
      // Up
      {
        tipo: 'flecha',
        posicion: '-7.5 -3 0',
        hacia: 'render0013',
        rotacion: '-90 90 0',
      },
      // Down Left
      {
        tipo: 'flecha',
        posicion: '6 -3 2',
        hacia: 'render0008',
        rotacion: '-90 -135 0',
      },
      // Down
      {
        tipo: 'flecha',
        posicion: '7.5 -3 0',
        hacia: 'render0007',
        rotacion: '-90 -90 0',
      },
    ],
    totems: [
      {
        ...elementos['octopy'],
        posicion: '1.3 1 -1.75',
        rotacion: '0 -20 0',
      },
	],
    bienvenidas: [],
  },
  render0011: {
    cielo: 'render0011.jpg', // Nombre de la imagen
    navegadores: [
      //   Right Down
      {
        tipo: 'flecha',
        posicion: '1.5 -3 -8',
        hacia: 'render0010',
        rotacion: '-90 -45 0',
      },
      //   Right Up
      {
        tipo: 'flecha',
        posicion: '-1.5 -3 -8',
        hacia: 'render0013',
        rotacion: '-90 45 0',
      },
      //   Left Down
      {
        tipo: 'flecha',
        posicion: '1.5 -3 8',
        hacia: 'render0009',
        rotacion: '-90 -135 0',
      },
      //   Left Up
      {
        tipo: 'flecha',
        posicion: '-1.5 -3 8',
        hacia: 'render0012',
        rotacion: '-90 135 0',
      },
    ],
    totems: [
      {
        ...elementos['hacsys'],
        posicion: '-1.75 1 -1.3',
        rotacion: '0 60 0',
      },
	],
    bienvenidas: [],
  },
  render0013: {
    cielo: 'render0013.jpg', // Nombre de la imagen
    rotacionCielo: '0 -90 0',
    navegadores: [
      // Down Left
      {
        tipo: 'flecha',
        posicion: '6 -3 2',
        hacia: 'render0011',
        rotacion: '-90 -135 0',
      },
      // Down
      {
        tipo: 'flecha',
        posicion: '7.5 -3 0',
        hacia: 'render0010',
        rotacion: '-90 -90 0',
      },
    ],
    totems: [
      {
        ...elementos['mymottion'],
        posicion: '1.3 1 -1.75',
        rotacion: '0 -20 0',
      },
	],
    bienvenidas: [],
  },
  render0012: {
    cielo: 'render0012.jpg', // Nombre de la imagen
    rotacionCielo: '0 90 0',
    navegadores: [
      // Down Right
      {
        tipo: 'flecha',
        posicion: '6 -3 -2',
        hacia: 'render0011',
        rotacion: '-90 -45 0',
      },
      // Down
      {
        tipo: 'flecha',
        posicion: '7.5 -3 0',
        hacia: 'render0009',
        rotacion: '-90 -90 0',
      },
    ],
    totems: [
      {
        ...elementos['tecnoap'],
        posicion: '-1.3 1 1.75',
        rotacion: '0 160 0',
      },
	],
    bienvenidas: [],
  },
  elementos,
}; 

export default escenas;
