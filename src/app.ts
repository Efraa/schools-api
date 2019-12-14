import 'reflect-metadata'
import express, { Application } from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import morgan from 'morgan'

import { Routing } from '@http/routes'
import { Configuration } from '@config/Configuration'

class App {
  private app: Application = express()
  private port: number = Configuration.server.port

  constructor () {
    this.middlewares()
    this.routes()
  }

  private routes = () => this.app.use(Routing.build())

  private middlewares(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(bodyParser.json())
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use(compression())
  }

  public listen = async () =>
    await this.app.listen(this.port, () => console.log('API: running on port', this.port))

}

export default new App()
