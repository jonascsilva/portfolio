import { Client } from './client'
import classes from './page.module.scss'

const Page = async () => {
  return (
    <>
      <h2>Configurações</h2>
      <Client />
    </>
  )
}

export { Page as default }
