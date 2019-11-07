import { Link, graphql, useStaticQuery } from "gatsby"
import "./scss/_partials/header.scss"
import "./scss/_partials/header-large.scss"
import React, { Component } from "react"
import classnames from "classnames"

// const Header = props => {
//   // must be named something from query
//   const { allNavItemsJson } = useStaticQuery(
//     graphql`
//       query navQuery {
//         allNavItemsJson {
//           edges {
//             node {
//               id
//               menu_item
//               href
//             }
//           }
//         }
//       }
//     `
//   )
//   // console.log(allNavItemsJson)
//   return (
//     // Starting to import exisitng header
//     <header className={"header-bar header-bar_" + props.barName + " fullpage-fade-in"}>
//       <div className="wrap-1 sf-1 header-bar_content">
//         <Link to="/" className="header-bar_logo">Patrik Lau</Link>
//         <nav className="header-bar_nav">
//           <ul className="header-bar_nav-list">
//             {/* Map info from json file to list items */}
//             {allNavItemsJson.edges.map(({ node }) => (
//               <li key={node.id}>
//                 <Link id={node.menu_item} to={node.href} className="header-bar_nav-item">{node.menu_item}</Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   )
// }

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
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

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      // <nav
      //   className={classnames("header-bar", {
      //     "navbar--hidden": !this.state.visible
      //   })}
      // >
      //   <a href="#">Item 1</a>
      //   <a href="#">Item 2</a>
      //   <a href="#">Item 3</a>
      // </nav>
      // Starting to import exisitng header
      <header 
        // className={"header-bar header-bar_" + this.props.barName + " fullpage-fade-in"}
        className={classnames(
          "header-bar",
          "header-bar_" + this.props.barName,
          "fullpage-fade-in",
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
