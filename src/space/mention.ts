export const code = `
Hey! My prefix here is \`$getServerVar[prefix]\`. 
$onlyIf[$checkContains[$message;<@$clientID>;<@!$clientID>]==true;]`;