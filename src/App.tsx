import React from 'react'
import Slider from './Slider'

const srcs = [
  'https://images.unsplash.com/photo-1593325864828-f2d7cbef02d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1593069832911-8d1ffe689530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
  'https://imagescdn.gettyimagesbank.com/171/16/559/790/0/540238488.jpg',
  'https://imagescdn.gettyimagesbank.com/171/16/559/788/0/540238794.jpg',
  'https://imagescdn.gettyimagesbank.com/171/15/743/381/0/486681552.jpg',
  'https://imagescdn.gettyimagesbank.com/171/14/742/718/0/498684431.jpg',
]
const App = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '20rem',
        margin: 'auto',

      }}
    >
      <Slider src={srcs} />
    </div>
  )
}

export default App
