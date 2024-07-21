export function keys<O extends Object, K extends keyof O>(obj: O) {
  return Object.keys(obj) as K[]
}
