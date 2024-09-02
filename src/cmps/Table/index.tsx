import { Row } from '$/cmps/Row'
import { RowAction, RowData } from '$/types/table'

import classes from './index.module.scss'

type Props = {
  headers?: string[]
  rowsData: RowData[]
  rowActions: RowAction[]
}

const Table = ({ headers, rowsData, rowActions }: Props) => {
  return (
    <div className={classes.table}>
      {headers && (
        <div className={classes.header}>
          {headers.map((header, i) => (
            <span key={i} className={classes.header}>
              {header}
            </span>
          ))}
        </div>
      )}
      <div className={classes.rows}>
        {rowsData.map(rowData => (
          <Row key={rowData.id} rowData={rowData} rowActions={rowActions} />
        ))}
      </div>
    </div>
  )
}

export { Table }
