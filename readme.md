# phaser-electron-typescript-parcel

A minimal template with the following things.

- [Phaser](https://phaser.io/) 🕹️ Desktop and Mobile HTML5 game framework
- [Electron](https://electronjs.org/) ⚛️ Build cross platform desktop apps with JavaScript, HTML, and CSS
- [Parcel](https://github.com/parcel-bundler/parcel) 📦 Blazing fast, zero configuration web application bundler
- [TypeScript](https://www.typescriptlang.org/) ⌨️ is a typed superset of JavaScript that compiles to plain JavaScript.

## Installation

* `git@github.com:distantcam/phaser-electron-typescript-parcel.git`
* `cd phaser-electron-typescript-parcel`
* `yarn`

## Usage

### Development mode
Run these commands to start dev server and Electron app
``` bash
# Parcel bundles the code and runs dev server
$ yarn dev

# Run the electron app which uses local dev server
$ yarn start-dev
```

### Production mode and packaging app
Run this command to bundle code in production mode
``` bash
# Parcel bundle code once
$ yarn build

# Create executables
$ yarn dist
```