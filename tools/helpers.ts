export function keys<O extends Object, K extends keyof O>(obj: O) {
  return Object.keys(obj) as K[]
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
