import Link from 'next/link'

import { Divider } from '$/cmps/Divider'
import { TertiaryButton } from '$/cmps/TertiaryButton'
import { signOut } from '$/lib/auth'

import classes from './index.module.scss'

const signOutAction = async () => {
  'use server'

  await signOut({ redirectTo: '/' })
}

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <Link href='/dashboard' className={classes.link}>
        <h1 className={classes.heading}>
          Study<span>Nest</span>
        </h1>
      </Link>
      <Link href='/notes' className={classes.link}>
        <TertiaryButton>Anotações</TertiaryButton>
      </Link>
      <Link href='/flashcards' className={classes.link}>
        <TertiaryButton>Flashcards</TertiaryButton>
      </Link>
      <Link href='/quizzes' className={classes.link}>
        <TertiaryButton>Quizzes</TertiaryButton>
      </Link>
      <Divider />
      <Link href='/settings' className={classes.link}>
        <TertiaryButton>Configurações</TertiaryButton>
      </Link>
      <form action={signOutAction}>
        <TertiaryButton>Sair</TertiaryButton>
      </form>
    </aside>
  )
}

export { Sidebar }
