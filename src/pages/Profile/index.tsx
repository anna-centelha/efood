// src/pages/Profile/index.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Hero, ProductsList } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import Modal from '../../components/Modal';
import SideCart from '../../components/SideCart';
import capaDeMargherita from '../../assets/images/capa_de_margherita.jpg';
import sushiImage from '../../assets/images/sushi.jpg';

const restaurantsData = [
  {
    id: 1,
    image: 'https://cdn.pixabay.com/photo/2017/05/29/18:42:00/sushi-2354275_1280.jpg',
    cover: 'https://cdn.pixabay.com/photo/2017/07/28/19:21:00/sushi-2550993_1280.jpg',
    title: 'Hoshi Sushi Bar',
    description: 'Experiência japonesa inesquecível com sushis e sashimis frescos, tempurás crocantes e pratos quentes tradicionais.',
    rating: 4.8,
    category: 'Japonesa',
    products: [
      { id: 101, name: 'Combinado Sushi (10 peças)', description: 'Seleção de niguiris e uramakis variados com os peixes mais frescos do dia.', price: 85.00, image: sushiImage },
      { id: 102, name: 'Combinado Sushi (10 peças)', description: 'Seleção de niguiris e uramakis variados com os peixes mais frescos do dia.', price: 35.00, image: sushiImage },
      { id: 103, name: 'Combinado Sushi (10 peças)', description: 'Seleção de niguiris e uramakis variados com os peixes mais frescos do dia.', price: 95.00, image: sushiImage },
      { id: 104, name: 'Combinado Sushi (10 peças)', description: 'Seleção de niguiris e uramakis variados com os peixes mais frescos do dia.', price: 40.00, image: sushiImage },
      { id: 105, name: 'Combinado Sushi (10 peças)', description: 'Seleção de niguiris e uramakis variados com os peixes mais frescos do dia.', price: 30.00, image: sushiImage },
      { id: 106, name: 'Combinado Sushi (10 peças)', description: 'Seleção de niguiris e uramakis variados com os peixes mais frescos do dia.', price: 55.00, image: sushiImage },
    ]
  },
  {
    id: 2,
    image: 'https://cdn.pixabay.com/photo/2016/11/18/14:05:00/brick-wall-1834784_960_720.jpg',
    cover: capaDeMargherita,
    title: 'La Dolce Vita Trattoria',
    description: 'Sabores autênticos da Itália, massas frescas e pizzas no forno a lenha, um pedaço da Itália em sua mesa.',
    rating: 4.5,
    category: 'Italiana',
    products: [
      { id: 201, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 202, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 203, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 204, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 205, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 206, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
    ]
  },
  { id: 3, ...{ image: 'https://cdn.pixabay.com/photo/2016/11/18/14:05:00/brick-wall-1834784_960_720.jpg', cover: capaDeMargherita, title: 'La Dolce Vita Trattoria', description: 'Sabores autênticos da Itália, massas frescas e pizzas no forno a lenha, um pedaço da Itália em sua mesa.', rating: 4.5, category: 'Italiana', products: [
      { id: 301, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 302, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 303, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 304, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 305, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 306, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
    ] } },
  { id: 4, ...{ image: 'https://cdn.pixabay.com/photo/2016/11/18/14:05:00/brick-wall-1834784_960_720.jpg', cover: capaDeMargherita, title: 'La Dolce Vita Trattoria', description: 'Sabores autênticos da Itália, massas frescas e pizzas no forno a lenha, um pedaço da Itália em sua mesa.', rating: 4.5, category: 'Italiana', products: [
      { id: 401, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 402, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 403, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 404, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 405, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 406, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
    ] } },
  { id: 5,
    image: 'https://cdn.pixabay.com/photo/2016/11/18/14:05:00/brick-wall-1834784_960_720.jpg',
    cover: capaDeMargherita,
    title: 'La Dolce Vita Trattoria',
    description: 'Sabores autênticos da Itália, massas frescas e pizzas no forno a lenha, um pedaço da Itália em sua mesa.',
    rating: 4.5,
    category: 'Italiana',
    products: [
      { id: 501, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 502, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 503, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 504, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 505, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 506, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
    ]
  },
  { id: 6,
    image: 'https://cdn.pixabay.com/photo/2016/11/18/14:05:00/brick-wall-1834784_960_720.jpg',
    cover: capaDeMargherita,
    title: 'La Dolce Vita Trattoria',
    description: 'Sabores autênticos da Itália, massas frescas e pizzas no forno a lenha, um pedaço da Itália em sua mesa.',
    rating: 4.5,
    category: 'Italiana',
    products: [
      { id: 601, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 602, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 603, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 604, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 605, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
      { id: 606, name: 'Pizza Margherita', description: 'Pizza clássica com molho de tomate, mussarela e manjericão, servida em 2 ou 3 pessoas. Sabor e simplicidade!', price: 60.90, image: capaDeMargherita },
    ]
  },
];


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  serveInfo?: string;
}

interface Restaurant {
  id: number;
  image: string;
  cover: string;
  title: string;
  description: string;
  rating: number;
  category: string;
  products: Product[];
}

interface CartItemType extends Product {
  uniqueCartId?: number;
}

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurantsData.find((r: Restaurant) => r.id === parseInt(id || '0', 10));

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!restaurant) {
      console.error('Restaurante não encontrado ou ID inválido!');
    }
  }, [id, restaurant]);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleAddToCart = (item: Product) => {
    setCartItems((prevItems) => {
      return [...prevItems, { ...(item as CartItemType), uniqueCartId: Date.now() + Math.random() }];
    });
    handleOpenCart();
    setIsModalOpen(false);
  };

  const handleRemoveItem = (uniqueCartIdToRemove: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.uniqueCartId !== uniqueCartIdToRemove));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleFinalizeOrder = (addressInfo: any, paymentInfo: any) => {
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleOpenProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (!restaurant) {
    return <div>Carregando ou Restaurante não encontrado...</div>;
  }

  return (
    <div>
      <Header onCartClick={handleOpenCart} cartItemCount={cartItems.length} isProfilePage={true} />

      <Hero style={{ backgroundImage: `url(${restaurant.cover})` }}>
        <h2>{restaurant.category}</h2>
        <h3>{restaurant.title}</h3>
      </Hero>

      <ProductsList>
        {restaurant.products.slice(0, 6).map((product, index) => (
          <ProductCard
            key={`${product.id}-${index}`}
            id={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            onAddToCart={() => handleOpenProductModal(product)}
          />
        ))}
      </ProductsList>

      <SideCart
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        cartItems={cartItems}
        totalPrice={calculateTotalPrice()}
        onRemoveItem={handleRemoveItem}
        onPlaceOrder={handleFinalizeOrder}
        onClearCart={clearCart}
      />

      {isModalOpen && selectedProduct && (
        <Modal isOpen={isModalOpen} onClose={handleCloseProductModal}>
          <div style={{ display: 'flex', gap: '24px', color: 'white', flexWrap: 'wrap' }}>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '280px', height: '280px', objectFit: 'cover', borderRadius: '8px' }} />
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <p style={{ marginTop: '16px', fontWeight: 'bold' }}>
                Serve: {selectedProduct.serveInfo || '1 a 2 pessoas'}
              </p>
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                style={{
                  backgroundColor: '#FFEBD9',
                  color: '#E66767',
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginTop: '16px'
                }}
              >
                Adicionar ao carrinho - {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedProduct.price)}
              </button>
            </div>
          </div>
        </Modal>
      )}
      <Footer />
    </div>
  );
};

export default Profile;