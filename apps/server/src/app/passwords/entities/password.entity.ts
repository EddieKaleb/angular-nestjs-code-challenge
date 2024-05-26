import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsString,
  MaxLength,
  IsNotEmpty,
  IsOptional,
  ValidateIf,
} from 'class-validator';
@Entity()
export class Password {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ always: true })
  @MaxLength(200, { always: true })
  @Column()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ always: true })
  @MaxLength(200, { always: true })
  @Column()
  url: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column()
  password: string;

  @ApiProperty()
  @IsString({ always: true })
  @IsOptional()
  @MaxLength(300, { always: true })
  @ValidateIf((object, value) => value !== null)
  @Column()
  imgUrl: string | null;
}
