"use strict";
const Generator = require("yeoman-generator");
const yosay = require("yosay");
const files = require("./files");
const prompts = require("./prompts");
const textHelpers = require("../../helpers/text");

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.appname = "React boilerplate";
	}

	prompting() {
		// Have Yeoman greet the user.
		this.log(yosay("Welcome to react16 generator!"));

		return this.prompt(prompts).then(props => {
			// To access props later use this.props.someAnswer;
			this.config.set("sourceRoot", props.sourceRoot);
			this.props = props;
		});
	}

	generateStarterData() {
		const { starterData, styledComponents } = this.props;
		const options = route => ({
			route,
			redux: true,
			action: "data",
			reducer: "data"
		});
		if (starterData) {
			this.composeWith(
				require.resolve("../container"),
				Object.assign(
					{
						arguments: ["containers/dashboard"]
					},
					options("/")
				)
			);
		}

		if (styledComponents) {
			this.composeWith(
				require.resolve("../styled"),
				Object.assign({
					arguments: ["styled/container"]
				})
			);
		}
	}

	conformProps() {
		const { projectKeywords, projectName } = this.props;
		const { toDashCase, removeSpaces } = textHelpers;
		this.props.projectKeywords = projectKeywords ? projectKeywords.split(",") : [];
		this.props.packageName = toDashCase(removeSpaces(projectName));
	}

	writing() {
		const { mainFiles, assets } = files(Object.assign(this.props, this.config.getAll()));
		mainFiles.forEach(file => {
			this.fs.copyTpl(
				this.templatePath(file.from),
				this.destinationPath(file.to),
				this.props
			);
		});

		assets.forEach(file => {
			this.fs.copy(this.templatePath(file.from), this.destinationPath(file.to));
		});
	}

	install() {
		this.installDependencies();
	}
};
