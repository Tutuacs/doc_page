"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const process_1 = require("process");
let EmailService = class EmailService {
    constructor(mailer) {
        this.mailer = mailer;
    }
    async sendEmail(body) {
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
</html>`;
        await this.mailer.sendMail({
            subject: "🩺 Olá Dr. Mais um contato 📨",
            to: process_1.env.EMAIL_DR,
            html: message,
        });
        return;
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], EmailService);
//# sourceMappingURL=email.service.js.map