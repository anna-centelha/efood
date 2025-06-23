
import React from 'react';
import { Card } from './styles'; 

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  onAddToCart: (item: { id: number; name: string; price: number; image: string }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, name, description, price, onAddToCart }) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);

  const getDescription = (text: string) => {
    if (text.length > 90) {
      return text.slice(0, 87) + '...';
    }
    return text;
  }

  return (
    <Card> {}
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{getDescription(description)}</p>
      <button onClick={() => onAddToCart({ id, name, price, image })}>
        Adicionar ao carrinho - {formattedPrice}
      </button>
    </Card>
  );
};

export default ProductCard;