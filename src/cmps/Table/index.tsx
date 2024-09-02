import { Row } from '$/cmps/Row'
import { ActionsKeys, Row as TableRow } from '$/types/table'

import classes from './index.module.scss'

type Props = {
  headers: string[]
  rows: TableRow[]
  actions: ActionsKeys[]
}

const Table = ({ headers, rows, actions }: Props) => {
  return (
    <div className={classes.table}>
      <div className={classes.header}>
        {headers.map(header => (
          <span key={header} className={classes.header}>
            {header}
          </span>
        ))}
      </div>
      <div className={classes.rows}>
        {rows.map(row => (
          <Row key={row.id} row={row} actions={actions} />
        ))}
      </div>
    </div>
  )
}

export { Table }
