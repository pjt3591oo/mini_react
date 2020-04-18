import React from './react'

const Component = () => {
  const [ count, setCount ] = React.useState(1)
  const [ text, setText] = React.useState('mung')

  React.useEffect(() => {
    console.log('component useEffect called')
  }, [count])

  return {  
    render: () => {
      console.log(`[Rendder] Component : count=>  ${count}, text=> ${text}\n`)
    },
    click: () => {
      console.log('clicked')
      setCount(count+1)
    },
    change: (text) => {
      setText(text)
    }
  }
}


export default Component