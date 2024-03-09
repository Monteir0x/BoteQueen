import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

import { CreateProductDto } from './dto/createProduct.dto';
import { Prisma, Product } from '@prisma/client'; // Import Prisma for type checking

@Injectable()
export class ProductsService {
  getProducts():
    | {
        id: number;
        name: string;
        price: Prisma.Decimal;
        value: Prisma.Decimal;
        amount: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
      }[]
    | PromiseLike<
        {
          id: number;
          name: string;
          price: Prisma.Decimal;
          value: Prisma.Decimal;
          amount: number;
          createdAt: Date;
          updatedAt: Date;
          categoryId: number;
        }[]
      > {
    throw new Error('Method not implemented.');
  }
  getProductById(id: number):
    | {
        id: number;
        name: string;
        price: Prisma.Decimal;
        value: Prisma.Decimal;
        amount: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
      }
    | PromiseLike<{
        id: number;
        name: string;
        price: Prisma.Decimal;
        value: Prisma.Decimal;
        amount: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
      }> {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: DatabaseService) {}

  async createProduct(product: CreateProductDto): Promise<Product> {
    const data = {
      ...product,
      createdAt: new Date(),
    };
    delete data.categoryId;
    return await this.prisma.product.create({ data: product });
  }
}
