/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-rungex",
factory: function (require) {
var plugin = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default
  });

  // src/rungex.ts
  var import_clipanion = __require("clipanion");
  var import_core = __require("@yarnpkg/core");

  // src/utils/readlineSync.ts
  var import_readline = __require("readline");
  var ReadlineSync = class {
    constructor(options) {
      this.readlineInterface = (0, import_readline.createInterface)(options);
    }
    askQuestion(question) {
      return new Promise((resolve) => {
        this.readlineInterface.pause();
        this.readlineInterface.question(question, (answer) => {
          resolve({ answer });
          this.readlineInterface.close();
        });
      });
    }
  };

  // src/rungex.ts
  var import_shell = __require("@yarnpkg/shell");
  var COMMAND_NAME = "rungex";
  var COMMAND_USAGE = {
    description: "Run multiple package scripts using Regex.",
    details: "This command will print a nice message.",
    examples: [["Add two numbers together", "yarn addition 42 10"]]
  };
  var RungexCommand = class extends import_clipanion.Command {
    constructor() {
      super(...arguments);
      this.scriptMatcher = import_clipanion.Option.String({ required: true });
      this.ci = import_clipanion.Option.Boolean("-c,--ci", false);
      this.parallel = import_clipanion.Option.Boolean("-p,--parallel", false);
      this.startsWith = import_clipanion.Option.Boolean("-sw,--starts-with", false);
      this.endsWith = import_clipanion.Option.Boolean("-ew,--ends-with", false);
      this.matchedScripts = [];
    }
    async execute() {
      this.validate();
      const exitCode = await this.getMatchingScripts();
      if (exitCode !== -1)
        return exitCode;
      if (this.ci) {
        return await this.runMatchedScripts();
      }
      return await this.confirm();
    }
    validate() {
      if (this.startsWith && this.endsWith) {
        throw new import_clipanion.UsageError(
          'Invalid option schema: mutually exclusive properties "startsWith", "endsWith"'
        );
      }
    }
    async getMatchingScripts() {
      const { scripts } = await import_core.Manifest.fromFile(import_core.Manifest.fileName);
      if (scripts.size === 0) {
        this.context.stdout.write(
          `There are no scripts defined in ${import_core.Manifest.fileName}.
`
        );
        return 0;
      }
      let matchedScriptsText = "";
      for (const script of scripts.keys()) {
        let matched = false;
        if (this.startsWith) {
          matched = script.startsWith(this.scriptMatcher);
        } else if (this.endsWith) {
          matched = script.endsWith(this.scriptMatcher);
        } else {
          matched = !!script.match(this.scriptMatcher)?.length;
        }
        if (matched) {
          const fullScript = `yarn ${script}`;
          this.matchedScripts.push(fullScript);
          matchedScriptsText += `-> "${fullScript}"
`;
        }
      }
      if (this.matchedScripts.length === 0) {
        this.context.stdout.write(
          "There were no matched scripts to run.\n"
        );
        return 0;
      }
      this.context.stdout.write("Matched scripts:\n");
      this.context.stdout.write(`${matchedScriptsText}
`);
      return -1;
    }
    async confirm() {
      const readlineSync = new ReadlineSync({
        input: this.context.stdin,
        output: this.context.stdout
      });
      const { answer } = await readlineSync.askQuestion(
        "Do you want to run the matched scripts? (y/N): "
      );
      if (["y", "Y", "yes", "YES", "Yes"].includes(answer)) {
        return await this.runMatchedScripts();
      } else {
        this.context.stdout.write("Aborting...\n");
        return 0;
      }
    }
    async runMatchedScripts() {
      let exitCode = 0;
      if (this.parallel) {
        const executePromises = this.matchedScripts.map(
          (script) => (0, import_shell.execute)(script)
        );
        const exitCodes = await Promise.all(executePromises);
        exitCode = exitCodes.some((code) => code) ? 1 : 0;
      } else {
        for (const script of this.matchedScripts) {
          this.context.stdout.write(
            `
===============================
Running "${script}"...
===============================
`
          );
          exitCode ||= await (0, import_shell.execute)(script);
        }
      }
      return exitCode;
    }
  };
  RungexCommand.paths = [[COMMAND_NAME]];
  RungexCommand.usage = import_clipanion.Command.Usage(COMMAND_USAGE);

  // src/index.ts
  var plugin = {
    commands: [RungexCommand]
  };
  var src_default = plugin;
  return __toCommonJS(src_exports);
})();
return plugin;
}
};
