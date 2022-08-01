import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HeroService } from './hero.service';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @GrpcMethod('HeroProto')
  findOne(data: HeroById): Hero {
    return this.heroService.findOne(data);
  }
}
