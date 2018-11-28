// import React, { Component } from 'react';
// import SkyLight from 'react-skylight';
// class AddBoth extends Component {
// state =  {firstname : '',lastname : '', postcode:'', city:'',email:'',phone:'',date:'',duration:'',activity:''}
//     render() {
//         return (
           
//                 <div>
//                   <SkyLight hideOnOverlayClicked ref="addDialog">
//                     <h3>New car</h3>
//                     <form>
//                       <input type="text" placeholder="firstname" name="firstname" 
//                         onChange={this.handleChange}/><br/> 
//                       <input type="text" placeholder="lastname" name="lastname" 
//                         onChange={this.handleChange}/><br/>
//                         <input type="text" placeholder="streetaddress" name="streetaddress" 
//                         onChange={this.handleChange}/><br/>
//                       <input type="text" placeholder="postcode" name="postcode" 
//                         onChange={this.handleChange}/><br/>
//                       <input type="text" placeholder="city" name="city" 
//                         onChange={this.handleChange}/><br/>
//                       <input type="text" placeholder="phone" name="phone" 
//                         onChange={this.handleChange}/><br/>
//                     <input type="text" placeholder="date" name="date" 
//                         onChange={this.handleChange}/><br/>
//                     <input type="text" placeholder="duration" name="duration" 
//                         onChange={this.handleChange}/><br/>
//                     <input type="text" placeholder="activity" name="activity" 
//                         onChange={this.handleChange}/><br/>
//                       <button onClick={this.handleSubmit}>Save</button>
//                       <button onClick={this.cancelSubmit}>Cancel</button>     
//                     </form> 
//                   </SkyLight>
//                   <div>
//                       <button style={{'margin': '10px'}} 
//                         onClick={() => this.refs.addDialog.show()}>add training to customer</button>
//                   </div>
//                 </div> 
            
//         );
//     }
// }

// export default AddBoth;