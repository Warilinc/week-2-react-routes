import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Dummy = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <Link to="/dashboard">Go To Root</Link>
      <Link to="/dashboard/main">Go To Main</Link>
      <div id="title">Profile</div>
      <div id="username">${user}</div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
