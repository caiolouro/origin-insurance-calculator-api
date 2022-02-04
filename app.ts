import express from "express"
import * as http from "http"
import cors from "cors"
import * as winston from "winston"
import * as expressWinston from "express-winston"
import debug from "debug"
import { CommonRoutesConfig } from "./common/common.routes.config"
import { InsuranceRisksRoutes } from "./insurance-risks/insurance-risks.routes.config"

const app: express.Application = express()
const server: http.Server = http.createServer(app)
const routes: Array<CommonRoutesConfig> = []
const debugLog: debug.IDebugger = debug("app")
const port: number = 3000

const loggerOptions: expressWinston.LoggerOptions = {
    // Console logging for development purposes. In production could use files, Sentry, Slack, a database, etc.
	transports: [new winston.transports.Console()],
	format: winston.format.combine(
		winston.format.json(),
		winston.format.prettyPrint(),
		winston.format.colorize({ all: true })
	),
}

routes.push(new InsuranceRisksRoutes(app))

app.use(express.json())
app.use(cors())
app.use(expressWinston.logger(loggerOptions))

app.get("/", (req: express.Request, res: express.Response) =>
	res.status(200).send({ message: 'Health check OK' })
)

server.listen(port, () => console.log(`Server running at http://localhost:${port}`))
