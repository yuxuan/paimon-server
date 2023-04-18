import { Module } from '@nestjs/common';
import { PrismaModule } from '@/shared/prisma.module';
import { ApplicationService } from './providers/application.service';
import { ApplicationController } from './controllers/application.controller';
import { ConversationService } from './providers/conversation.service';
import { ConversationController } from './controllers/conversation.controller';
import { MessageService } from './providers/message.service';
import { MessageController } from './controllers/message.controller';

@Module({
    imports: [PrismaModule],
    controllers: [
        ApplicationController,
        ConversationController,
        MessageController,
    ],
    providers: [ApplicationService, ConversationService, MessageService],
    exports: [ApplicationService, ConversationService, MessageService],
})
export class ChatbotModule {}
