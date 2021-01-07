import { missingRequiredArgument } from "../../util/missingRequiredArgument";

export const name = "play";
export const code = `
$playSong[$message;{description:**An error has occured.**}{color:RED}]
$onlyIf[$voiceID!=;{color:RED}{description:**Please join a voice channel.**}]
$onlyIf[$message!=;${missingRequiredArgument("search", "text")}]
`;
export const aliases = ["p"]