import { SwagList } from "../data/swagList";


export const getProductsByCategory = (category: string) =>
  SwagList.filter((item) => item.category === category).map((item) => ({
    title: item.title,
    imageSrc: item.imageSrc,
  }));