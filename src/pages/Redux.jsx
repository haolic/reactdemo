import React from 'react';
import { connect } from 'react-redux';

const ReduxPage = props => {
  const click = () => {
    props.dispatch({
      type: 'add',
      payload: { count: props.count + 1 },
    });
  };
  return (
    <div>
      <div>{props.count}</div>
      <div>
        <button onClick={click}>点击</button>
      </div>
    </div>
  );
};

export default connect(state => {
  return {
    count: state.count,
  };
})(ReduxPage);
