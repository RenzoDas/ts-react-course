export type Routes = {
  home: "/"
  compontents: {
    home: "/components"
  }
}

type ExtractRouteStrings<T> = T extends string
  ? T
  : { [K in keyof T]: ExtractRouteStrings<T[K]> }[keyof T]

export type DynamicRoutePaths = ExtractRouteStrings<Routes>
