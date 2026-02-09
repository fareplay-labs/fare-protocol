interface ProductsSectionProps {
  title: string;
  products: { title: string; imageSrc: string }[];
}

const FeaturedCard = ({
  title,
  imageSrc,
}: {
  title: string;
  imageSrc: string;
}) => (
  <div className="card">
    <h3>{title}</h3>
    <img src={imageSrc} alt={title} width={200} />
  </div>
);

export const ProductSection = ({ title, products }: ProductsSectionProps) => {
  return (
    <div className="cards-wrapper">
      <h2>{title}</h2>
      <div className="cards-container">
        {products.map((product, idx) => (
          <FeaturedCard
            key={product.title + idx}
            title={product.title}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};
