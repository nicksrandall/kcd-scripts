<div align="center">
<h1>nick-scripts 🛠📦</h1>

<p>CLI toolbox for common scripts for my projects</p>
</div>

<hr />

[![MIT License][license-badge]][license]

## The problem

I do a bunch of open source and want to make it easier to maintain so many
projects.

## This solution

This is a CLI that abstracts away all configuration for my open source projects
for linting, testing, building, and more.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

* [Installation](#installation)
* [Usage](#usage)
  * [Overriding Config](#overriding-config)
* [Inspiration](#inspiration)
* [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev nick-scripts
```

## Usage

This is a CLI and exposes a bin called `nick-scripts`. I don't really plan on
documenting or testing it super duper well because it's really specific to my
needs. You'll find all available scripts in `src/scripts`.

This project actually dogfoods itself. If you look in the `package.json`, you'll
find scripts with `node src {scriptName}`. This serves as an example of some
of the things you can do with `nick-scripts`.

### Overriding Config

Unlike `react-scripts`, `nick-scripts` allows you to specify your own
configuration for things and have that plug directly into the way things work
with `nick-scripts`. There are various ways that it works, but basically if you
want to have your own config for something, just add the configuration and
`nick-scripts` will use that instead of it's own internal config. In addition,
`nick-scripts` exposes its configuration so you can use it and override only
the parts of the config you need to.

This can be a very helpful way to make editor integration work for tools like
ESLint which require project-based ESLint configuration to be present to work.

So, if we were to do this for ESLint, you could create an `.eslintrc` with the
contents of:

```
{"extends": "./node_modules/nick-scripts/eslint.js"}
```

> Note: for now, you'll have to include an `.eslintignore` in your project until
> [this eslint issue is resolved](https://github.com/eslint/eslint/issues/9227).

Or, for `babel`, a `.babelrc` with:

```
{"presets": ["nick-scripts/babel"]}
```

Or, for `jest`:

```javascript
const {jest: jestConfig} = require('nick-scripts/config')
module.exports = Object.assign(jestConfig, {
  // your overrides here

  // for test written in Typescript, add:
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
})
```

> Note: `nick-scripts` intentionally does not merge things for you when you start
> configuring things to make it less magical and more straightforward. Extending
> can take place on your terms. I think this is actually a great way to do this.

## Inspiration

This is inspired by `kcd-scripts`.

## LICENSE

MIT

[license-badge]: https://img.shields.io/npm/l/nick-scripts.svg?style=flat-square
[license]: https://github.com/nicksrandall/nick-scripts/blob/master/LICENSE
