'use client'

import { actions as tableActions } from '$/consts/table'
import { ActionsKeys, Row as RowType } from '$/types/table'

import classes from './index.module.scss'

type Props = {
  row: RowType
  actions: ActionsKeys[]
}

const Row = ({ row, actions }: Props) => {
  return (
    <span key={row.id} className={classes.row}>
      {Object.values(row).map((value, j) => (
        <span key={j} className={classes.cell}>
          {value?.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })}
        </span>
      ))}
      {actions.map(action => {
        const { onClick, icon } = tableActions[action]

        return (
          <button key={action} onClick={onClick}>
            {icon}
          </button>
        )
      })}
    </span>
  )
}

export { Row }
