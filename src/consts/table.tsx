import { MdModeEdit, MdShare } from 'react-icons/md'

import { Actions as TableActions } from '$/types/table'

const actions: TableActions = {
  edit: {
    icon: <MdModeEdit />,
    onClick: () => alert("Edit isn't implemented yet")
  },
  share: {
    icon: <MdShare />,
    onClick: () => alert("Share modal isn't implemented yet")
  }
}

export { actions }
