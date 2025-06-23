import React from 'react';
import { Card, CardHeader, Rating, Description, Button } from './styles';
import estrelaIcon from '../../assets/images/estrela.png'; 

interface RestaurantCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  rating: number;
  onLearnMoreClick: (id: number, category: string) => void;
  category: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  image,
  title,
  description,
  rating,
  onLearnMoreClick,
  category,
}) => {
  const getShortDescription = (text: string) => {
    const maxChars = 150;
    if (text.length > maxChars) {
      return text.substring(0, maxChars) + '...';
    }
    return text;
  };

  return (
    <Card>
      <img src={image} alt={title} />
      <CardHeader>
        <h3>{title}</h3>
        <Rating>
          <span>{rating}</span>
          <img src={estrelaIcon} alt="Estrela" />
        </Rating>
      </CardHeader>
      <Description>{getShortDescription(description)}</Description>
      <Button onClick={() => onLearnMoreClick(id, category)}>Saiba mais</Button>
    </Card>
  );
};

export default RestaurantCard;