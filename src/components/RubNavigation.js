import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategory } from "../actions";

class RubNavigation extends Component {
  componentWillMount() {
    this.props.fetchCategory();
  }
  render() {
    return (
      <nav>
        <ul>
        {this.props.rubriques.map((rubrique, index) => (
            <li key={rubrique.sys.id}>
              <NavLink to={`/rubrique/${rubrique.slug}`}>
                {rubrique.title}
              </NavLink>
            </li>
            ))}
        </ul>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return { rubriques: state.categories };
}
export default connect(mapStateToProps, { fetchCategory })(RubNavigation);
