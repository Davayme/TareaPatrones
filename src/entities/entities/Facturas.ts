import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DetalleFactura } from "./DetalleFactura";
import { Clientes } from "./Clientes";

@Index("facturas_pkey", ["idFac"], { unique: true })
@Entity("facturas", { schema: "public" })
export class Facturas {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_fac" })
  idFac: number;

  @Column("character varying", { name: "num_fac", length: 10 })
  numFac: string;

  @Column("date", { name: "fec_fac" })
  fecFac: string;

  @Column("date", { name: "fec_cre_fac" })
  fecCreFac: string;

  @Column("date", { name: "fec_aut_fac", nullable: true })
  fecAutFac: string | null;

  @Column("boolean", { name: "est_fac", nullable: true, default: () => "true" })
  estFac: boolean | null;

  @OneToMany(() => DetalleFactura, (detalleFactura) => detalleFactura.idFactura)
  detalleFacturas: DetalleFactura[];

  @ManyToOne(() => Clientes, (clientes) => clientes.facturas)
  @JoinColumn([{ name: "id_cli_fac", referencedColumnName: "idCli" }])
  idCliFac: Clientes;
}
