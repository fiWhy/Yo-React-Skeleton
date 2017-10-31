"use strict";
const Generator = require("yeoman-generator");
const files = require("./files");
const textHelpers = require("../../helpers/text");
const { sourceRoot } = require("../../config/main")();

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.argument("styledName", {
			type: String,
			required: true
		});

		this.option("tagName", {
			type: String,
			default: "div"
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
		const { styledName } = this.options;
		const { componentNamePreparation } = textHelpers;
		this.props = componentNamePreparation(styledName);
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
