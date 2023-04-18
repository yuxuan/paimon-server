import { ApiProperty } from '@nestjs/swagger';

export class CreateConversationDto {
    @ApiProperty()
    applicationId: string;
    conversationId: string;
    prompt?: string;
    user?: string;
}

export class ListConversationsDto {
    @ApiProperty()
    applicationId: string;
}
