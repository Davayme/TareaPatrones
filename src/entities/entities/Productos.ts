import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DetalleFactura } from "./DetalleFactura";

@Index("productos_pkey", ["idProducto"], { unique: true })
@Entity("productos", { schema: "public" })
export class Productos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_producto" })
  idProducto: number;

  @Column("character varying", { name: "codigo", length: 20 })
  codigo: string;

  @Column("character varying", { name: "nombre", length: 30 })
  nombre: string;

  @Column("character varying", { name: "marca", length: 30 })
  marca: string;

  @Column("money", { name: "precio" })
  precio: string;

  @Column("integer", { name: "cantidad" })
  cantidad: number;

  @Column("character varying", { name: "unidad_medida", length: 5 })
  unidadMedida: string;

  @Column("timestamp without time zone", {
    name: "fecha_registro",
    default: () => "now()",
  })
  fechaRegistro: Date;

  @Column("boolean", { name: "estado", default: () => "true" })
  estado: boolean;

  @OneToMany(
    () => DetalleFactura,
    (detalleFactura) => detalleFactura.idProducto
  )
  detalleFacturas: DetalleFactura[];
}
