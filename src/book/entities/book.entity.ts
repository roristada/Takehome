import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  trip_type: string;

  @Column()
  depart: Date;

  @Column()
  arrive: Date;

  @Column()
  adult: number;

  @Column()
  children: number;

  @Column()
  infrants: number;
}
