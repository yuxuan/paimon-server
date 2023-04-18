import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
} from '@nestjs/common';
import { CreateConversationDto } from '../dto/conversation.dto';
import { ConversationService } from '../providers/conversation.service';
import { v4 as uuidv4 } from 'uuid';

@Controller('api/v1/conversations')
export class ConversationController {
    constructor(private readonly conversationService: ConversationService) {}

    @Get()
    async findAllConversations(@Query('applicationId') applicationId: string) {
        const conversations = await this.conversationService.conversations({
            applicationId,
        });
        return {
            data: conversations,
        };
    }

    @Get(':id')
    async findConversation(@Param('id') id: string) {
        const conversation = await this.conversationService.conversation(id);
        return {
            data: conversation,
        };
    }

    @Post()
    async createConversation(
        @Body() createConversationDto: CreateConversationDto,
    ) {
        const conversationId = uuidv4();
        console.log(33, createConversationDto);
        const payload = {
            ...createConversationDto,
            conversationId,
        };
        const created = await this.conversationService.createConversation(
            payload,
        );
        console.log(44, created);
        return {
            data: created,
        };
    }

    @Delete(':id')
    async deleteConversation(@Param('id') id: string) {
        const conversation = await this.conversationService.deleteConversation(
            id,
        );
        return {
            data: conversation,
        };
    }
}
