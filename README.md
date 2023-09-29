# yarn-plugin-rungex

[![Release](https://github.com/krshnpatel/rungex/actions/workflows/release.yml/badge.svg)](https://github.com/krshnpatel/rungex/actions/workflows/release.yml)

A Yarn Berry plugin that can be used to run multiple package.json scripts with Regex.

## Install

```sh
yarn plugin import https://raw.githubusercontent.com/krshnpatel/rungex/main/bundles/@yarnpkg/plugin-rungex.js
```

## Usage

```sh
yarn rungex [-c,--ci] [-p,--parallel] [-sw,--starts-with] [-ew,--ends-with] <scriptMatcher>
```

```sh
yarn rungex --help
```

## Examples

The following part of a `package.json` file will be used as a reference for all examples in this section:

```json
{
    // ... other fields
    "scripts": {
        "build:dev": "build app dev",
        "build:prod": "build app prod",
        "lint": "eslint src/",
        "lint:fix": "eslint src/ --fix",
        "start": "start app",
        "start:dev": "start app dev",
        "taste": "run taste",
        "test:e2e": "run e2e tests",
        "test:integration": "run integration tests",
        "test:unit": "run unit tests",
        "update:local": "update local app"
    }
    // ... more fields
}
```

> **NOTE:** By default, the `rungex` command will always prompt the user whether they want to run the matched scripts or not. However, the prompt can be skipped by passing in the `-c` or the `--ci` option.

### Matching scripts

Run all scripts matching the Regex: `"lint.*"`. The following command will match the `"lint"` and `"lint:fix"` scripts in the `package.json` above.

```sh
yarn rungex "lint.*"
```

Run all scripts that start with `"test"`. The following commands will match the `"test:unit"`, `"test:integration"`, and `"test:e2e"` scripts.

```sh
yarn rungex "test" -sw
# OR
yarn rungex "test" --starts-with
```

Run all scripts that end with `"dev"`. The following commands will match the `"build:dev"` and `"start:dev"` scripts.

```sh
yarn rungex "dev" -ew
# OR
yarn rungex "dev" --ends-with
```

### Other options

> **NOTE:** The following options can be used as standalone options or they can be combined with other options.

Run all matching scripts in parallel that start with `"test"`. The following commands will match the `"test:unit"`, `"test:integration"`, and `"test:e2e"` scripts and then run them in parallel to each other if the user chooses to run the scripts.

```sh
yarn rungex "test" -p -sw
# OR
yarn rungex "test" --parallel --starts-with
```

Run all scripts in parallel without prompting the user for any input. The following commands will match the `"build:dev"` and `"build:prod"` scripts. Both of those scripts will be run in parallel without any user prompt.

```sh
yarn rungex "build" -c -p
# OR
yarn rungex "build" --ci --parallel
```

## Uninstall

```sh
yarn plugin remove @yarnpkg/plugin-rungex
```
