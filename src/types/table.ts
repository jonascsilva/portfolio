import { ReactNode } from 'react'

type Row = {
  id: string
  [key: string]: string | Date | Node
}

type ActionsKeys = 'edit' | 'share'

type Actions = {
  [key in ActionsKeys]: {
    icon: ReactNode
    onClick: () => void
  }
}

export type { Row, ActionsKeys, Actions }
