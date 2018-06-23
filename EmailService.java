public class EmailService
{
    private JavaMailSender mailsender;

    @AutoWired
    public EmailService(JavaMailSender mailsender)
    {
        this.mailsender=mailsender;
    }
    @Async
    public void sendEmail(SimpleMailMessage email)
    {
        mailsender.send(email);
    }
}