import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const UserResult = () => {
  const navigate = useNavigate()
  return (
    <>
    <Button onClick={() =>navigate('/Admin')} >go back</Button>
    </>
  )
}

export default UserResult
