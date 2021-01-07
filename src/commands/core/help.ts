const rick = 'https://youtube.com/watch?v=dQw4w9WgXcQ';

export const name = "help";
export const aliases = ["h"];
export const code = `
$thumbnail[$userAvatar[$clientID]]
$color[RANDOM]
$description[**My prefix here is \`$getServerVar[prefix]\`.**\n\n- **[Command list\\](${rick})**\n- **[Invite Link\\]($getBotInvite)**]
$author[${"$username[$clientID]".endsWith("s") ? "$username[$clientID]" : "$username[$clientID]'s"} help]
`;