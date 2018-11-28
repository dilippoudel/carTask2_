import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import AddCustomer from './addCustomer';
import TrainingList from './trainingList';
class Customers extends Component {
    constructor(props){
        super(props);
        this.state = {customers : []}
    }
componentDidMount(){
    this.fetchCustomer();
}
fetchCustomer = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then((response) => response.json()) 
    .then((responseData) => { 
      this.setState({ 
        customers: responseData.content,
      }); 
    })
    .catch(err => console.error(err)); 

}
onDelClick = (link) => {
    fetch(link, {method: 'DELETE'})
    .then(res => {
      toast.success("customer deleted", {
        position: toast.POSITION.BOTTOM_LEFT
      });
      this.fetchCustomer();
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
  addCustomer(car) {
    fetch( 'https://customerrest.herokuapp.com/api/customers', 
      { method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car)
      })
    .then(res => this.fetchCustomer())
    .catch(err => console.error(err))
  } 
  addTrainings = () => {
    console.log('added')
  }
    render() {
        const columns = [{
            Header: 'Firstname',
            accessor: 'firstname'
          }, {
            Header: 'Lastname',
            accessor: 'lastname'
          }, {
            Header: 'Address',
            accessor: 'streetaddress'
          }, {
            Header: 'City',
            accessor: 'city'
          }, {
            Header: 'Email',
            accessor: 'email'
          },
          {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            id: 'delbutton',
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: ({value}) => (<button className = "btn btn-danger" onClick={()=>{this.confirmDelete(value)}}>Delete</button>)
          },  {
            id: 'addbutton',
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: ({value}) => (<button className= "btn btn-primary" onClick={()=>{this.addTrainings(value)}}>Add Training</button>)
          }
        ]
        return (
            <div className = "row">
            <div className="col-2">
            <TrainingList />
            </div>
            <div className="col">
            <AddCustomer addCustomer={this.addCustomer} fetchCustomer={this.fetchCustomer}/>
                <ReactTable 
                data = {this.state.customers} 
                columns = {columns} 
                filterable = {true}
                defaultPageSize = {5}/>
                <ToastContainer autoClose={1500} /> 
            </div>
        
            </div>
        );
    }
}

export default Customers;