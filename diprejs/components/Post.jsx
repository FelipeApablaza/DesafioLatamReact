/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* const Container = styled.div`
  border: 2px solid #333;
  box-sizing: border-box;
  flex-grow: 1;
  margin: 10px;
  min-width: 280px;
  padding: 0 20px;
  width: 30%;
  background-color: #fff;
`; */

export default function Post(props) {
  return (
    <container>
      <h1>{props.id}</h1>
      <p>{props.text}</p>
    </container>
  );
}


Post.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
