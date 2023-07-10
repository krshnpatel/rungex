/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-rungex",
factory: function (require) {
var plugin = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default
  });

  // src/rungex.ts
  var import_cli = __require("@yarnpkg/cli");
  var import_clipanion = __require("clipanion");
  var import_typanion = __toESM(__require("typanion"));
  var COMMAND_NAME = "rungex";
  var commandUsage = {
    description: "Run multiple package scripts using Regex.",
    details: "This command will print a nice message.",
    examples: [["Add two numbers together", "yarn addition 42 10"]]
  };
  var RungexCommand = class extends import_cli.BaseCommand {
    constructor() {
      super(...arguments);
      this.regex = import_clipanion.Option.String({ validator: import_typanion.default.isString() });
    }
    async execute() {
      this.context.stdout.write(`${this.regex}
`);
    }
  };
  RungexCommand.paths = [[COMMAND_NAME]];
  RungexCommand.usage = import_clipanion.Command.Usage(commandUsage);

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
