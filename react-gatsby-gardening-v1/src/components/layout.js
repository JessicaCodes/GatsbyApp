import * as React from "react"
import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main>{children}</main>
    </>
  )
}


export default Layout
