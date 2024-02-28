type RouteTypes = {
  home: "/"
  compontents: {
    home: "/components"
  }
  settings: {
    home: "/settings"
    api: "/settings/api"
  }
}
export const Routes: RouteTypes = {
  home: "/",
  compontents: {
    home: "/components",
  },
  settings: {
    home: "/settings",
    api: "/settings/api",
  },
}

type ExtractRouteStrings<T> = T extends string
  ? T
  : { [K in keyof T]: ExtractRouteStrings<T[K]> }[keyof T]

export type DynamicRoutePaths = ExtractRouteStrings<RouteTypes>
