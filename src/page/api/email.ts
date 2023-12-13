import nodemailer from "nodemailer";
import { createErrorToast } from "../../util/ToatsNotification";

const envVariavelEmail = process.env.NEXT_PUBLIC_EMAILADRESS;
const envVariavelPassword = process.env.NEXT_PUBLIC_EMAILPASSWORD;
const envBaseURL = process.env.NEXT_PUBLIC_BASE_URL;

const transporter = nodemailer.createTransport({
  service: "email-ssl.com.br",
  host: "email-ssl.com.br",
  port: 465,
  secure: true,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: `${envVariavelEmail}`,
    pass: `${envVariavelPassword}`,
  }
});

const mailer = ({ email, name, phone, menssagem, config }: {
  email: string;
  name: string;
  phone: string;
  menssagem?: string;
  config: {
    path: string;
    completo: boolean;
  };
}) => {
  const from = name
    ? `${name} <${envVariavelEmail}>`
    : `Site <${envVariavelEmail}>`;

  const message = {
    from,
    to: "flaviogabrielsr0507@gmail.com",
    subject: `[ Nova leed ] - ${name ? name : ""}`,
    text: "Nova leed capturada do site da prospecta",
    html: `
        <div style="
          width: 100%;
          height: 100%;
          background-color: #f5f5f5;
          padding: 20px;
          box-sizing: border-box;
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          color: #333;
          line-height: 1.5;
          text-align: center;
          ">
          <div style="
          max-width: 600px;
          width: 100%;
          background-color: #0050A9;
          box-sizing: border-box;
          font-size: 26px;
          color: #fff;
          padding: 16px;
          border-radius: 10px 10px 0 0 ;
          border-bottom: 1px solid #ccc;
          ">
Novo Contato
</div>
<div style="
          max-width: 600px;
          width: 100%;
          background-color: #fff;
          box-sizing: border-box;
          padding:  0 50px 20px 50px;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          ">
<div
style="
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px 0;
    "
>
    <div style="width: 50%;">  
        ${name && name !== ""
        ? `<p style="
            margin: 0 0 20px;
            ">
        <strong>Nome:</strong> ${name}
        </p>
        `
        : ""
      }
        
        ${email && email !== ""
        ? `<p style="
            margin: 0 0 20px;
            ">
        <strong>Email:</strong> ${email}
        </p> 
        `
        : ""
      }
        
        ${phone && phone !== ""
        ? `<p style="
            margin: 0 0 20px;
            ">
        <strong>Telefone:</strong> ${phone}
        </p>
        `
        : ""
      }

        ${menssagem && menssagem !== ""
        ? `<p style="
            margin: 0 0 20px;
            ">
        <strong>Menssagem enviado por ${name ? name : ""}:</strong> ${menssagem}
        </p>
        `
        : ""
      }
    </div>

    <div style="width: 50%;">
        <p style="margin: 0 0 20px;">
            <strong>Enviado de:</strong> <span>${envBaseURL}${config.path}</span> 
        </p>
    </div>
</div>

<footer style="
          margin-top: 20px;
          padding-top: 20px;
          width: 100%;
          border-top: 1px solid #eee;
          ">
<p style="
          margin: 0;
          font-size: 12px;
          color: #999;
          ">
</p>
</footer>
</div>
</div>
        `,
    replayTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

// Path: src\pages\api\email.js
export default async (req: { body: { config: any; body: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; }; send: (arg0: unknown) => any; }) => {
  const { config, body } = req.body;

  const { completo } = config;

  if (completo) {
    const { name, email, phone, menssagem } = body;

    if (!email) {
      createErrorToast("Preencha o compo email");
    }
    if (!name) {
      createErrorToast("Preencha o compo nome");
    }
    if (!phone) {
      createErrorToast("Preencha o compo telefone");
    }

    if (!email || !name || !phone) {
      return res.status(422).json({ message: "Preencha todos os campos" });
    }

    const mailerRes = await mailer({
      email,
      name,
      phone,
      menssagem,
      config,
    });


    return res.send(mailerRes);
  }

  const { email, name, phone } = body;

  if (!email) {
    createErrorToast("Preencha o compo email");
  }
  if (!name) {
    createErrorToast("Preencha o compo nome");
  }
  if (!phone) {
    createErrorToast("Preencha o compo telefone");
  }

  if (!email || !name || !phone) {
    return res.status(422).json({ message: "Preencha todos os campos" });
  }

  const mailerRes = await mailer({
    email,
    name,
    phone,
    config,
  });

  return res.send(mailerRes);
};