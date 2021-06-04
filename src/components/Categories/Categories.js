import { Component } from 'react';

import * as petsService from '../../service/petsService';
import PetCard from '../PetCard/PetCard';
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";

class Categories extends Component {

    constructor(props){
        super(props);

        this.state = {
            pets: [],
            currentCategory: 'all',
        }
    }

    componentDidMount(){
        petsService.getAll()
            .then(res => this.setState({pets: res}))
    }

    componentDidUpdate(prevProps){
        let category = this.props.match.params.category;

        console.log(prevProps.match.params.category);
        if(prevProps.match.params.category == category){
            return;
        }

        petsService.getAll(category)
            .then(res => this.setState({pets: res, currentCategory: category}))
    }

    render() {
        return (
            <section className="dashboard" >
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map((x) => 
                        <PetCard 
                            key={x.id} 
                            name={x.name}
                            category={x.category}
                            description={x.description}
                            imageURL={x.imageURL}
                            likes={x.likes}
                        /> 
                    )}
                </ul>
            </section>
        );
    }
}

export default Categories;