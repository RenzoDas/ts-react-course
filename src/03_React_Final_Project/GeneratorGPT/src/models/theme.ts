import * as Theme from "../../tailwind.config.js"

console.log(Theme.default.theme.extend.colors)

const colors = Theme.default.theme.extend.colors
export type IThemeColors = typeof colors
