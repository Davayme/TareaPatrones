import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Facturas } from "./Facturas";
import { Productos } from "./Productos";

@Index("detalle_factura_pkey", ["idDetalleFactura"], { unique: true })
@Entity("detalle_factura", { schema: "public" })
export class DetalleFactura {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_detalle_factura" })
  idDetalleFactura: number;

  @Column("integer", { name: "cantidad" })
  cantidad: number;

  @Column("money", { name: "precio" })
  precio: string;

  @ManyToOne(() => Facturas, (facturas) => facturas.detalleFacturas)
  @JoinColumn([{ name: "id_factura", referencedColumnName: "idFac" }])
  idFactura: Facturas;

  @ManyToOne(() => Productos, (productos) => productos.detalleFacturas)
  @JoinColumn([{ name: "id_producto", referencedColumnName: "idProducto" }])
  idProducto: Productos;
}
