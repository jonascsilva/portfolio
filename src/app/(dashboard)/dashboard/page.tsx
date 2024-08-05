import { auth } from '$/lib/auth'

import classes from './page.module.scss'

const Page = async () => {
  const session = await auth()

  return (
    <>
      <h2 className={classes.heading}>
        Bem vindo <span>{session!.user?.name}</span>!
      </h2>
      <h3>Recentes</h3>
    </>
  )
}

export { Page as default }
