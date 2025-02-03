import { MailerService } from '@nestjs-modules/mailer';
import { ContactDto } from './dto/contact.dto';
export declare class EmailService {
    private readonly mailer;
    constructor(mailer: MailerService);
    sendEmail(body: ContactDto): Promise<void>;
}
