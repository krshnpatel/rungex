import { Plugin } from '@yarnpkg/core';
import { RungexCommand } from './rungex';

const plugin: Plugin = {
    commands: [RungexCommand]
};

export default plugin;
