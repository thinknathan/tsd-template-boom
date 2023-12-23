# Defold TypeScript Boom Template

<a href="https://discord.gg/eukcq5m"><img alt="Chat with us!" src="https://img.shields.io/discord/766898804896038942.svg?colorB=7581dc&logo=discord&logoColor=white"></a>

A dev environment for [Defold](https://defold.com/) that transpiles TypeScript into lua using [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

Includes britzl's [boom](https://github.com/britzl/boom/), a game framework built on top of [Defold](https://defold.com/).

This template extends [tsd-template](https://github.com/ts-defold/tsd-template). Use that one if you prefer a minimal setup.

## Features

- Full Lua and Defold API type definitions for TypeScript auto-complete and type checking
- Types for boom
- Eslint config for handling the caveats of TypeScriptToLua and keeping your code correct
  - `yarn lint` or `npm run lint` to run the linter
  - `yarn lintfix` or `npm run lintfix` to allow the linter to auto-fix issues
- Handles script, gui_script, and module exports using familiar ES6 export syntax
- Full boilerplate game project ready to transpile and go
- File watcher via `yarn dev` or `npm run dev` to transpile on save
- Optionally run `yarn buildO1` or `npm run buildO1` to strip source maps, [unfold and propagate constants](https://github.com/thinknathan/tstl-const-propagation)

_You will need to have [Node.js](https://nodejs.org) installed._

## Quick Start

- Use `yarn dev` or `npm run dev` to start a watcher that compiles and emits lua and script when you save
- Use `yarn build` or `npm run build` to just compile your ts, sans watcher

## Installation

1. Fork this template or use [degit](https://www.npmjs.com/package/degit) to download the template locally

```bash
npx degit thinknathan/tsd-template-boom my-game
# or
git clone https://github.com/thinknathan/tsd-template-boom.git my-game
```

2. Initialize

```bash
cd my-game
npm install
# or yarn
```

3. Generate

```bash
npm run build # Transpile the TypeScript files to lua
# or yarn build
# or
npm run dev # Watch for changes and regenerate files on save
# or yarn dev
```

4. Open `app/game.project` in Defold

- Start making games with TypesScript!

<p align="center" class="h4">
  TypeScript :heart: Defold
</p>

## License

MIT

Based on [tsd-template](https://github.com/ts-defold/tsd-template) (Copyright (c) Justin Walsh (@thejustinwalsh)).

Graphics in the `assets` folder are [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/) licensed, from [Kenney](https://kenney.nl/assets).
