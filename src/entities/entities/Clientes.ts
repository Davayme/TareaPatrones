import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Personas } from "./Personas";
import { Facturas } from "./Facturas";

@Index("clientes_pkey", ["idCli"], { unique: true })
@Entity("clientes", { schema: "public" })
export class Clientes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_cli" })
  idCli: number;

  @Column("character varying", { name: "corr_cli", length: 30 })
  corrCli: string;

  @Column("character varying", { name: "dir_cli", length: 30 })
  dirCli: string;

  @Column("date", { name: "fec_reg_cli" })
  fecRegCli: string;

  @Column("boolean", { name: "est_cli", nullable: true, default: () => "true" })
  estCli: boolean | null;

  @ManyToOne(() => Personas, (personas) => personas.clientes)
  @JoinColumn([{ name: "id_per", referencedColumnName: "idPersona" }])
  idPer: Personas;

  @OneToMany(() => Facturas, (facturas) => facturas.idCliFac)
  facturas: Facturas[];
}
