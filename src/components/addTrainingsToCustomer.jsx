// import React, { Component } from 'react';
// import ReactTable from 'react-table';

// import 'react-table/react-table.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import moment from 'moment';
// const api = 'https://customerrest.herokuapp.com/'
// class CustomerAndTraining extends Component {
//   state = { customerTraining: [], dt: moment().format('LLLL')
//  };

//   componentDidMount() {
//     this.customerTrainings();
//   }

//   customerTrainings = () => {
//     fetch(api)
//       .then((response) => response.json())
//       .then((responseData) => {
//         console.log(responseData);
//         this.setState({
//           customerTraining: responseData
//         });

//       })
//   }
//   addCar(car) {
//     fetch(api + 'api/customers', 
//       { method: 'POST', 
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(car)
//       })
//     .then(res => this.fetchCars())
//     .catch(err => console.error(err))
//   } 


//   render() {
//     return (
//       <div className="App-body">

//         <ReactTable data={this.state.customerTraining}
//           columns={[
//             {
//               Header: "Customer Info",
//               columns: [

//                 {
//                   Header: "First Name",
//                   accessor: "customer.firstname",
//                 },
//                 {
//                   Header: "Address",
//                   accessor: "customer.streetaddress",
//                 },
//                 {
//                   Header: "Postcode",
//                   accessor: "customer.postcode",
//                 },
//                 {
//                   Header: "City",
//                   accessor: "customer.city",
//                 },
//                 {
//                   Header: "E-mail",
//                   accessor: "customer.email",
//                 },
//                 {
//                   Header: "Phone",
//                   accessor: "customer.phone",
//                 }

//               ]
//             },
//             {
//               Header: "Training Info",
//               columns: [
//                 {
//                   Header: "Date",
//                   accessor: "date",
//                 },
//                 {
//                   Header: "Duration",
//                   accessor: "duration",
//                 },

//                 {
//                   Header: "Activity",
//                   accessor: "activity",
//                 }
//               ]
//             }
//           ]}
//           filterable = {true}
//           defaultPageSize={6}
//           style={{ margin: "0px 10px", height: "450px" }}
//           className="-highlight" >
//         </ReactTable>



//       </div>
//     );
//   }
// }

// export default CustomerAndTraining;