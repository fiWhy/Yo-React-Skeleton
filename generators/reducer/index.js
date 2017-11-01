"use strict";
const Generator = require("yeoman-generator");
const files = require("./files");
const textHelpers = require("../../helpers/text");
const { sourceRoot } = require("../../config/main")();

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.argument("reducer", {
			type: String,
			required: true
		})
			.option("action", {
				type: String,
				required: true
			})
			.option("actionName", {
				type: String,
				required: true
			})
			.option("async", {
				type: Boolean
			});

		this.mergedConfig = Object.assign(
			{
				sourceRoot
			},
			this.config.getAll()
		);

		this.argumentsHelp();
	}

	initializing() {
		const { componentNamePreparation } = textHelpers;
		const { reducer } = this.options;
		this.props = componentNamePreparation(reducer);
	}

	writing() {
		files(
			Object.assign(this.props, this.mergedConfig, this.options, this.config.getAll())
		).forEach(file => {
			this.fs.copyTpl(
				this.templatePath(file.from),
				this.destinationPath(file.to),
				this.props
			);
		});
	}
};
