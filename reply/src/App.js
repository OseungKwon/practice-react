import { Button } from '@mui/material'
import React from 'react'
import Comment from './comment/Comment'

const App = () => {
  return (
    <div>
      <Button onClick={() => {
        localStorage.clear()
        window.location.reload()
      }
      }>데이터 삭제</Button>
      <Comment />
    </div>
  )
}

export default App
