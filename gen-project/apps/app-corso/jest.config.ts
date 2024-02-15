import type { Config } from "jest"

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
}

export default config
