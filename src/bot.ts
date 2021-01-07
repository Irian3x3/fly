import { Bot } from "dbd.js";
import { readdirSync as read } from "fs"
import { config } from "./config";

const { token, prefix: defPrefix, owners } = config.bot.core;

const fly = new Bot({
    token,
    prefix: "$getServerVar[prefix]"
});

fly.variables({
    prefix: defPrefix
});

const folders = read("./dist/commands");

for (const folder of folders) {
    for (const cmdFile of read(`./dist/commands/${folder}`).filter(f => f.endsWith(".js"))) {
        const command = require(`./commands/${folder}/${cmdFile}`);
        command.ownerOnly ? 
        command.code = `${command.code}
        $onlyForIDs[${owners.join(';')};{description:**This is an owner only command.**}{color:RED}]` : command.code = command.code;
        fly.command(command);
    }
};

const spfolders = read("./dist/space").filter(f => f.endsWith(".js"));

for (const cmdFile of spfolders) {
    const scommand = require(`./space/${cmdFile}`);
    const { code } = scommand;
    fly.command({
        name: "$alwaysExecute",
        code
    });
}

const awfolders = read("./dist/awaited").filter(f => f.endsWith(".js"));

for (const cmdFile of awfolders) {
    const awcommand = require(`./awaited/${cmdFile}`);
    fly.awaitedCommand(awcommand);
};

fly.onMessage({ guildOnly: true });