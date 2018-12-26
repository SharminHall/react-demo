import React from 'react'
import Joke from './joke'
import {getRandomJoke} from '../api/joke'

export default class RandomJoke extends React.Component {
  state = {
    joke: null
  }

  render () {
    return (
      <div>
        <Joke value={this.state.joke} ></Joke>
        <div>
          <button onClick={this.handleReflesh}>reflesh</button>
        </div>
      </div>
    )
  }

  componentDidMount () {
    this.updateJoke()
  }

  handleReflesh = () => {
    this.updateJoke()
  }

  updateJoke () {
    this.setState({ joke: null })
    getRandomJoke().then(res => {
      this.setState({ joke: res.joke })
    })
  }
}