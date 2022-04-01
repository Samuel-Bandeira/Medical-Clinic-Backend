import { Test, TestingModule } from '@nestjs/testing';
import { PatientsResolver } from './patients.resolver';
import { PatientsService } from './patients.service';

describe('PatientsResolver', () => {
  let resolver: PatientsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientsResolver, PatientsService],
    }).compile();

    resolver = module.get<PatientsResolver>(PatientsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
