import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        
        
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
          Name : '',
          Address : '',
          Contact : '',
          Age : '',
          Text : '',
          NameError : '',
          AddressError : '',
          ContactError : '',
          AgeError : '',
          TextError: ''
        
        }
    }
    onChangeName(e){
        this.setState({
            Name: e.target.value
        });
    }
    onChangeAddress(e){
        this.setState({
            Address:e.target.value
        });
    }
    onChangeContact(e){
        this.setState({
            Contact: e.target.value
        });
    }
    onChangeAge(e){
        this.setState({
            Age:e.target.value
        });
    }
    onChangeText(e){
        this.setState({
            Text:e.target.value
        });
    }
    validate = () => {
      let isError=false;
      const errors = {
          NameError: "",
          AddressError: "",
          ContactError: "",
          AgeError: "",
          TextError: ""
      };
  
    
        if (this.state.Name<1) {
            isError = true;
            errors.NameError = "Requires valid name";
         
        }
    
        if (this.state.Address<1) {
            isError = true;
            errors.AddressError = "Requires valid address";
         
        }

        if (this.state.Contact<1) {
            isError = true;
            errors.ContactError = "Requires valid contact";
         
        }

        if (!this.state.Age) {
            isError = true;
            errors.AgeError = "Requires valid age";
        }
        
        if (!this.state.Text) {
            isError = true;
            errors.TextError = "Requires valid text";
        }
        this.setState({
            ...this.state,
            ...errors
          });

     
        console.log("is validated:" +this.state.isValidated); 
        return isError;
      };
    onSubmit(e){
      e.preventDefault();
      const err = this.validate();
      
    if (!err) {
     
  
      const newMsg={
  
         Name: this.state.Name,
          Address :this.state.Address,
          Contact :this.state.Contact,
          Age : this.state.Age,
          Text : this.state.Text
       
      }
        

      axios.post('/addmessage', newMsg)
      .then().catch(err=> console.log(err));
  
       
  
      this.setState({
  
          Name:'',
          Address:'',
          Contact:'',
          Age:'',
          Text:'',
          NameError:'',
          AddressError:'',
          ContactError:'',
          AgeError:'',
          TextError:''
          
      })
    }
   
  }

      render() {

   
        let modalId,modalClass;
    
        if (this.state.Name<1 || this.state.Address<1 || this.state.Contact<1 || this.state.Age<1 || this.state.Text<1) {
          modalId="";
          modalClass=""
        } else {
          modalId="#Modal2";
          modalClass="modal";
        }
       return(
            <div className="pt-5 pb-5" style={{background:"black"}}>
                           <div className="container pt-5" id="contact" style={{padding: "4px 4px",outlineStyle: "double", outlineWidth: "4px",outlineColor:"black",background:"#EEE8AA"}}>
                                <h1 className="text-center text-capitalize pt-3">contact us</h1>
                                    <hr className="w-25 mx-auto pt-3"></hr>
                                <div className="w-50 mx-auto " > 
                                
                                    <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                            <label htmlFor ="name" style={{fontSize: "20px"}}>Name :</label>
                                            <input type="text" className="form-control" id="name" autoComplete="off"  value={this.state.Name}
                                             onChange={this.onChangeName}></input>


                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.NameError}
                                            </div>
                                    </div>
                                    
                                    <div className="form-group">
                                            <label htmlFor="address"style={{fontSize: "20px"}}>Address :</label>
                                            <input type="text" className="form-control" id="address" autoComplete="off" value={this.state.Address}
                                            onChange={this.onChangeAddress}></input>


                                           <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.AddressError}
                                            </div>
                                        </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="contact"style={{fontSize: "20px"}}>Contact :</label>
                                        <input type="number" className="form-control" id="contact" autoComplete="off" value={this.state.Contact}
                                         onChange={this.onChangeContact}></input>

                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.ContactError}
                                            </div>

                                    </div>
                                            

                                    <div className="form-group">
                                        <label htmlFor="age"style={{fontSize: "20px"}}>Age :</label>
                                        <input type="number" className="form-control" id="age"  value={this.state.Age}
                                          onChange={this.onChangeAge}></input>

                                           <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.AgeError}
                                            </div>

                                    </div>

                                    <div className="form-group">
                                        <label style={{fontSize: "20px"}}>Message :</label>
                                            <textarea className="form-control "  value={this.state.Text}
                                            onChange={this.onChangeText}></textarea>


                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.TextError}
                                            </div>

                                    </div>

                                    
                                    <div className="row pt-3 mb-3 ">
                                        <div className="col text-center">
                                        <button type="submit"  className="btn btn-dark  mb-5 btn-lg" data-toggle={modalClass} data-target={modalId} >Send</button>
                                            
                                    </div>
                       
                                    <div className="modal" id="Modal2">
                                    <div className="modal-dialog">
                                            <div className="modal-content">
                                            
                                            
                                                <div className="modal-body">
                                                 <h4 className="text-primary text-center">Thankyou for submission :)</h4>
                                                </div>
                                                
                                            
                                                <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    

                                 

                                    </div>
                               
                                    
                                    

                                    
                                    </form>
                                    
                                    
                                </div>
                            </div>



            </div>
        );
    }
}

export default Contact;