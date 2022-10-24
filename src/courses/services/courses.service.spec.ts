import { Test, TestingModule } from '@nestjs/testing';
import { CRUDCoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CRUDCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CRUDCoursesService],
    }).compile();

    service = module.get<CRUDCoursesService>(CRUDCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
