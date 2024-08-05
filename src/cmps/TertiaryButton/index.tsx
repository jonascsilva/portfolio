import { PropsWithChildren } from 'react'

import classes from './index.module.scss'

const TertiaryButton = ({ children }: PropsWithChildren) => {
  return <button className={classes.button}>{children}</button>
}

export { TertiaryButton }
