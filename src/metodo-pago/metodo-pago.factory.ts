
interface PaymentMethod {
    pay(amount: number): string;
  }
  
  class CreditCardPayment implements PaymentMethod {
    pay(amount: number): string {
      return `Pagado ${amount} con tarjeta de crédito`;
    }
  }
  
  class PaypalPayment implements PaymentMethod {
    pay(amount: number): string {
      return `Pagado ${amount} con PayPal`;
    }
  }
  
  export class PaymentMethodFactory {
    static createPaymentMethod(method: 'creditCard' | 'paypal'): PaymentMethod {
      switch (method) {
        case 'creditCard':
          return new CreditCardPayment();
        case 'paypal':
          return new PaypalPayment();
        default:
          throw new Error('Invalid payment method');
      }
    }
  }