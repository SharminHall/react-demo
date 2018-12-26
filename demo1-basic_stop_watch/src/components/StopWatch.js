import React, {Component, Fragment} from 'react'
import ControllButtons from './ControllButtons'
import MajorClock from './MajorClock'
import SplitTimes from './SplitTimes'

class StopWatch extends Component {
  state = {
    isStart: false,
    startTime: null,
    currentTime: null,
    splits: [],
    isPause: false
  }
  render () {
    return (
      <Fragment>
        <style jsx>{`
          h1 {
            color: red;
            font-family: monospace
          }
        `}</style>
        <h1>秒表</h1>
        <MajorClock milliseconds={this.state.currentTime - this.state.startTime} activated={this.state.isStart} />
        <ControllButtons
          activated={this.state.isStart}
          onStart={this.onStart}
          onPause={this.onPause}
          onReset={this.onReset}
          onSplit={this.onSplit}
          onStop={this.onStop}
        />
        <SplitTimes value={this.state.splits} />
      </Fragment>
    )
  }
  onStart = () => {
    let currentTime = new Date()
    let startTime = this.state.isPause ? currentTime - (this.state.currentTime - this.state.startTime) : new Date()
    this.setState({
      isStart: true,
      startTime,
      currentTime
    })
    this.intervalHandle = setInterval(() => {
      this.setState({currentTime: new Date()})
    }, 1000 / 60)
  }
  onPause = () => {
    clearInterval(this.intervalHandle)
    this.setState({isStart: false, isPause: true})
  }
  onStop = () => {
    clearInterval(this.intervalHandle)
    this.setState({isStart: false, isPause: false})
  }
  onReset = () => {
    this.intervalHandle && clearInterval(this.intervalHandle)
    this.setData({
      isStart: false,
      startTime: null,
      currentTime: null,
      splits: []
    })
  }
  onSplit = () => {
    let {splits, currentTime, startTime} = this.state
    this.setState({
      splits: [...splits, currentTime - startTime]
    })
  }
}

export default StopWatch
