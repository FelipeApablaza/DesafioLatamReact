import React, { Component } from 'react';


export default class Clima extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "",
            retorno: "",
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(event) {
        this.setState({ current: event.target.value });
    }

    async onSubmit(event) {
        event.preventDefault();
        let localidad = this.state.current;

        const items = await fetch('http://api.meteored.cl/index.php?api_lang=cl&localidad=18267&affiliate_id=kg7hhrv225kp&v=3.0'
        , { 
            headers:{ 
                Accept: 'application/json',
                      
            }
        }) 
          .then(response => response.json())
          .catch(err => {return 'error'});
        
        console.log(items);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.current} onChange={this.onChange}/>
                    <button>conultar clima</button>
                </form>
            </div>
        )
    }

}