import React from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Done from 'material-ui/svg-icons/action/done';
import * as actions from '../actions.js';

const Bar = ({showRead, toggleFilter}) => {
  const buttonColor = showRead ? '#69F0AE' : '#CCCDCC';
  return (
      <AppBar
        title="Liked tweets"
        iconElementRight={<IconButton onClick={toggleFilter} touch={true} style={{
          backgroundColor: buttonColor,
          borderRadius: '50%'
        }}><Done /></IconButton>}
        showMenuIconButton={false} />
  );
};

export default connect(state => ({
  showRead: state.showRead
}), actions)(Bar);
