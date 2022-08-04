import { Level, PinoLogger} from "@qest/logger-utils";

const options = {
    level: <Level> 'trace',
    name: 'test',
    version: '0.1',
    enabled: true
}

export const logger = new PinoLogger({
    ...options,
    name: `${options.name}/${options.version}`,
    outputStreams: [
        {
            level: <Level>options.level,
            stream: process.stdout,
            enabled: options.enabled || true,
        },
    ],
});