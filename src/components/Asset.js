import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchAsset } from '../actions/index';
import _ from 'lodash';

class Asset extends Component {
  componentWillMount() {
    this.props.fetchAsset(this.props.assetId)
  }
  renderAsset() {
    const [image] = _.filter(this.props.assets, ['sys', {id : this.props.assetId}]);
    return !!image ? (
      <figure key={image.sys.id}>
        <img src={image.fields.file.url} alt={image.fields.file.fileName} />
      </figure>
    ) : <p>image loading ...</p>;
    // return this.props.assets.map((asset) => {
    //   if (asset.sys.id === this.props.assetId) {
    //     return (
    //       <figure key={`${asset.sys.id}`}>
    //         <img src={asset.fields.file.url} alt={asset.fields.file.fileName} />
    //       </figure>
    //     );
    //   }
    //   return null;
    // });
  }
  render() {
    return (
      <div>{this.renderAsset()}</div>
    );
  }
}

// Maps state from store to props
function mapStateToProps(state, ownProps) {
  return { assets: state.assets };
}

export default withRouter(connect(mapStateToProps, { fetchAsset })(Asset))
