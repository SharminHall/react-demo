import React from 'react'
import {ms2Time} from '../utils/utils'

const MajorClock = ({milliseconds = 0, activated = false}) => {
  return (
    <React.Fragment>
      <style jsx>{`
        h1 {
          color: ${activated ? 'red' : '#00ffa3'}
        }
      `}</style>
      <h1>{ms2Time(milliseconds)}</h1>
    </React.Fragment>
  )
}

export default MajorClock
