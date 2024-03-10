import React from 'react'
import { HeaderComponent } from './HeaderComponent'
import { InputComponent } from './Main/InputComponent'
import { OutputComponent } from './Main/OutputComponent'

export const MainComponent = () => {
  return (
    <div>
        <HeaderComponent/>
        <InputComponent/>
        <OutputComponent/>
    </div>
  )
}
