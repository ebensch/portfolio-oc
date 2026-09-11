export interface Testimonial {
  name: string;
  role: string;
  relation: string;
  quote: string;
  context: string;
}


export const testimonials: Testimonial[] = [
  {
    name: "Emile Loubet",
    role: "Chargé des ressources humaines chez CF2i",
    relation: "Manager",
    quote:
      "Ce fut un réel plaisir de travailler avec Eva. Elle a été très professionnelle et à l'écoute tout au long de son expérience chez nous. Ses prises d'initiatives et ses interventions ont toujours été très pertinentes. Elle s'est parfaitement intégrée dans l'équipe et a su participer pleinement à l'évolution de l'entreprise.",
    context: "Manager dans le cadre de mon alternance en tant qu'Assistante RH et recrutement.",
  },
  {
    name: "Corinne Roard",
    role: "Gérante de DermoFluide",
    relation: "Responsable",
    quote:
      "Nous sommes ravis d'avoir travaillé avec Eva. Elle est toujours disponible et réactive. Elle a grandement participé à l'évolution et la nouvelle vision de notre marque grâce à son rebranding, ses réalisations pour nos stands et sa communication sur les réseaux sociaux. Ce fut et c'est toujours un bonheur de travailler avec elle.",
    context: "Collaboration professionnelle pour la refonte et le rebranding de l'entreprise DermoFluide.",
  },
];
