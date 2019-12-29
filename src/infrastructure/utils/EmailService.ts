import nodemailer, { Transporter, SendMailOptions } from 'nodemailer'
import { Configuration } from '@config/Configuration'
import handlebars from 'handlebars'
import fs from 'fs'

class EmailService {
  private transporter: Transporter

  constructor () {
    this.setTransporter()
  }

  private async setTransporter (): Promise<Transporter>  {
    const { nodemailer : nodemailerConfig } = Configuration
    const { auth : nodemailerAuth } = nodemailerConfig
    // Create Transport
    this.transporter = nodemailer.createTransport({
      // @ts-ignore
      host: nodemailerConfig.host,
      port: nodemailerConfig.port || 587,
      auth: {
        user: nodemailerAuth.user,
        pass: nodemailerAuth.pass,
      }
    })
    return this.transporter
  }

  public async build(props: {
    to: string,
    subject: string,
    template: string
  }, data: {}) {
    const { from } = Configuration.nodemailer
    const { to, subject, template } = props
    const templateFile = fs.readFileSync(`src/templates/${template}.html`, 'utf-8')
    const html = handlebars.compile(templateFile)(data)
    const message: SendMailOptions = {
      from,
      to,
      subject,
      html,
    }

    const send = await this.transporter.sendMail(message)
    if (send)
      return 'The email has been sent successfully.'
  }
}

export default new EmailService()
