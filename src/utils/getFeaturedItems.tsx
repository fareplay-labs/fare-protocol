import { SwagList } from "../data/swagList";

export const getFeaturedItems = () =>
  SwagList.filter((item) => item.featured).map((item, index) => ({
    id: item.id || index,
    title: item.title,
    imageSrc: item.imageSrc,
    category: item.category
  }));
