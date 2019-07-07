import React from 'react';
import Hero from './Hero';

class HeroTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayCharacters: props.arreglo
        };
    }

    handlerClickRing = index => {
        const { arrayCharacters } = this.state;
        this.setState({
            arrayCharacters: arrayCharacters
                .map(item => ({ ...item, useRing: true }))
                .filter((item, idx) => idx !== index)
        });
    };

    handlerClickKill = index => {
        const currentItem = this.state.arrayCharacters[index];
        currentItem.killed = true;
        this.setState({
            arrayCharacters: this.state.arrayCharacters
                .filter((item, idx) => idx !== index)
                .concat({ ...currentItem })
        });
    };

    render() {
        console.log(this.state.arrayCharacters);
        return (
            <table className={'characters-table'}>
                <thead>
                    <tr className={'character-row'}>
                        <th>Name</th>
                        <th>Race</th>
                        <th>Age</th>
                        <th>Weapon</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.arrayCharacters.map((objeto, indice) => {
                            return <Hero onClickKill={this.handlerClickKill} onClickRing={this.handlerClickRing}
                                index={indice} key={indice} objeto={objeto} />;
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default HeroTable;