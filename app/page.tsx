import { Button } from '@/_/Button'
import { ThemeButton } from '@/_/ThemeButton'

import classes from './page.module.scss'

const Page = async () => {
  return (
    <div>
      <nav className={classes.navbar}>
        <div className={classes.leftContainer}>
          <h1 className={classes.heading}>
            Study<span>Nest</span>
          </h1>
        </div>
        <div className={classes.rightContainer}>
          <Button />
          <button className={classes.button}>Criar conta</button>
          <ThemeButton />
        </div>
      </nav>
      <main className={classes.main}>
        <section className={classes.section}>
          <div className={classes.imageContainer}>Flashcards images placeholder</div>
          <div>
            <h2>Estude Menos, Aprenda Mais!</h2>
            <h3>Sua ferramenta completa para um aprendizado eficiente.</h3>
          </div>
        </section>
      </main>
    </div>
  )
}

export { Page as default }
