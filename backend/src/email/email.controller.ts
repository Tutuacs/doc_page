import { Body, Controller, Post } from '@nestjs/common';
import { ContactDto } from './dto/contact.dto';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {

    constructor(private readonly emailService: EmailService) {}

    @Post()
    sendEmail(@Body() body: ContactDto) {
        return this.emailService.sendEmail(body);
    }

}
