import React from './react'

const Component1 = () => {
  const [ count, setCount ] = React.useState(10)
  const [ text, setText] = React.useState('MUNG')


  React.useEffect(() => {
    console.log('component1 useEffect called')
  }, [count])

  return {  
    render: () => {
      console.log(`[Rendder] Component1 : count=>  ${count}, text=> ${text}`)
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

export default Component1