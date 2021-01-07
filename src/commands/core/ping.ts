export const name = "ping";
export const code = `
    $thumbnail[$userAvatar[$clientID]]
    $color[RANDOM]
    $addField[**WebSocket**:;\`a\`;yes]
    $addField[**Message Roundtrip**:;\`e\`;yes]
    $author[$username[$clientID]'s Ping]
    
    $cooldown[5s;Please wait \`%time%\` to reuse \`$commandName\`.]`
export const category = "core"
export const description = {
    text: "Pings the bot",
    usage: " ",
    examples: [" "]
}

// $djsEval[Date.now() - d.message.createdTimestamp]
// $djsEval[Math.round(d.client.ws.ping)]