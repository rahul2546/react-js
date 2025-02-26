import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>My Custom App | chai</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank',
//   },
//   children: ['Click here'],
// }

const anotherElement = (
  <a href='https://www.google.com' target='_blank'>
    Click here
  </a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'Click here',
  anotherElement
)

React.createRoot(document.getElementById('root')).render(
   
    reactElement
  // <App />
  // <MyApp />
  
)
