/* eslint-disable react/button-has-type */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import TodoList from '../components/ServiceInfo';
// import commentField from '../../styles/service.scss';


export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: '',
      items: [],
      loading: true,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount(){
    const items = await fetch('/services/commentslist', {
      headers:{ 
        Accept: 'application/json',
     },
    })
      .then(response => response.json());

    // let items = []
    // // for(const [index, value] of comments.entries()){
    // //   items.push(<li ket={index}>{value.text}</li>)
    // // }
  
    this.setState({ items, loading: false})
  }

  onChange(event) {
    this.setState({ currentItem: event.target.value });
  }

 
  async onSubmit(event) {
    let obj = [
      this.state.currentItem
    ]
    await fetch('/comments/reactcomment', {
      method: 'PUT', // or 'PUT',
      body: 
        JSON.stringify({
          current: this.state.currentItem
        }),

       // data can be `string` or {object}!
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    // const items = await fetch('/services/commentslist', {
    //   headers:{ 
    //     Accept: 'application/json',
    //  },
    // })
      .then(response => response.json())
      .then(
        event.preventDefault(),
      )

    const items = await fetch('/services/commentslist', {
      headers:{ 
        Accept: 'application/json',
      },
    })
      .then(response => response.json());


    this.setState({
      currentItem: '',
      items,
    })
  }

  render() {
    const { loading, items } = this.state;
    if (loading) return <p>loading ...</p>;
    return (
      <div>
        <div>
          <h1>Comentarios</h1>
          <TodoList items={items} />
          <form onSubmit={this.onSubmit}>
            <input value={this.state.currentItem} onChange={this.onChange} />
            <button>Comentar</button>
          </form>
        </div>
      </div>
    );
  }
}