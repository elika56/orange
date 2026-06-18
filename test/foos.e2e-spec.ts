import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Foos (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /api/words/horse → 0', () =>
    request(app.getHttpServer())
      .get('/api/words/horse')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBe(0);
      }));

  it('GET /api/words/hello → 1', () =>
    request(app.getHttpServer())
      .get('/api/words/hello')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBe(1);
      }));
});
