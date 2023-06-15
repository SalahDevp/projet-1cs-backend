import wilayas from "../utils/wilayas.json";

export default function generateAITitle(annonce) {
  return `${annonce.categorie} ${annonce.type} ${annonce.commune} ${
    wilayas[annonce.wilaya - 1]
  }`;
}
