var root = require("../helpers/root");
module.exports = (function() {
    var NODE_ENV = process.env.NODE_ENV;
    var base = root("./"),
        src = root("<%= sourceRoot %>"),
        dist = root("dist"),
        html = root("<%= sourceRoot %>", "index.html"),
        devPort = 3000,
        env = {
            development: NODE_ENV === "development",
            production: NODE_ENV === "production"
        },
        manifest = root("manifest.json"),
        sw = root("<%= sourceRoot %>", "sw.js"),
        favicon = root("<%= sourceRoot %>", "favicon.ico"),
        assets = root("<%= sourceRoot %>", "assets/**/*.*"),
        images = root("images/**/*.*"),
        extensions = [".js", ".ts", ".tsx", ".html", "scss"],
        aliases = {
            containers: root("<%= sourceRoot %>/containers"),
            middlewares: root("<%= sourceRoot %>/middlewares"),
            utils: root("<%= sourceRoot %>/utils"),
            store: root("<%= sourceRoot %>/store"),
            config: root("<%= sourceRoot %>/config")
        };

    return {
        base: base,
        src: src,
        dist: dist,
        devPort: devPort,
        assets: assets,
        images: images,
        extensions: extensions,
        favicon: favicon,
        html: html,
        env: env,
        sw: sw,
        manifest: manifest,
        aliases: aliases
    }
})();