import React from 'react'

// const Joke = ({value}) => {
//   return (
//     <div>{value || 'loading...'}</div>
//   )
// }

// class Joke extends React.PureComponent {
//   render () {
//     return (
//       <div>{this.props.value || 'loading...'}</div>
//     )
//   }
// }

const Joke = React.memo(({value}) => {
  return <div>{value || 'loading...'}</div>
})

export default Joke
