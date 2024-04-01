import { ThemeButton } from '@/_/ThemeButton'

import classes from './page.module.scss'

const Page = () => (
  <main className={classes.main}>
    <ThemeButton />
    <h1 className={classes.heading}>Study</h1>
    <h2>Themes:</h2>
    <h2>Biology</h2>
    <h2>Physics</h2>
    <h2>Math</h2>
  </main>
)

export { Page as default }
