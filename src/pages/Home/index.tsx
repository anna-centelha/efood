import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RestaurantCard from '../../components/RestaurantCard';
import SideCart from '../../components/SideCart';
import { Hero, RestaurantsList } from './styles';
import capaDeMacarrao from '../../assets/images/capa_de_macarrao.jpg';
import capaDeSushi from '../../assets/images/capa_de_sushi.jpg'


const restaurantsData = [
  {
    id: 1,
    image: capaDeSushi,
    cover: capaDeSushi,
    title: 'Hoshi Sushi Bar',
    description: 'Experiência japonesa inesquecível com sushis e sashimis frescos, tempurás crocantes e pratos quentes tradicionais.',
    rating: 4.8,
    category: 'Japonesa',
    products: []
  },
    {
    id: 2,
    image: capaDeMacarrao,
    cover: capaDeMacarrao,
    title: 'La Dolce Vita Trattoria',
    description:
      'Sabores autênticos da Itália, massas frescas e pizzas no forno a lenha, um pedaço da Itália em sua mesa.',
    rating: 4.5,
    category: 'Italiana',
    products: []
  },
  {
    id: 3,
    image: capaDeMacarrao,
    cover: capaDeMacarrao,
    title: 'La Dolce Vita Trattoria',
    description:
      'Sabores autênticos da Itália, massas frescas e pizzas no forno a lenha, um pedaço da Itália em sua mesa.',
    rating: 4.5,
    category: 'Italiana',
    products: []
  },
  {
    id: 4,
    image: capaDeMacarrao,
    cover: capaDeMacarrao,
    title: 'La Dolce Vita Trattoria',
    description:
      'Sabores autênticos da Itália, massas frescas e pizzas no forno a lenha, um pedaço da Itália em sua mesa.',
    rating: 4.5,
    category: 'Italiana',
    products: []
  },
  {
    id: 5,
    image: capaDeMacarrao,
    cover: capaDeMacarrao,
    title: 'La Dolce Vita Trattoria',
    description:
      'Sabores autênticos da Itália, massas frescas e pizzas no forno a lenha, um pedaço da Itália em sua mesa.',
    rating: 4.5,
    category: 'Italiana',
    products: []
  },
  {
    id: 6,
    image: capaDeMacarrao,
    cover: capaDeMacarrao,
    title: 'La Dolce Vita Trattoria',
    description:
      'Sabores autênticos da Itália, massas frescas e pizzas no forno a lenha, um pedaço da Itália em sua mesa.',
    rating: 4.5,
    category: 'Italiana',
    products: []
  }
];

interface CartItemType {
  id: number;
  name: string;
  price: number;
  image: string;
  uniqueCartId?: number; 
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const handleLearnMoreClick = (clickedRestaurantId: number, category: string) => {
    if (category === 'Italiana') {
      navigate(`/profile/2`);
    } else {
      navigate(`/profile/${clickedRestaurantId}`);
    }
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleRemoveItem = (uniqueCartIdToRemove: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.uniqueCartId !== uniqueCartIdToRemove));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handlePlaceOrder = (addressInfo: any, paymentInfo: any) => {
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Header onCartClick={handleOpenCart} cartItemCount={cartItems.length} isProfilePage={false}>
        <Hero>
          <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
        </Hero>
      </Header>
      <RestaurantsList>
        {restaurantsData.slice(0, 6).map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            image={restaurant.image}
            title={restaurant.title}
            description={restaurant.description}
            rating={restaurant.rating}
            onLearnMoreClick={() => handleLearnMoreClick(restaurant.id, restaurant.category)}
            category={restaurant.category}
          />
        ))}
      </RestaurantsList>
      <SideCart
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        cartItems={cartItems}
        totalPrice={calculateTotalPrice()}
        onRemoveItem={handleRemoveItem}
        onPlaceOrder={handlePlaceOrder}
        onClearCart={clearCart}
      />
      <Footer />
    </>
  );
};

export default Home;