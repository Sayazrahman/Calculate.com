import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">Advance Calculator |</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/home">Home |</a>
       
      </div>
    </div>
  </div>
</nav>
  )
}
