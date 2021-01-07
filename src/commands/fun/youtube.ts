import { missingRequiredArgument } from "../../util/missingRequiredArgument";

const url = "http://api.somecool.repl.co/yt-search?search=$message";

export const name = "youtube";
export const aliases = ["yt"];
export const code = `
$footer[👀 $jsonRequest[${url};views] views | Uploader: $jsonRequest[${url};uploader_name]]
$thumbnail[$jsonRequest[${url};thumbnail]]
$addField[**Result**:;\`[$jsonRequest[${url};title]\\]($jsonRequest[${url};url])\`;yes]
$addField[**Query**:;\`$message\`;yes]
$author[YouTube Search Results]
$onlyIf[$message!=;${missingRequiredArgument("search", "text")}]
`