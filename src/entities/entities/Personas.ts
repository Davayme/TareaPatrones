import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clientes } from "./Clientes";

@Index("personas_pkey", ["idPersona"], { unique: true })
@Entity("personas", { schema: "public" })
export class Personas {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_persona" })
  idPersona: number;

  @Column("character varying", { name: "tipo_identificacion" })
  tipoIdentificacion: string;

  @Column("character varying", { name: "identificacion", length: 13 })
  identificacion: string;

  @Column("character varying", { name: "primer_nombre", length: 20 })
  primerNombre: string;

  @Column("character varying", { name: "segundo_nombre", nullable: true })
  segundoNombre: string | null;

  @Column("character varying", { name: "primer_apellido", length: 20 })
  primerApellido: string;

  @Column("character varying", {
    name: "segundo_apellido",
    nullable: true,
    length: 20,
  })
  segundoApellido: string | null;

  @Column("character varying", {
    name: "nombre_completo",
    nullable: true,
    length: 100,
  })
  nombreCompleto: string | null;

  @Column("date", { name: "fecha_nacimiento" })
  fechaNacimiento: string;

  @Column("character varying", { name: "celular", nullable: true, length: 10 })
  celular: string | null;

  @OneToMany(() => Clientes, (clientes) => clientes.idPer)
  clientes: Clientes[];
}
