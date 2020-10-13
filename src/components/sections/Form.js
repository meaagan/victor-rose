import React from "react"
import { TextField, Button } from '@material-ui/core'

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
   };

   handleClick = event => {
       alert("Thank you for your input")
   }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  };


  render (){
    return (
        <form 
          name="contact" 
          method="POST"
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          Content-Type="application/x-www-form-urlencoded"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <TextField
              label="First Name"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              variant="outlined"
              size="small"
            />   
          </p>
          <p>
            <TextField
              label="Last name"
              type="text" 
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              variant="outlined"
              size="small"
            />
          </p>
          <p>
            <TextField 
              label="Email"
              type="email" 
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              variant="outlined"
              size="small"
            />
          </p>
          <p>
            <TextField
              label="Message"
              id="outlined-multiline-static" 
              name="message"
              multiline
              rows={4}
              variant="outlined"
              size="small"
            />
          </p>
          <p>
            <Button variant="contained" type="submit" onClick={this.handleClick}>
              Send
            </Button>
          </p>
        </form>
    )
  }
}

export default Form