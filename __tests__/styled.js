"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var textHelpers = require("../helpers/text");
var mainConfig = require("../config/main");
var testConfig = require("../config/for-test");

describe("generator-react-skeleton:styled", () => {
	const styled = "./container";
	const tagName = "div";
	const { contentFiles, upperCamel, dashed } = testConfig.styled(styled);
	const { sourceRoot } = mainConfig();
	const { readCreatedFile, removeSpaces } = textHelpers;
	let styledCreatedContent;
	beforeAll(() => {
		return helpers
			.run(path.join(__dirname, "../generators/styled"))
			.withArguments([styled])
			.then(dir => {
				styledCreatedContent = removeSpaces(
					readCreatedFile(dir, `${sourceRoot}/${dashed}.tsx`)
				);
			});
	});

	it("creates files", () => {
		assert.file(contentFiles);
	});

	it("creates file with right content", () => {
		const { styledTemplate } = testConfig;

		var styledTemplateontent = styledTemplate(upperCamel, tagName);
		assert.equal(styledCreatedContent, removeSpaces(styledTemplateontent));
	});
});
