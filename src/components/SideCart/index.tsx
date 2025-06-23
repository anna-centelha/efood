
import React, { useState } from 'react';
import {
  Overlay,
  CartContainer,
  CloseButton,
  CartItem,
  TotalPrice,
  Button,
  FormContainer,
  FormGroup,
  ConfirmationMessage
} from './styles';

interface CartItemType {
  id: number;
  name: string;
  price: number;
  image: string;
  uniqueCartId?: number;
}

interface SideCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItemType[];
  totalPrice: number;
  onRemoveItem: (uniqueCartIdToRemove: number) => void;
  onPlaceOrder: (addressInfo: { address: string; city: string; zipCode: string; number: string; complement: string }, paymentInfo: { cardName: string; cardNumber: string; cvv: string; expiresMonth: string; expiresYear: string }) => void;
  onClearCart: () => void;
}

const SideCart: React.FC<SideCartProps> = ({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  onRemoveItem,
  onPlaceOrder,
  onClearCart,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [addressInfo, setAddressInfo] = useState({
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    cvv: '',
    expiresMonth: '',
    expiresYear: '',
  });

  const [currentOrderId, setCurrentOrderId] = useState('');

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = () => {
    if (cartItems.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }
    onPlaceOrder(addressInfo, paymentInfo);

    const newOrderId = `EB${Math.floor(Math.random() * 1000000)}`;
    setCurrentOrderId(newOrderId);

    setCurrentStep(4);

    onClearCart();
    setAddressInfo({ address: '', city: '', zipCode: '', number: '', complement: '' });
    setPaymentInfo({ cardName: '', cardNumber: '', cvv: '', expiresMonth: '', expiresYear: '' });
  };

  const handleCloseConfirmationAndCart = () => {
    onClose();
    setCurrentStep(1);
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <CartContainer>
        <CloseButton onClick={handleCloseConfirmationAndCart}>&times;</CloseButton>

        {currentStep === 1 && (
          <>
            {cartItems.length === 0 ? (
              <p>O carrinho está vazio.</p>
            ) : (
              <>
                <ul>
                  {cartItems.map((item) => (
                    <CartItem key={item.uniqueCartId}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h3>{item.name}</h3>
                        <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</span>
                      </div>
                      <button
                        onClick={() => item.uniqueCartId && onRemoveItem(item.uniqueCartId)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#fff',
                          cursor: 'pointer',
                          fontSize: '14px',
                          textDecoration: 'underline',
                          marginLeft: 'auto'
                        }}
                      >
                        Remover
                      </button>
                    </CartItem>
                  ))}
                </ul>
                <TotalPrice>
                  <span>Valor total</span>
                  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</span>
                </TotalPrice>
                <Button onClick={handleNextStep}>Continuar com a entrega</Button>
              </>
            )}
          </>
        )}

        {currentStep === 2 && (
          <FormContainer>
            <h3>Entrega</h3>
            <FormGroup>
              <label htmlFor="address">Endereço</label>
              <input type="text" id="address" name="address" value={addressInfo.address} onChange={handleAddressChange} required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="city">Cidade</label>
              <input type="text" id="city" name="city" value={addressInfo.city} onChange={handleAddressChange} required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="zipCode">CEP</label>
              <input type="text" id="zipCode" name="zipCode" value={addressInfo.zipCode} onChange={handleAddressChange} required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="number">Número</label>
              <input type="text" id="number" name="number" value={addressInfo.number} onChange={handleAddressChange} required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input type="text" id="complement" name="complement" value={addressInfo.complement} onChange={handleAddressChange} />
            </FormGroup>
            <Button onClick={handleNextStep}>Continuar com o pagamento</Button>
            <Button onClick={handlePrevStep} style={{ backgroundColor: '#ccc', marginTop: '8px' }}>Voltar para o carrinho</Button>
          </FormContainer>
        )}

        {currentStep === 3 && (
          <FormContainer>
            <h3>Pagamento</h3>
            <FormGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input type="text" id="cardName" name="cardName" value={paymentInfo.cardName} onChange={handlePaymentChange} required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input type="text" id="cardNumber" name="cardNumber" value={paymentInfo.cardNumber} onChange={handlePaymentChange} required />
            </FormGroup>
            <FormGroup style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" value={paymentInfo.cvv} onChange={handlePaymentChange} required />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="expiresMonth">Mês de Expiração</label>
                <input type="text" id="expiresMonth" name="expiresMonth" value={paymentInfo.expiresMonth} onChange={handlePaymentChange} placeholder="MM" required />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="expiresYear">Ano de Expiração</label>
                <input type="text" id="expiresYear" name="expiresYear" value={paymentInfo.expiresYear} onChange={handlePaymentChange} placeholder="AAAA" required />
              </div>
            </FormGroup>
            <Button onClick={handleSubmitOrder}>Finalizar Pedido</Button>
            <Button onClick={handlePrevStep} style={{ backgroundColor: '#ccc', marginTop: '8px' }}>Voltar para a entrega</Button>
          </FormContainer>
        )}

        {currentStep === 4 && (
          <ConfirmationMessage>
            <h3>Pedido realizado - {currentOrderId}</h3>
            <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
            <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
            <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
            <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
            <Button onClick={handleCloseConfirmationAndCart}>Concluir</Button>
          </ConfirmationMessage>
        )}
      </CartContainer>
    </Overlay>
  );
};

export default SideCart;