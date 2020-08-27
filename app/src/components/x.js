import React from 'react';
import { connect } from 'react-redux';
import { getX } from '../actions/action';

const XList = props => {
    const fetchX = e => {
        e.preventDefault();
        props.getX();
    };
    // console.log(props.x);
    return(
        <div className='App'>
            <h2 className='App-link'>Programming Quote Generator</h2>
            <div>
                <h4 key={new Date()}>{props.x}</h4>
            </div>
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={fetchX}>Fetch a Quote!</button>
        </div>
    )
}

const mapStateToProps = state => ({
    x: state.x,
    error: state.error
  });
  
  export default connect(
    mapStateToProps,
    { getX }
  )(XList);