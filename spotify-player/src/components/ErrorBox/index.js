import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ErrorActions } from '../../store/ducks/error';

import CloseIcon from '../../assets/images/close.svg';

import { Container } from './styles';

const ErrorBox = ({ error: { message, visible }, hideError }) => visible && (
<Container>
  <p>{message}</p>
  <button type="button" onClick={hideError}>
    <img src={CloseIcon} alt="Close" />
  </button>
</Container>
);

ErrorBox.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
    visible: PropTypes.bool,
  }),
};

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
