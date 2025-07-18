require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Por favor, preencha todos os campos.' });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    let mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Contato do portfólio: ${name}`,
      text: message,
      html: `<p>${message}</p><p>De: ${name} - ${email}</p>`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email enviado com sucesso!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao enviar email.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
