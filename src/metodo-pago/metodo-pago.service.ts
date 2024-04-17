import { Injectable } from '@nestjs/common';
import { CreateMetodoPagoDto } from './dto/create-metodo-pago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodo-pago.dto';
import { PaymentMethodFactory } from './metodo-pago.factory';

@Injectable()
export class MetodoPagoService {
  
  processPayment(method: 'creditCard' | 'paypal', amount: number) {
    const paymentMethod = PaymentMethodFactory.createPaymentMethod(method);
    return paymentMethod.pay(amount);
  }
  create(createMetodoPagoDto: CreateMetodoPagoDto) {
    return 'This action adds a new metodoPago';
  }

  findAll() {
    return `This action returns all metodoPago`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metodoPago`;
  }

  update(id: number, updateMetodoPagoDto: UpdateMetodoPagoDto) {
    return `This action updates a #${id} metodoPago`;
  }

  remove(id: number) {
    return `This action removes a #${id} metodoPago`;
  }
}


@Injectable()
export class PaymentService {
  processPayment(method: 'creditCard' | 'paypal', amount: number) {
    const paymentMethod = PaymentMethodFactory.createPaymentMethod(method);
    return paymentMethod.pay(amount);
  }
}