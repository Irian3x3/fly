import { PermissionResolvable } from "discord.js";

export const missingPerms = (perm: PermissionResolvable) => `{description:**You are missing the permission ${format(perm)}!**}{color:RED}`

export const format = (perm: PermissionResolvable) => {
    return (perm as string)
        .replace(/_/g, " ")
        .toLowerCase()
        .replace(/\b(\w)/g, (s) => s.toUpperCase())
};