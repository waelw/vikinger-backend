import { Test, TestingModule } from '@nestjs/testing';
import { EntertainmentController } from './entertainment.controller';
import { EntertainmentService } from './entertainment.service';

describe('EntertainmentController', () => {
  let controller: EntertainmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntertainmentController],
      providers: [EntertainmentService],
    }).compile();

    controller = module.get<EntertainmentController>(EntertainmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
