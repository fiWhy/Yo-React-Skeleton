"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var textHelpers = require("../helpers/text");
var mainConfig = require("../config/main");
var testConfig = require("../config/for-test");

const createReducer = (reducer, options) => {
	const config = testConfig.reducer(reducer, options.async);
	const { dashed } = config;
	const { removeSpaces, readCreatedFile } = textHelpers;
	const { sourceRoot } = mainConfig();
	return helpers
		.run(path.join(__dirname, "../generators/reducer"))
		.withArguments([reducer])
		.withOptions(options)
		.then(dir => {
			const content = removeSpaces(
				readCreatedFile(dir, `${sourceRoot}/${dashed}.reducer.ts`)
			);
			return { config, content };
		});
};

const options = async => ({
	async,
	action: "../../test.action.ts",
	actionName: "TestAction"
});

describe("generator-react-skeleton:reducer", () => {
	const reducer = "./data";
	const defaultReducer = "dataTest";
	const { removeSpaces } = textHelpers;

	it("creates files", done => {
		createReducer(defaultReducer, options(false)).then(({ config: { contentFiles } }) => {
			assert.file(contentFiles);
			done();
		});
	});

	it("creates file with right content with action async", done => {
		const { reducerTemplate } = testConfig;
		const opts = options(true);
		createReducer(reducer, opts).then(({ config, content }) => {
			const reducerContent = removeSpaces(
				reducerTemplate(config.upperCamel, opts.action, opts.actionName, opts.async)
			);
			assert.equal(reducerContent, content);
			done();
		});
	});
});
