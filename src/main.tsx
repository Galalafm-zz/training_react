import * as React from 'react'
import { render } from 'react-dom'
import s from './TodoStore'

console.log(s)

render(
  <div className='header'>Helloo</div>,
  document.getElementById('app') as Element
)
