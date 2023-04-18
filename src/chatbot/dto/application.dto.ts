import { ApiProperty } from '@nestjs/swagger';

export class CreateApplicationDto {
    @ApiProperty()
    accessToken!: string;
    description?: string;
    type?: string;
}
