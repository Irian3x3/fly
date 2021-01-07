export const name = "help";
export const aliases = ["h"];
export const code = `
$thumbnail[$userAvatar[$clientID]]
$color[RANDOM]
$description[**My prefix here is \`$getServerVar[prefix]\`.**\n\n- **[Command list\\](https://github.com/Irian3x3/Fly/blob/main/COMMANDS.MD)**\n- **[Invite Link\\]($getBotInvite)**]
$author[${"$username[$clientID]".endsWith("s") ? "$username[$clientID]" : "$username[$clientID]'s"} help]
`;