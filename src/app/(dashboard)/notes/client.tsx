'use client'

import { useRouter } from 'next/navigation'
import { MdModeEdit, MdShare } from 'react-icons/md'

import { Table } from '$/cmps/Table'
import { RowData, RowAction } from '$/types/table'

type Props = {
  rowsData: RowData[]
}

const Client = ({ rowsData }: Props) => {
  const router = useRouter()

  const rowActions: RowAction[] = [
    {
      name: 'Editar',
      handleClick: ({ id }: RowData) => router.push(`/note/${id}`),
      icon: <MdModeEdit />
    },
    {
      name: 'Compartilhar',
      handleClick: () => alert('Share modal'),
      icon: <MdShare />
    }
  ]

  return (
    <Table
      headers={['Nome', 'Assunto', 'Última modificação', '', '']}
      rowsData={rowsData}
      rowActions={rowActions}
    />
  )
}

export { Client }
