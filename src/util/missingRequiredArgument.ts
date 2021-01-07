export type ArgumentType = "text" | "number" | "link" | "character" | MentionType;

export type MentionType = "user" | "channel" | "role";

/**
 * @param arg 
 * @param argType 
 */
export const missingRequiredArgument = (arg: any, argType?: ArgumentType) => `{description:**Missing required argument \`${arg}\` ${argType ? `of type ${argType}` : ""}**}{color:RED}`