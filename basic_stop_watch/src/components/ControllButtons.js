import React from 'react';

const ControlButtons = ({activated, onStart, onPause, onReset, onSplit, onStop}) => {
  return (
    <div>
      {activated ? (
        <div>
          <button onClick={onSplit}>计次</button>
          <button onClick={onPause}>暂停</button>
          <button onClick={onStop}>停止</button>
        </div>
      ) : (
        <div>
          <button onClick={onReset}>复位</button>
          <button onClick={onStart}>启动</button>
        </div>
      )}
    </div>
  )
}
export default ControlButtons
