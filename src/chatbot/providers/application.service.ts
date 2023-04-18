import { Injectable } from '@nestjs/common';
import { Application } from '../interfaces/application.interface';
import { PrismaService } from '@/shared/prisma.service';

@Injectable()
export class ApplicationService {
    constructor(private prisma: PrismaService) {}

    async applications() {
        return this.prisma.application.findMany();
    }

    async application(id: string) {
        return this.prisma.application.findUnique({
            where: { applicationId: id },
        });
    }

    async createApplicaiton(application: Application) {
        return this.prisma.application.create({ data: application });
    }
}
