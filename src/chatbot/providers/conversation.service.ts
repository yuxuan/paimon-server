import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/prisma.service';
import {
    CreateConversationDto,
    ListConversationsDto,
} from '../dto/conversation.dto';

@Injectable()
export class ConversationService {
    constructor(private prisma: PrismaService) {}

    async conversations({ applicationId }: ListConversationsDto) {
        return this.prisma.conversation.findMany({
            where: { applicationId },
        });
    }

    async conversation(id: string) {
        return this.prisma.conversation.findUnique({
            where: { conversationId: id },
        });
    }

    async createConversation(conversation: CreateConversationDto) {
        return this.prisma.conversation.create({ data: conversation });
    }

    async deleteConversation(id: string) {
        return this.prisma.conversation.delete({
            where: { conversationId: id },
        });
    }
}
