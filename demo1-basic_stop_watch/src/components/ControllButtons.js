import React from 'react';
import './ControllButtons.css'

const ControlButtons = ({activated, onStart, onPause, onReset, onSplit, onStop}) => {
  return (
    <div>
      {activated ? (
        <div className="btns-stopwatch">
          <button className="btn-stopwatch" onClick={onSplit}>计次</button>
          <button className="btn-stopwatch" onClick={onPause}>暂停</button>
          <button className="btn-stopwatch" onClick={onStop}>停止</button>
        </div>
      ) : (
        <div className="btns-stopwatch">
          <button className="btn-stopwatch" onClick={onReset}>复位</button>
          <button className="btn-stopwatch" onClick={onStart}>启动</button>
        </div>
      )}
    </div>
  )
}
export default ControlButtons
