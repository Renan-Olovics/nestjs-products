import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'

export class CreateProductDto {
  @MaxLength(40)
  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  price: number

  @IsNumber()
  @IsNotEmpty()
  stock_number: number

  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  description: string
}
