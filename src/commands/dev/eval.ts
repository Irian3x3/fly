import { missingRequiredArgument } from "../../util/missingRequiredArgument";

export const name = "eval";
export const code = `
$color[GREEN]
$author[Evaluated successfully]
$addField[**Input**:;\`$message\`]
$eval[$message]
$onlyIf[$message!=;${missingRequiredArgument("toeval", "text")}]`;
export const ownerOnly = true;