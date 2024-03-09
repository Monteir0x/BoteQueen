import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/createProduct.dto';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return await this.productsService.getProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number): Promise<Product | null> {
    return await this.productsService.getProductById(id);
  }

  @Post()
  async createProduct(@Body() productData: CreateProductDto): Promise<Product> {
    return await this.productsService.createProduct(productData);
  }
}
