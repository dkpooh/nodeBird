import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout'
import reducer from '../reducers';


const NodeBird = ({ Component, store}) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  )
}

NodeBird.propTypes = {
  Component: PropTypes.func,
  store: PropTypes.object,
}

export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  );
  const store = createStore(reducer, initialState, enhancer);
  return store
})(NodeBird);