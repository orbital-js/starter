import * as fs from 'fs';
import * as path from 'path';

export function getConfig() {
    const configFile = path.join(process.cwd(), '.orbital.json');
    const config = fs.readFileSync(configFile, {
        encoding: 'UTF-8'
    });
    return JSON.parse(config);
}