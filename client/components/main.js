import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Main</div>
      <Link to="/dashboard/profile/7d7589d0-4310-4280-93ea-726ba7151345">Go To Profile</Link>
      <Link to="/dashboard">Go To Root</Link>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
