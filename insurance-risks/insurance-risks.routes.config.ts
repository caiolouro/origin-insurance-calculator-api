import { CommonRoutesConfig } from "../common/common.routes.config"
import express from "express"

export class InsuranceRisksRoutes extends CommonRoutesConfig {
	constructor(app: express.Application) {
		super(app, "InsuranceRisksRoutes")
	}

	configureRoutes(): express.Application {
		this.app
			.route(`/insurance-risks`)
			.post((req: express.Request, res: express.Response) => {
				res.status(200).send(`Post to insurance-risks response`)
			})

		return this.app
	}
}
