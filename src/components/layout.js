import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1
      style={{
        textAlign: `center`
      }}
       className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <p
      style={{
        textAlign: `center`
      }}>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
      </p>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer
        style={{
          textAlign: `center`
        }}
      >
        © {new Date().getFullYear()}, 水辺の白鳥
        {` `}
      </footer>
    </div>
  )
}

export default Layout
