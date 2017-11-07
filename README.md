# generator-react-skeleton [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> React16 boilerplate

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-skeleton using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-skeleton
```

Then generate your new project:

```bash
yo react-skeleton
```

## Commands

Creating container with presentation. Optional parameters are: action, reducer, async, route - to configure your container.
```bash
yo react-skeleton:container <path-to-container> --action=<action-name> --reducer=<reducer-name> --route=/<route>--async
```

Creating pure presentation.
```bash
yo react-skeleton:component <path-to-component>
```

Creating pure styled component. Optional parameter is tagName ( default is div ).
```bash
yo react-skeleton:styled <path-to-styled> --tagName=<tag-name>
```

Creating pure action. Optional parameter is async.
```bash
yo react-skeleton:action <path-to-action> --async
```

Creating pure action. Optional parameters are: action ( path to action to connect to reducer; path will be added to import path without modifications ),
actionName ( name of action that will be placed between brackets {} in "import" directive ), async ( flag that will control is this reducer needs to be async ).
```bash
yo react-skeleton:reducer <path-to-reducer> --action=<action-path-from-reducer-folder> --actionName=<action-name> --async
```

All your abstractions will be have path based on source root you pick in start.

## License

MIT [Denis Buryachkovsky](https://github.com/fiWhy)


[npm-image]: https://badge.fury.io/js/generator-react-skeleton.svg
[npm-url]: https://npmjs.org/package/generator-react-skeleton
[travis-image]: https://travis-ci.org//generator-react-skeleton.svg?branch=master
[travis-url]: https://travis-ci.org//generator-react-skeleton
[daviddm-image]: https://david-dm.org//generator-react-skeleton.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-react-skeleton
[coveralls-image]: https://coveralls.io/repos//generator-react-skeleton/badge.svg
[coveralls-url]: https://coveralls.io/r//generator-react-skeleton
