import { Injectable } from '@nestjs/common';
import { Message } from '../interfaces/message.interface';
import { PrismaService } from '@/shared/prisma.service';

@Injectable()
export class MessageService {
    constructor(private prisma: PrismaService) {}

    async messages({ conversationId }) {
        return this.prisma.message.findMany({
            where: { conversationId },
        });
    }

    async message(id: string) {
        return this.prisma.message.findUnique({
            where: { messageId: id },
        });
    }

    async createMessage(message: Message) {
        return this.prisma.message.create({ data: message });
    }
}
