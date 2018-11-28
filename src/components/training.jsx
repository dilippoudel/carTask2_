import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTrainings from './addTraining';
import moment from 'moment';
class Training extends Component {
    constructor(props){
        super(props);
        this.state = {trainers : [], date: moment().format('LLLL')}
    }
    componentDidMount(){
        this.fetchTraining();
    }
    fetchTraining = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then((response) => response.json()) 
        .then((responseData) => { 
          this.setState({ 
            trainers: responseData.content,
          }); 
        })
        .catch(err => console.error(err)); 
    
    }
    onDelClick = (link) => {
      fetch(link, {method: 'DELETE'})
      .then(res => {
        toast.success("Training deleted", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        this.fetchTraining();
      })
      .catch(err => {
        toast.error("Error when deleting", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        console.error(err)
      }) 
     }
    confirmDelete = (link) => {
      confirmAlert({
        message: 'Are you sure to delete?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => this.onDelClick(link)
          },
          {
            label: 'No',
          }
        ]
      })
    }
    addTraining(training) {
      fetch( 'https://customerrest.herokuapp.com/api/trainings', 
        { method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(training)
        })
      .then(res => this.fetchTraining())
      .catch(err => console.error(err))
    } 


        render() {
            const columns = [{
                Header: 'Date and Time',
                accessor: 'date',
                sortable: true,
                filterable : true,
                Cell: a => {
                  return moment(a.updated_at).local().format("DD-MM-YYYY   hh:mm:ss a")
                }
              }, {
                Header: 'Duration',
                accessor: 'duration'
              }, {
                Header: 'Activity',
                accessor: 'activity'
              },
            {
                id: 'delbutton1',
                sortable: false,
                filterable: false,
                width: 100,
                accessor: 'links[0].href',
                Cell: ({value}) => (<button onClick={()=>{this.confirmDelete(value)}}>Delete</button>)
              }
            ]
            return (
                <div>
                  <AddTrainings 
                  addTraining={this.addTraining} 
                  fetchTraining={this.fetchTraining}/>
                    <ReactTable 
                    data = {this.state.trainers} 
                    columns = {columns} 
                    filterable = {true}
                    defaultPageSize = {5}/>
                    <ToastContainer autoClose={1500}  /> 
                </div>
            );
        }
    }
export default Training;