import React from 'react';

class List extends React.Component {
    render() {
        const { name, age, race, weapon } = this.props.character;
        return (
            <li>{name}-{age}-{race}-{weapon}</li>
        )
    }
}

export default List;