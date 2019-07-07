import React, { Component } from 'react';

export default class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const courses = await fetch('https://api.instagram.com/v1/users/self/media/recent?access_token=12308932838.1677ed0.139b8e8f53084e2ca5a16d4233a27a97', {
      headers: {
        Accept: 'application/json',
      },
    })
      // eslint-disable-next-line no-unused-expressions
      .then(response => response.text());

    this.setState({ courses, loading: false });
  }

  render() {
    const { courses, loading } = this.state;
    if (loading) return <p>Loading...</p>;
    return (
      <ul>
        {courses}
      </ul>
    );
  }
}
