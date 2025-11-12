const booksData = [

  {
    title: "1984",
    image: "public/images/1984.jpg",
    genre: "Ciencia ficción / Distopía",
    price: 14.99,
    synopsis: "Una novela distópica sobre un régimen totalitario que controla cada aspecto de la vida humana y reescribe la historia."
  },
  {
    title: "Antología poética",
    image: "public/images/antologia-poetica.jpg",
    genre: "Poesía",
    price: 11.5,
    synopsis: "Selección de poemas que exploran el amor, la muerte, la esperanza y la belleza del lenguaje."
  },
  {
    title: "Así habló Zaratustra",
    image: "public/images/asi-hablo-zaratustra.jpg",
    genre: "Filosofía",
    price: 13.75,
    synopsis: "La obra filosófica más influyente de Nietzsche, donde presenta al superhombre y critica la moral tradicional."
  },
  {
    title: "Atrapado en la oscuridad",
    image: "public/images/atrapado-en-la-oscuridad.jpg",
    genre: "Suspenso / Terror psicológico",
    price: 10.99,
    synopsis: "Una historia de misterio y horror en la que nada es lo que parece."
  },
  {
    title: "Berserk",
    image: "public/images/berserk.jpg",
    genre: "Manga / Fantasía oscura",
    price: 22.5,
    synopsis: "La historia épica de Guts, un guerrero marcado por la tragedia en un mundo dominado por demonios y oscuridad."
  },
  {
    title: "Chainsaw Man",
    image: "public/images/chainsaw-man.jpg",
    genre: "Manga / Acción / Terror",
    price: 19.99,
    synopsis: "Denji, un joven cazador de demonios, obtiene el poder de convertirse en Chainsaw Man para luchar contra seres infernales."
  },
  {
    title: "Cien años de soledad",
    image: "public/images/cien-años-de-soledad.jpg",
    genre: "Realismo mágico",
    price: 18.5,
    synopsis: "La saga de la familia Buendía en el pueblo de Macondo, una obra maestra de Gabriel García Márquez."
  },
  {
    title: "Crimen y castigo",
    image: "public/images/crimen-y-castigo.jpg",
    genre: "Drama psicológico",
    price: 16.75,
    synopsis: "Raskólnikov, un estudiante ruso, comete un crimen y se enfrenta al tormento de su conciencia."
  },
  {
    title: "El coronel no tiene quien le escriba",
    image: "public/images/el-coronel-no-tiene-quien-le-escriba.jpg",
    genre: "Ficción literaria",
    price: 12.99,
    synopsis: "Un coronel jubilado espera con dignidad una pensión que nunca llega, símbolo de la esperanza y la desilusión."
  },
  {
    title: "El diario de Anne Frank",
    image: "public/images/el-diario-de-anne-frank.jpg",
    genre: "Memorias / Historia",
    price: 11.99,
    synopsis: "El testimonio de una joven judía que narra su vida oculta durante la ocupación nazi."
  },
  {
    title: "El principito",
    image: "public/images/el-principito.jpg",
    genre: "Fábula / Filosofía",
    price: 10.99,
    synopsis: "Un cuento filosófico sobre la inocencia, la amistad y la búsqueda del sentido de la vida."
  },
  {
    title: "El Quijote",
    image: "public/images/el-quijote.jpg",
    genre: "Clásico / Aventura",
    price: 17.5,
    synopsis: "Las aventuras del caballero Don Quijote y su fiel escudero Sancho Panza en su lucha contra la realidad."
  },
  {
    title: "Ensayos",
    image: "public/images/ensayos.jpg",
    genre: "Filosofía / Ensayo",
    price: 14.0,
    synopsis: "Una colección de reflexiones filosóficas y morales sobre la condición humana."
  },
  {
    title: "Flores para Algernon",
    image: "public/images/flores-para-algernon.jpg",
    genre: "Ciencia ficción / Drama",
    price: 15.25,
    synopsis: "Charlie Gordon se somete a un experimento para aumentar su inteligencia, con resultados devastadores."
  },
  {
    title: "Hunter x Hunter",
    image: "public/images/hunter-x-hunter.jpg",
    genre: "Manga / Aventura / Acción",
    price: 21.99,
    synopsis: "Gon Freecss se embarca en una aventura para convertirse en cazador y encontrar a su padre desaparecido."
  },
  {
    title: "Indigno de ser humano",
    image: "public/images/indigno-de-ser-humano.jpg",
    genre: "Drama psicológico / Existencialismo",
    price: 13.25,
    synopsis: "Un retrato crudo y doloroso de un hombre que se siente incapaz de encajar en la sociedad."
  },
  {
    title: "La catedral",
    image: "public/images/la-catedral.jpg",
    genre: "Ficción contemporánea",
    price: 13.5,
    synopsis: "Un retrato de la corrupción política y moral en el Perú a través de la voz de varios personajes."
  },
  {
    title: "La leyenda del rey errante",
    image: "public/images/la-leyenda-del-rey-errante.jpg",
    genre: "Aventura / Fantasía",
    price: 11.5,
    synopsis: "Un relato poético sobre la búsqueda de la sabiduría y el valor de la palabra."
  },
  {
    title: "La metamorfosis",
    image: "public/images/la-metamorfosis.jpg",
    genre: "Ficción absurda",
    price: 9.99,
    synopsis: "Gregor Samsa despierta convertido en insecto, enfrentándose a la incomprensión de su familia."
  },
  {
    title: "Los hermanos Karamazov",
    image: "public/images/los-hermanos-karamazov.jpg",
    genre: "Filosofía / Drama psicológico",
    price: 17.99,
    synopsis: "Una profunda exploración de la fe, la duda y la moral en una familia rusa atormentada."
  },
  {
    title: "Metro 2033",
    image: "public/images/metro-2033.jpg",
    genre: "Ciencia ficción / Postapocalíptica",
    price: 16.99,
    synopsis: "En un Moscú devastado, los sobrevivientes viven en el metro mientras enfrentan mutantes y su propia desesperanza."
  },
  {
    title: "Oyasumi Punpun",
    image: "public/images/oyasumi-punpun.jpg",
    genre: "Manga / Drama / Coming-of-age",
    price: 23.5,
    synopsis: "La historia de Punpun, un niño que atraviesa la complejidad de crecer en un mundo cruel e incomprensible."
  },
  {
    title: "Pasos de marioneta",
    image: "public/images/pasos-de-marioneta.jpg",
    genre: "Thriller psicológico",
    price: 12.25,
    synopsis: "Una historia de manipulación, secretos y control que mantiene la tensión hasta el final."
  },
  {
    title: "Rebelión en la granja",
    image: "public/images/rebelion-en-la-granja.jpg",
    genre: "Sátira política",
    price: 12.75,
    synopsis: "Los animales de una granja se rebelan contra los humanos, solo para crear su propia tiranía."
  },
  {
    title: "Sol y acero",
    image: "public/images/sol-y-acero.jpg",
    genre: "Ensayo / Filosofía",
    price: 11.99,
    synopsis: "Mishima reflexiona sobre la dualidad entre el cuerpo y el espíritu, la disciplina y la estética."
  },
  {
    title: "Vagabond",
    image: "public/images/vagabond.jpg",
    genre: "Manga / Histórico / Acción",
    price: 22.99,
    synopsis: "Basado en la vida del samurái Musashi Miyamoto, un viaje hacia la perfección y la redención."
  }
];

export default booksData;
