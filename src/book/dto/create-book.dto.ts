export class CreateBookDto {
  id: number;

  fullname: string;

  from: string;

  to: string;

  trip_type: string;

  depart: Date;

  arrive: Date;

  adult: number;

  children: number;

  infrants: number;
}
