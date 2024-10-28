import React from 'react'
import './button.scss'

export default function Button({children}: {children: React.ReactNode}) {
  return (
    <button className='f-18'>{children}</button>
  )
}
