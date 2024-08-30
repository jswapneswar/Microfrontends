import React from 'react'

export default function checkoutC1() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top navbar-shrink">
         {/* Navigation */}
    <div className="container">
      {/* Brand and toggle get grouped for better mobile display */}
      <div className="navbar-header page-scroll">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand page-scroll" href="#page-top">
          Celine Is Awesome
        </a>
      </div>
      {/* Collect the nav links, forms, and other content for toggling */}
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right">
          <li className="hidden active">
            <a href="#page-top" />
          </li>
          <li className="">
            <a className="page-scroll" href="#services">
              Services
            </a>
          </li>
          <li className="">
            <a className="page-scroll" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="">
            <a className="page-scroll" href="#about">
              About
            </a>
          </li>
          <li className="">
            <a className="page-scroll" href="#team">
              Team
            </a>
          </li>
          <li className="">
            <a className="page-scroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* /.navbar-collapse */}
    </div>
    {/* /.container-fluid */}
  </nav>
  )
}