import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    return this.bookRepository.save(createBookDto);
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  findOne(date: Date) {
    return this.bookRepository
      .createQueryBuilder('book')
      .where('DATE(book.depart) = :d', { d: date })
      .getMany();
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookRepository.update(id, updateBookDto);
  }

  async remove(id: string): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
