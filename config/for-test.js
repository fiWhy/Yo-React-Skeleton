const textHelpers = require("../helpers/text");
const foldersConfig = require("../helpers/folders");
const mainConfig = require("./main");
const app = () => {
	const { sourceRoot } = mainConfig();
	return {
		projectName: "Test React, Typescript, Webpack",
		projectKeywords: "Raccoon",
		projectDescription: "Hello there, Raccoon!",
		projectDev: "Raccoon",
		contentFiles: [
			`${sourceRoot}/components/dashboard/presentations/dashboard.presentation.tsx`,
			`${sourceRoot}/components/home/presentations/home.presentation.tsx`
		],

		withAdditionalFiles: ["package.json", ".gitignore", "tsconfig.json"],
		withContentFolders: [
			`${sourceRoot}/components/dashboard`,
			`${sourceRoot}/components/home`
		]
	};
};

module.exports.app = app;

module.exports.component = function({ component, options }) {
	const { sourceRoot } = mainConfig();
	let preparations = textHelpers.componentNamePreparation(component);
	const { dashed } = preparations;

	const componentPath = `${foldersConfig.detectPath(sourceRoot, component)}/${dashed}`;

	let contentFiles = [`${componentPath}/index.tsx`];

	if (options && options.route) {
		contentFiles = contentFiles.concat([`${componentPath}/providers/route.provider.ts`]);
	}

	if (options && options.action) {
		contentFiles = contentFiles.concat([
			`${componentPath}/providers/reducer.provider.ts`,
			`${componentPath}/actions/${options.action}.action.ts`
		]);
	}

	if (options && options.reducer) {
		contentFiles = contentFiles.concat([
			`${componentPath}/reducers/${options.reducer}.reducer.ts`
		]);
	}

	return Object.assign(
		{
			contentFiles
		},
		preparations
	);
};

module.exports.presentation = component => {
	const { sourceRoot } = mainConfig();
	let preparations = textHelpers.componentNamePreparation(component);
	const { dashed } = preparations;
	const componentPath = `${foldersConfig.detectPath(sourceRoot, component)}`;

	let contentFiles = [
		`${componentPath}/${dashed}.presentation.tsx`,
		`${componentPath}/${dashed}.presentation.test.tsx`
	];

	return Object.assign(
		{
			contentFiles
		},
		preparations
	);
};

module.exports.presentationTemplate = function(withStyledComponents, component) {
	return `import * as React from "react";
    
    const ${component}Presentation = () => (
          <div>${component} works!</div>
    );
    
    export default ${component}Presentation;
    `;
};
