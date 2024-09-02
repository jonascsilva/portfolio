type RowData = {
  id: string
  [key: string]: string | Date | JSX.Element
}

type RowAction = {
  name: string
  icon: JSX.Element
  handleClick: (rowData: RowData) => void
}

export type { RowData, RowAction }
