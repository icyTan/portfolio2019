import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "./scss/_partials/header.scss"
import "./scss/_partials/header-large.scss"
import React, { Component } from "react"
import classnames from "classnames"

// Referencing: https://dev.to/guimg/hide-menu-when-scrolling-in-reactjs-47bj
// Classnames: https://github.com/JedWatson/classnames
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      attached: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;
    // declare our variables
    var visible,attached = true;

    const currentScrollPos = window.pageYOffset;
    // set some logic for if it's fully hidden or partially hidden
    if (currentScrollPos < prevScrollpos) { // scrolling up
      visible = true;
        // 50 is our magic close to top of page number
        if (currentScrollPos > 100) {
          attached = false;
        } else {
          attached = true;
        }
    } else if (currentScrollPos > prevScrollpos) { // scrolling down
      attached = false;
      visible = false;
    }
    // set state to update
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
      attached
    });
  };

  render() {
    return (
      // Starting to import exisitng header
      <header 
        className={classnames(
          "header-bar",
          "header-bar_" + this.props.barName,
          "fullpage-fade-in",
          { "-detached": !this.state.attached },
          {"-hidden": !this.state.visible}
          )}
      >
        <div className="wrap-1 sf-1 header-bar_content">
          {/* <Link to="/" className="header-bar_logo">Patrik Lau</Link> */}
          <AniLink
            cover
            to="/"
            direction="up"
            bg="#fafafa"
            duration={1.5}
            className="header-bar_logo"
          >Patrik Lau</AniLink>
          <nav className="header-bar_nav">
            <ul className="header-bar_nav-list">
                <li className="header-bar_list-item">
                  {/* <Link to="/" className="header-bar_nav-item">Work</Link> */}
                  <AniLink
                    cover 
                    to="/"
                    direction="up"
                    bg="#fafafa"
                    duration={1.5}
                    className="header-bar_nav-item"
                  >Work</AniLink>
                </li>
                <li className="header-bar_list-item">
                  {/* <Link to="/about" className="header-bar_nav-item">About</Link> */}
                  <AniLink
                    cover 
                    to="/about"
                    direction="down"
                    bg="#fafafa"
                    duration={1.5}
                    className="header-bar_nav-item"
                  >About</AniLink>
                </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header
