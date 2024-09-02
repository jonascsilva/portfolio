'use client'

import { useState } from 'react'

import classes from './page.module.scss'

const Client = () => {
  const [value1, setValue1] = useState('5')
  const [value2, setValue2] = useState('5')
  const [value3, setValue3] = useState('5')

  const handleChange =
    (setValue: (value: string) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }

  return (
    <main className={classes.mainContent}>
      <input
        type='range'
        min='1'
        max='10'
        className={classes.slider}
        value={value1}
        onChange={handleChange(setValue1)}
      />
      <input
        type='range'
        min='1'
        max='10'
        className={classes.slider}
        value={value2}
        onChange={handleChange(setValue2)}
      />
      <input
        type='range'
        min='1'
        max='10'
        className={classes.slider}
        value={value3}
        onChange={handleChange(setValue3)}
      />
    </main>
  )
}

export { Client }
