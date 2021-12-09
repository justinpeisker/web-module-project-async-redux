import React from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions';

const Person = (props) => {

    const { joke, isFetching } = props

    const handleClick = () => {
        props.getJoke()
    }

    if(isFetching){
        return <h4> One sec, we're getting a joke for ya! </h4>
    }

    return(
        <div>
             <h4> {joke} </h4>
                <form>
                    <button onClick= {handleClick}> Get a random joke!</button>
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

export default connect(mapStateToProps, {getJoke})(Person);