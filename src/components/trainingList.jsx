import React, { Component } from 'react';
import axios from 'axios';
class TrainingList extends Component {
    state = {addtrainings : [], selectedTraining : ''}
    async componentDidMount(){
        const {data} = await axios.get('https://customerrest.herokuapp.com/api/trainings')
        const addtrainings = data.content;
        this.setState({addtrainings})
       // console.log(this.state.addtrainings)
    }
 
    render() {
        return (
            <ul className="list-group">
            {this.state.addtrainings.map((m,index)=> 
                <li key = {index} onClick = {()=>this.props.onItemSelection(m)} 
                style = {{cursor: "pointer"}}
                className={m === this.props.selectedTraining ? "list-group-item active" : "list-group-item"}>{m.activity}</li>
                )}
            </ul>

            

        )

    }
}


export default TrainingList;