const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

const emailTo = "felipe.aguilera.g@gmail.com";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/send-email", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
        <h3>Email enviado desde Formulario SPBox</h3>
        <ul>
          <li>Email: ${req.body.email}</li>
          <li>Nombre:${req.body.name} </li>
          <li>Teléfono:${req.body.tel} </li>
        </ul>
        <h3>Mensaje</h3>
        <p>${req.body.message}</p>
        `;

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "theodore26@ethereal.email", // el email del servicio SMTP que va a utilizar
        pass: "5nvZsmhb6Q88UkuBx5", // la contraseña de dicho SMTP
      },
    });

    console.log("desde server", req.body);
    let mailOptions = {
      from: req.body.email, //quien envia el email
      to: emailTo, // email de destino
      subject: "Enviado desde formulario spbox", //asunto
      text: req.body.message, //contenido
      html: htmlEmail, //html en el email
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        res.json({
          status: "fail",
          error: err.message,
        });
      } else {
        res.json({
          status: "success",
        });
      }
    });
    console.log("Email enviado");
  });
});

// serve PORT running here
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
