import {PrismaClient} from '@prisma/client';

class PrismaRepository {
  private static INSTANCE: PrismaClient;

  public static getInstance(): PrismaClient {
    if (!PrismaRepository.INSTANCE) {
      PrismaRepository.INSTANCE = new PrismaClient();
    }
    return PrismaRepository.INSTANCE;
  }
}

export default PrismaRepository;
