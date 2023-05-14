import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateMessageDto } from '../dto/message.dto';
import { MessageService } from '../providers/message.service';
import { v4 as uuidv4 } from 'uuid';

@Controller('api/v1/messages')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Get()
    async findAllMessages(@Query('conversationId') conversationId: string) {
        const messages = await this.messageService.messages({
            conversationId,
        });
        return {
            data: messages,
        };
    }

    @Get(':id')
    async findMessage(@Param('id') id: string) {
        const message = await this.messageService.message(id);
        return {
            data: message,
        };
    }

    @Post()
    async createMessage(@Body() createMessageDto: CreateMessageDto) {
        const messageId = uuidv4();
        const payload = {
            ...createMessageDto,
            messageId,
        };
        const created = await this.messageService.createMessage(payload);
        return {
            data: created,
        };
    }
}
