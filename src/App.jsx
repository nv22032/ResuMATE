import React from 'react'
import { Button } from "@/components/ui/button"
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { useState } from 'react'

function App () {
  const [count, setCount] = useState(0)
  const {user, isLoaded, isSignedIn}=useUser();

  if(!isSignedIn&&isLoaded)
  {
    return <Navigate to={'/auth/sign-in'}/>
  }

  return (
    <>
    <Outlet/>
    </>
  )
}

export default App