import React from 'react'
import { Button } from "@/components/ui/button"


function HomePage() {
  return (
    <div>
      <h1 className='text-3xl'>HomePage</h1>
      <Button variant="outline" size="default" className='capitalize m-10'>
        click me
      </Button>

    </div>
  )
}

export default HomePage