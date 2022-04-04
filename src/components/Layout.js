import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <header className={'app-bar'}/>
      <main>
        <h2>Title</h2>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
