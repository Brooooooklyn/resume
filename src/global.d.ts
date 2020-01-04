declare namespace NodeJS {
  declare interface Module {
    hot?: {
      accept: (path: string, callback?: () => void) => void
    }
  }
}

declare module '*.svg' {
  export default any
}
