import React from 'react'

const Error = ({message}) => {
  return (
    <div>
      <p className='alert alert-danger'>{message}</p>
    </div>
  )
}

export default Error
