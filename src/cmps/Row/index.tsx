import { RowAction, RowData } from '$/types/table'

import classes from './index.module.scss'

type Props = {
  rowData: RowData
  rowActions: RowAction[]
}

const Row = ({ rowData, rowActions }: Props) => {
  return (
    <span key={rowData.id} className={classes.row}>
      {Object.values(rowData).map(value => (
        <span key={rowData.id} className={classes.cell}>
          {value?.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })}
        </span>
      ))}
      {rowActions.map(({ name, handleClick, icon }) => {
        return (
          <button key={name} onClick={() => handleClick(rowData)}>
            {icon}
          </button>
        )
      })}
    </span>
  )
}

export { Row }
