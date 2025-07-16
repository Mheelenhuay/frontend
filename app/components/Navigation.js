'use client';
export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fs-5">
      <div className="container-fluid">
        <a className="navbar-brand fs-4" href="/">FrontEnd</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left menu */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu fs-5">
                <li><a className="dropdown-item" href="/about">About</a></li>
                <li><a className="dropdown-item" href="/service">Service</a></li>
                <li><a className="dropdown-item" href="/contact">Contact</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>

          {/* Search form */}
          <form className="d-flex me-3" role="search">
            <input className="form-control me-2 fs-5" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success fs-5" type="submit">Search</button>
          </form>

          {/* Login Button */}
          <a href="/login" className="btn btn-primary fs-5">Login</a>
        </div>
      </div>
    </nav>
  );
}
