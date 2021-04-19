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

declare module '*.md' {
  export default any
}
