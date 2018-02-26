module.exports = [
	{
		type: "input",
		name: "projectName",
		message: "What is your project name?",
		default: this.appname
	},
	{
		type: "input",
		name: "projectShortName",
		message: "What is your project short name? (for manifest)",
		default: this.appname
	},
	{
		type: "input",
		name: "projectDescription",
		message: "Project description"
	},
	{
		type: "input",
		name: "devName",
		message: "What is your name?"
	},
	{
		type: "input",
		name: "sourceRoot",
		message: "Source folder name:",
		default: "src",
		store: true
	},
	{
		type: "confirm",
		name: "styledComponents",
		message: "Would you like to use styled-components?",
		default: true,
		store: true
	},
	{
		type: "confirm",
		name: "starterData",
		message: "Would you like to add starter data?",
		default: true
	}
];
