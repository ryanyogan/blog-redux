import styles from './../global.styl';
import React from 'react';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class NotFound extends React.Component {
  render() {
    return (
      <div styleName='wrapper'>
        <h1>Ruh oh!  Sorry could not find what you are looking for.</h1>
      </div>
    );
  }
}
