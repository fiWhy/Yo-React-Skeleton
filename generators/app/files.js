module.exports = function({ sourceRoot }) {
	const mainFiles = [
		{ from: "_tsconfig.json", to: "tsconfig.json" },
		{ from: "manifest.json", to: "manifest.json" },
		{ from: "package.json.yo.tpl", to: "package.json" },
		{ from: "_gitignore", to: ".gitignore" },
		{ from: "helpers/*.js", to: "helpers" },
		{ from: "tasks/*.js", to: "tasks" },
		{ from: "custom-typings/*.ts", to: "custom-typings" },

		/** Config files */
		{ from: "config/loaders.yo.tpl", to: "config/loaders.js" },
		{ from: "config/main.yo.tpl", to: "config/main.js" },
		{ from: "config/plugins.yo.tpl", to: "config/plugins.js" },
		{ from: "config/webpack.dev.yo.tpl", to: "config/webpack.dev.js" },
		{ from: "config/webpack.yo.tpl", to: "config/webpack.js" },

		{ from: "src/containers/app/**/*.tsx", to: `${sourceRoot}/containers/app` },
		{ from: "src/containers/app/**/*.ts", to: `${sourceRoot}/containers/app` },
		{ from: "src/config/*.tsx", to: `${sourceRoot}/config` },
		{ from: "src/middlewares/*.ts", to: `${sourceRoot}/middlewares` },
		{ from: "src/store/*.ts", to: `${sourceRoot}/store` },
		{ from: "src/utils/**/*.ts", to: `${sourceRoot}/utils` },
		{ from: "src/index.html", to: `${sourceRoot}/index.html` },
		{ from: "src/config/bootstrap.yo.tpl", to: `${sourceRoot}/config/bootstrap.ts` },
		{ from: "src/app.tsx", to: `${sourceRoot}/app.tsx` },
		{ from: "src/vendor.ts", to: `${sourceRoot}/vendor.ts` },
		{ from: "src/sw.yo.tpl", to: `${sourceRoot}/sw.js` },
		{ from: "src/styles.scss", to: `${sourceRoot}/styles.scss` }
	];

	const assets = [
		{ from: "images/*.png", to: "images" },
		{ from: "src/favicon.ico", to: `${sourceRoot}/src/favicon.ico` }
	];

	return { mainFiles, assets };
};
