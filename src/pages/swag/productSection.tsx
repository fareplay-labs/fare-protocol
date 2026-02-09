interface ProductsSectionProps {
  title: string;
  products: { id: number; title: string; imageSrc: string; category: string }[];
}

const FeaturedCard = ({
  title,
  imageSrc,
  category
}: {
  title: string;
    imageSrc: string;
  category: string;
}) => (
  <div className="card">
    <h3 id={category}>{title}</h3>
    <img src={imageSrc} alt={title} width={200} />
  </div>
);

export const ProductSection = ({ title, products }: ProductsSectionProps) => {
  return (
    <div className="cards-wrapper">
      <h2>{title}</h2>
      <div className="cards-container">
        {products.map((product) => (
          <FeaturedCard
            key={product.id}
            title={product.title}
            imageSrc={product.imageSrc}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};
