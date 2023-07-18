import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const keypad = [1,2,3,4,5,6,7,8,9,0]
  const password = [5,3,7,9]
  const [numberClicked, setNumberClicked] = useState([])
  const [rightGuessedPassword, setRightGuessedPassword] = useState(false)

  useEffect(() => {
    if(numberClicked.length === 4){
      if(JSON.stringify(numberClicked) === JSON.stringify(password)){
        setRightGuessedPassword(true)
      }else{
        setNumberClicked([])
      }
      
    }
  }, [numberClicked])

  return (
    <>
    <h1>
      Guess the password! <br />
    </h1>
      <p><b>{numberClicked}</b></p>
    {rightGuessedPassword ?
    (<div>Logged In!</div>)
    :
    (
      <div className='cellphone-pad'>
        {keypad.map(number => (
          
          <button 
          className={number === 0 ? 'zero': ''}
          onClick={() => {
            setNumberClicked((cur)=> [...cur, number])
            }}>
            {number}
            </button>
          
        ))}

      </div>
    )
  }
      
    </>
  )
}

export default App
