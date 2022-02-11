
function NavItem(props) {
  return(
    <li><a href="#" className="nav-item">{props.title}</a></li>
  )
}


export let NavBar = (props) => {
    return(
        <nav className="nav">
          <div className="nav-list-container">
            <ul className="nav-list">
              <NavItem title="Home"></NavItem>
              <NavItem title="Projects"></NavItem>
              <NavItem title="About"></NavItem>
              <NavItem title="Contact"></NavItem>
            </ul>
          </div>
        </nav>
    )
} 