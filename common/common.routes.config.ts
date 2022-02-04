import express from "express"
export abstract class CommonRoutesConfig {
	app: express.Application
	name: string // TODO: check how to use for debugging purposes

	constructor(app: express.Application, name: string) {
		this.app = app
		this.name = name
		this.configureRoutes()
	}

	abstract configureRoutes(): express.Application
}
