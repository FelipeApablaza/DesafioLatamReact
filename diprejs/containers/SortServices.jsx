import React,{ Component } from 'react';
import ServList from '../components/ServiceList';

export default class SelectProp extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "HigherToLowerPrice",
                       items: [],
                       notItems: true,
                    };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        // console.log('component did mounttttt');
        const items = await fetch('/services/servicesListReact/sorter', {
            method: 'GET',
          headers:{ 
            Accept: 'application/json',
         },
        })
          .then(response => response.json())
          .catch(error => console.log("ola"));

    
        if (items.length){
            items.sort((a,b) => (a.cost > b.cost ? 1: -1));
            // console.log('component did mounttttt');
            // console.log(items);
            this.setState({ items , notItems: false })

        }

        
      }

    handleChange(event) {
        this.setState({ value: event.target.value });


    }
    handleSubmit(event) {
        
        event.preventDefault();
        // alert('Los servicios serán ordenados por: ' + this.state.value);
        const { items } = this.state 
        if (this.state.value === "LowerToHigherPrice"){
            items.sort((a,b) => (a.cost < b.cost ? 1: .1));
        }
        else if (this.state.value === "HigherToLowerPrice"){
            items.sort((a,b) => (a.cost > b.cost ? 1: .1));
        }
        else if (this.state.value === "AlphAsc"){
            items.sort((a,b) => (a.name > b.name ? 1: .1));
        }
        else if (this.state.value === "AlphDesc"){
            items.sort((a,b) => (a.name < b.name ? 1: .1));
        }

        this.setState({ items });
    }
    render() {
        if (!this.state.notItems){
            return (
                <div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                        <label>
                            Ordenar por:
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="HigherToLowerPrice">Precio: Mayor-Menor</option>
                                <option value="LowerToHigherPrice">Precio: Menor-Mayor</option>
                                <option value="AlphAsc">Alfabéticamente: A-Z</option>
                                <option value="AlphDesc">Alfabéticamente: Z-A</option>
                            </select>
                            </label>
                            <input type="submit" value="Ordenar" />
                        </form>
                    </div>
                    <ServList items = {this.state.items} />
                </div>
                );
        } else {
            return (
                <div>
                    <p>No hay servicios aún</p>
                </div>
            );
            
        }
        
    }
}