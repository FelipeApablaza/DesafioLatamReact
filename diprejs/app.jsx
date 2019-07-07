import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './containers/ServiceInfo';
import SortServices  from './containers/SortServices';

// const reactAppContainer = document.getElementById('react-app');
const reactAppContainer1 = document.getElementById('react-comments');
const reactAppContainer2 = document.getElementById('reactSortServices');


if (reactAppContainer1) {
  ReactDOM.render(<Comment />, reactAppContainer1);
}
if(reactAppContainer2) {
  ReactDOM.render(<SortServices />, reactAppContainer2);
}
