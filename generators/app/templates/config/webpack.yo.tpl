var root = require('../helpers/root');

module.exports = (function () {
    var base = root('./'),
        src = root('src'),
        dist = root('dist'),
        html = root("src", "index.html"),
        devPort = 3000,
        extensions = ['.js', '.ts', '.tsx', '.html', 'scss'],
        manifest = root("manifest.json"),
        aliases = {
            containers: root("src/containers"),
            middlewares: root("src/middlewares"),
            utils: root("src/utils"),
            store: root("src/store"),
            config: root("src/config")
        };

    return {
        base: base,
        src: src,
        dist: dist,
        devPort: devPort,
        extensions: extensions,
        html: html,
        manifest: manifest,
        aliases: aliases
    }
})();