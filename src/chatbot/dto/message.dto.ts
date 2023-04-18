import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../interfaces/message.interface';

export class CreateMessageDto {
    @ApiProperty()
    conversationId: string;
    messageId: string;
    role: Role;
    content: string;
}

export class ListMessagesDto {
    @ApiProperty()
    conversationId: string;
}
