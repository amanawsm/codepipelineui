import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

export default function (ComposedComponent) {
  class RequireAuth extends Component {
    static propTypes = {
      user: PropTypes.any,
      history: PropTypes.any,

    };

    constructor(props) {
      super(props);
      console.log('props',props)
      if (props && props.user === null || props.user.token === undefined) {
        props.history.push('/');
      }
    }

    componentDidUpdate(nextProps) {
      const { user, history } = nextProps;
      console.log('ssssssssnextProps', user)
      if (user && user.token === undefined) {
        history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { user: state.LoginStore.user };
  }

  return connect(mapStateToProps)(RequireAuth);
}
