import React, { useState } from 'react'

import { DateControl } from '../DateControl'
import { Footer } from '../Footer'
import { Content } from '../Content'

const initSelectDate = {
  first: '',
  second: '',
  isFull: false,
}

export const Calendar = () => {
  const [isFirstSelect, setIsFirstSelect] = useState(true)
  const [selectDate, setSelectDate] = useState(initSelectDate)
  const [selectDates, setSelectDates] = useState([])

  const getSelectDate = date => {
    setSelectDate(() => {
      if (isFirstSelect) {
        setIsFirstSelect(false)
        return {
          first: date,
          second: '',
          isFull: false,
        }
      }

      setIsFirstSelect(true)
      return {
        ...selectDate,
        second: date,
        isFull: true,
      }
    })
  }

  const deleteSelectDate = id => {
    setSelectDates(selectDates.filter(date => date.id !== id))
  }

  const applySelection = () => {
    setSelectDates(() => {
      const id = `${selectDate.first.id}-${selectDate.second.id}`
      const isAlreadyCreate = !!selectDates.find(date => date.id === id)

      if (isAlreadyCreate) return selectDates

      return [...selectDates, { id, ...selectDate }]
    })
    setSelectDate(initSelectDate)
  }

  return (
    <>
      <DateControl
        deleteSelectDate={deleteSelectDate}
        selectDates={selectDates}
        selectDate={selectDate}
      />

      <Content
        getSelectDate={getSelectDate}
        selectDate={selectDate}
        selectDates={selectDates}
      />
      <Footer selectDateFull={selectDate.isFull} applySelection={applySelection} />
    </>
  )
}
