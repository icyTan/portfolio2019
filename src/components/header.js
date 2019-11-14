import { Link, graphql, useStaticQuery } from "gatsby"
import "./scss/_partials/header.scss"
import "./scss/_partials/header-large.scss"
import React, { Component } from "react"
import classnames from "classnames"

// Referencing: https://dev.to/guimg/hide-menu-when-scrolling-in-reactjs-47bj
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
        if (currentScrollPos > 50) {
          attached = false;
        } else {
          attached = true;
        }
    } else if (currentScrollPos > prevScrollpos) { // scrolling down
      attached = false;
      visible = false;
    }
    // const visible = prevScrollpos > currentScrollPos;
    // const attached = currentScrollPos > 50; // 50 is our close to top of page number

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
      attached
    });
    // console.log(this.state);
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
          <Link to="/" className="header-bar_logo">Patrik Lau</Link>
          <nav className="header-bar_nav">
            <ul className="header-bar_nav-list">
                <li>
                  <Link to="/" className="header-bar_nav-item">Work</Link>
                </li>
                <li>
                  <Link to="/about" className="header-bar_nav-item">About</Link>
                </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header
