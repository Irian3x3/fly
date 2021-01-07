import { config } from "../config";
const { prefix: defPrefix } = config.bot.core;

export const name = "def-prefix";
export const code = `$description[Set prefix to default (\`fly@\`)!] $setServerVar[prefix;${defPrefix}]`