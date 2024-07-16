'use client'

import { signIn } from 'next-auth/react'

import classes from './index.module.scss'

const Button = () => {
  return (
    <button className={classes.button} onClick={() => signIn()}>
      Login
    </button>
  )
}

export { Button }
