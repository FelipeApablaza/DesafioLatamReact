import React from 'react';
import './Hero.css';

class Hero extends React.Component {
    render() {
        const {name, age, weapon, race, useRing, killed} = this.props.objeto;
        const {onClickRing, index, onClickKill} = this.props;
        return (
            <tr 
                className='character-row'
                style={{color: killed ? 'red' : 'white'}}
                >
                <td>{name}</td>
                <td>{race}</td>
                <td>{age}</td>
                <td>{weapon}</td>
                <td>
                    <div className={'controls'}>
                        <div onClick={() => onClickKill(index)}>☠ Kill</div>
                        <div style={{display: useRing ? 'none' : ''}} onClick={() => onClickRing(index)}>💍 Use Ring</div>
                    </div>
                </td>
            </tr>

        );
    }
}

export default Hero;