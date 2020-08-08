import React from 'react'
import MainButton from '../buttons/MainButton'
import { Button } from 'react-bootstrap'


const AllComponent = () => {
  return (
    <div className='all-component' style={{
        minHeight : '100vh',
    }}>


      <MainButton name='main button' margin='20px' pages='/'/>

        <Button variant='danger' size='sm' style={{
            borderRadius : '100px',
        }} value={['test', 'text2']} >test</Button>
        
    </div>
  )
}

export default AllComponent
