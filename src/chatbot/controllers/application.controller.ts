import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateApplicationDto } from '../dto/application.dto';
import { ApplicationService } from '../providers/application.service';
import { v4 as uuidv4 } from 'uuid';

@Controller('api/v1/applications')
export class ApplicationController {
    constructor(private readonly applicationService: ApplicationService) {}

    @Get()
    async findAllApplications() {
        const applications = await this.applicationService.applications();
        return {
            data: applications,
        };
    }

    @Get(':id')
    async findApplication(@Param('id') id: string) {
        const application = await this.applicationService.application(id);
        return {
            data: application,
        };
    }

    @Post()
    createApplication(@Body() createApplicationDto: CreateApplicationDto) {
        const applicationId = uuidv4();
        const payload = {
            ...createApplicationDto,
            applicationId,
        };
        const created = this.applicationService.createApplicaiton(payload);
        return {
            data: created,
        };
    }
}
