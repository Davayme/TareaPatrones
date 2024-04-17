interface PaymentMethod {
  pay(amount: number): string;
  calculateCommission(amount: number): number;
}

class CreditCardPayment implements PaymentMethod {
  private commissionRate = 0.02; // 2% de comisión

  pay(amount: number): string {
    return `Pagado ${amount} con tarjeta de crédito`;
  }

  calculateCommission(amount: number): number {
    return amount * this.commissionRate;
  }
}

class PaypalPayment implements PaymentMethod {
  private commissionRate = 0.03; // 3% de comisión

  pay(amount: number): string {
    return `Pagado ${amount} con PayPal`;
  }

  calculateCommission(amount: number): number {
    return amount * this.commissionRate;
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