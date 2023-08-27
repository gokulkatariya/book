import React from 'react'
import Example from './Example'

export default function Navbar() {
  return (
    <div>
      
       <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div  className="container-fluid">
    <a  className="navbar-brand" href="/">BOOK STORE</a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li  className="nav-item mx-2">
          <a  className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="/Category.js">Category</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="/">About</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="/">ContactUs</a>
        </li>
      </ul>
      <Example/>
      <form className="d-flex">
        {/* <button className="btn btn-primary" type="submit">Login</button> */}
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
