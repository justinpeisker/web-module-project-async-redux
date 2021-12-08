import React from 'react';
import { connect } from 'react-redux';

const Person = (props) => {
    const { joke, isFetching, error } = props
    return(
        <div>
             <h4> Joke goes here!</h4>
                <form>
                    <button> Get a random joke!</button>
                </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
      joke: state.joke,
      isFetching: state.isFetching,
      error: state.error
    })
  }

export default connect(mapStateToProps)(Person);