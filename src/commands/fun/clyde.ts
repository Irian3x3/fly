import { missingRequiredArgument } from "../../util/missingRequiredArgument";

export const name = "clyde";
export const code = `
$djsEval[const { MessageAttachment } = require("discord.js"); const { Canvas } = require("canvacord");(async() => { let img = await Canvas.clyde($message); d.message.channel.send(new MessageAttachment(img, "Clyde.png")) })()]
$onlyIf[$message!=;${missingRequiredArgument("message", "text")}]
`;