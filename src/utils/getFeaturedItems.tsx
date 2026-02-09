import { SwagList } from "../data/swagList";

export const getFeaturedItems = () =>
  SwagList.filter((item) => item.featured).map((item) => ({
    title: item.title,
    imageSrc: item.imageSrc,
  }));
