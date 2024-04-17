import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetodoPagoService } from './metodo-pago.service';
import { CreateMetodoPagoDto } from './dto/create-metodo-pago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodo-pago.dto';

@Controller('metodo-pago')
export class MetodoPagoController {
  constructor(private readonly metodoPagoService: MetodoPagoService) {}

  @Post()
  processPayment(@Body('method') method: 'creditCard' | 'paypal', @Body('amount') amount: number) {
    return this.metodoPagoService.processPayment(method, amount);
  }
  @Get()
  findAll() {
    return this.metodoPagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metodoPagoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetodoPagoDto: UpdateMetodoPagoDto) {
    return this.metodoPagoService.update(+id, updateMetodoPagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metodoPagoService.remove(+id);
  }
}
