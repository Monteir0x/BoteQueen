import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  value: number;

  @IsNumber()
  amount: number;

  @IsDate()
  createdAt: Date;

  @IsNumber()
  categoryId: number;
}
