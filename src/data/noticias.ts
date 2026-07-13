/* ============================================================
   Noticias — contenido editorial de Manos x Chile.
   Para agregar una noticia: añadir un objeto al arreglo NEWS
   (la primera del arreglo se muestra como la más reciente).
   ============================================================ */

export type NewsBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string; author?: string };

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;      // texto visible, ej: "Julio 2026"
  category: string;  // etiqueta corta, ej: "Comunidad"
  image: string;     // archivo dentro de /public/assets
  imageAlt: string;
  body: NewsBlock[];
}

export const NEWS: NewsArticle[] = [
  {
    slug: "ferias-sustentables-chiloe",
    title: "Manos x Chile participa de ferias sustentables en Chiloé",
    excerpt:
      "La empresa dedicada a darle nuevos usos al plástico, fue partícipe de la II Feria sustentable del Medio Ambiente en Quinchao y del primer Seminario “De residuo a recurso” en Castro.",
    date: "Julio 2026",
    category: "Comunidad",
    image: "noticia_ferias_chiloe.jpg",
    imageAlt: "Stand de Manos x Chile en feria sustentable en Chiloé",
    body: [
      {
        type: "p",
        text: "Hace unas semanas, la isla de Quinchao dio paso a su II Feria Sustentable del Medio Ambiente, instancia en la cual Manos x Chile participó con un stand, mostrando los diversos usos que se les pueden dar a las ecotablas, generando interés en niños y adultos. El encuentro estuvo marcado por la presencia de diversos actores dedicados al cuidado del medio ambiente en el territorio, por lo que para Manos x Chile poder participar de esta convocatoria fue de gran importancia.",
      },
      {
        type: "quote",
        text: "Estamos muy felices de que se desarrollen este tipo de actividades, ya que muestra la diversidad de oportunidades que se pueden crear en base al reciclaje y el cuidado del medio ambiente. Nos enorgullece mucho que la Municipalidad de Quinchao nos haya invitado para poder mostrar lo que hacemos y que más personas puedan saber sobre nosotros.",
        author: "Paula Toro, miembro fundadora de Manos x Chile",
      },
      {
        type: "p",
        text: "Por otra parte, la empresa también fue partícipe del Seminario “De Residuo a Recurso” organizado por la I. Municipalidad de Castro. Este encuentro contó con la participación de diversos emprendimientos dedicados al reciclaje y la economía circular, así como también de representantes de la I. Municipalidad de Rapa Nui y de La Pintana.",
      },
      {
        type: "p",
        text: "Durante esta actividad, Manos x Chile no sólo participó con un stand, sino que también con una exposición sobre lo que realiza y la importancia de reciclar.",
      },
      {
        type: "quote",
        text: "Nos entusiasma mucho poder mostrar a la comunidad todo lo que hacemos, porque el conocimiento se trata de compartir lo que uno sabe. Nosotros estamos en Chiloé hace ya casi 2 años y nos pone felices ver que cada vez nos van conociendo más y se dan cuenta de que el producto que hacemos es de calidad.",
        author: "Juan Manuel Toro, dueño de Manos x Chile",
      },
      {
        type: "quote",
        text: "Estamos agradecidos por esta oportunidad que nos dio la organización de este evento, de poder no sólo mostrar nuestros productos con un stand, sino que también poder exponer sobre nuestro trabajo. Muchas gracias a todos quienes hicieron posible esto.",
        author: "Juan Manuel Toro, dueño de Manos x Chile",
      },
      {
        type: "p",
        text: "Es así como Manos x Chile se ha ido posicionando en Chiloé y en la región, esperando poder seguir mostrando lo que hacen a toda la comunidad.",
      },
      {
        type: "p",
        text: "Si quieres más información sobre Manos x Chile puedes visitar sus RRSS @manosxchile o enviar WhatsApp al +56 9 9939 3549.",
      },
    ],
  },
];

export function getArticle(slug: string): NewsArticle | undefined {
  return NEWS.find((n) => n.slug === slug);
}
