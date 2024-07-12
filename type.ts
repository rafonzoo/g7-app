type Menu = {
  name: string
  path: string | Menu[]
}

type RFZ<T = {}> = React.FC<T>

type RF<T = {}> = React.FC<T & { children?: React.ReactNode }>
