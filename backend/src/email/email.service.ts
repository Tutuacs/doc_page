import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { env } from 'process';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class EmailService {

    constructor(private readonly mailer: MailerService) {}

    async sendEmail(body: ContactDto) {

        const message = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova Mensagem de Contato</title>
    <style>
        :root {
            --primary: #033147e3;
            --secondary: #EEEEEE;
            --tertiary: #009688;
            --quaternary: #dbe0da;
        }
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: var(--secondary);
        }
        .container {
            max-width: 600px;
            width: 100%;
            margin: auto;
            background: var(--quaternary);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            background: var(--primary);
            padding: 15px;
            color: var(--tertiary);
            border-radius: 10px 10px 0 0;
        }
        .header h1 {
            margin: 0;
            color: var(--tertiary);
        }
        .message {
            padding: 20px;
            background: white;
            border-radius: 5px;
            margin-top: 10px;
        }
        .message p {
            margin: 10px 0;
            color: #333;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Nova Mensagem de Contato</h1>
            <p>Você recebeu uma nova mensagem através do formulário de contato.</p>
        </div>
        <div class="message">
            <p><strong>Nome:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Telefone:</strong> ${body.phone}</p>
            <p><strong>Assunto:</strong> ${body.about}</p>
            <p><strong>Mensagem:</strong> ${body.message}</p>
        </div>
        <div class="footer">
            <p>Atenciosamente, <br> Arthur Silva</p>
        </div>
    </div>
</body>
</html>`

        await this.mailer.sendMail({
            subject: "🩺 Olá Dr. Mais um contato 📨",
            to: env.EMAIL_DR,
            html: message,
        });

        return 
    }

}
