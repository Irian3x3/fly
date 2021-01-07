import { missingPerms } from "../../util/missingPerms";
import { missingRequiredArgument } from "../../util/missingRequiredArgument";

export const name = "prefix";
export const code = `
$color[RANDOM]
$description[Set the prefix to $message[1]!]
$setServerVar[prefix;$message[1]]
$onlyIf[$checkContains[$message;-default;-def]!=true;{execute:def-prefix}]
$onlyIf[$message!=;${missingRequiredArgument("new-prefix", "character")}]
$onlyIf[$hasPerms[$authorID;manageserver]==true;${missingPerms("MANAGE_GUILD")}]`;
export const description = {
    text: "Sets the bot's prefix.",
    usage: "<new-prefix>",
    examples: ["!", '?']
}
export const category = "settings"