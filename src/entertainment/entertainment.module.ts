import { Module } from '@nestjs/common';
import { EntertainmentService } from './entertainment.service';
import { EntertainmentController } from './entertainment.controller';
import { MiddlewareConsumer, NestModule } from '@nestjs/common/interfaces';
import { PaginationMiddleware } from 'src/utils';

@Module({
  controllers: [EntertainmentController],
  providers: [EntertainmentService]
})
export class EntertainmentModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PaginationMiddleware)
      .forRoutes('entertainment');
  }

}
