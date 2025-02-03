import { ContactDto } from './dto/contact.dto';
import { EmailService } from './email.service';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendEmail(body: ContactDto): Promise<void>;
}
