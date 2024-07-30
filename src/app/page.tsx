import Link from 'next/link'

import { ThemeButton } from '$/cmps/ThemeButton'
import { auth, signIn } from '$/lib/auth'

import classes from './page.module.scss'

const Page = async () => {
  const session = await auth()

  return (
    <div>
      <nav className={classes.navbar}>
        <div className={classes.leftContainer}>
          <h1 className={classes.heading}>
            Study<span>Nest</span>
          </h1>
        </div>
        <div className={classes.rightContainer}>
          {session ? (
            <Link href={'/dashboard'}>
              <button className={classes.button}>Dashboard</button>
            </Link>
          ) : (
            <>
              <form
                action={async () => {
                  'use server'

                  await signIn(undefined, { redirectTo: '/dashboard' })
                }}
              >
                <button className={classes.button}>Sign in</button>
              </form>
              <button className={classes.button}>Criar conta</button>
            </>
          )}
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
