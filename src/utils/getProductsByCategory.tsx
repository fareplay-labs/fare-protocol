import { SwagList } from "../data/swagList";


export const getProductsByCategory = (category: string) =>
  SwagList.filter((item) => item.category === category).map((item, index) => ({
    id:item.id || index,
    title: item.title,
    imageSrc: item.imageSrc,
    category: item.category
  }));