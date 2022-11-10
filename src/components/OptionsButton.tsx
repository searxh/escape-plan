import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../App'
import { Option } from './Option'

export interface OptionsInterface {
  [key: string]: any
}

const options: OptionsInterface = {
  speedMode: false,
}

const OptionsButton = () => {
  const { gameData, setGameData } = useContext(GameContext)
  const [visible, setVisible] = useState<boolean>(false)
  const [optionsState, setOptionsState] = useState<OptionsInterface>(options)

  const handleOnClick = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    setGameData({ ...gameData, options: optionsState })
  }, [optionsState])

  return (
    <>
      {Object.keys(options).map((optionValue) => {
        return (
          <>
            <div
              onClick={handleOnClick}
              className='join-leave-button bg-blue-400 text-white rounded-xl'
            >
              Options
            </div>
            {visible ? (
              <div className='bg-red-300 rounded-lg p-3'>
                <Option
                  label={optionValue}
                  stateChangeCallback={(selected: boolean) => {
                    const newOptions = { ...options }
                    newOptions[optionValue] = selected
                    setOptionsState(newOptions)
                  }}
                />
              </div>
            ) : null}
          </>
        )
      })}
    </>
  )
}

export default OptionsButton