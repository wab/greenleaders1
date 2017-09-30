import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategories } from "../actions";
import _ from "lodash";

class Navigation extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }
  render() {
    const { categories, ready } = this.props;
    if (!ready) {
      return null;
    }
    return (
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          {_.map(categories, (rubrique, index) => (
            <li key={rubrique.sys.id}>
              <NavLink to={`/rubrique/${rubrique.fields.slug}`}>
                {rubrique.fields.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return { categories: state.categories.all, ready: state.categories.ready };
}
export default connect(mapStateToProps, { fetchCategories })(Navigation);
