import React from "react"
import { TextField, Button } from '@material-ui/core'
import styled from 'styled-components';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Form extends React.Component {
  constructor(){
    super();
    this.state= {text: 'Submit'}
  }
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
   };

   handleClick = e => {
     fetch("/", {
       method: "POST",
       headers: { "Content-Type": "application/x-www-form-urlencoded"},
       body: encode({ "form-name": "contact", ...this.state })
      })
      .catch(error => alert("Error! Please fill out all required fields"))
      .then(() => this.setState({text:'Sent!'}))

      e.preventDefault();
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
          <Field>
            <TextField
              fullWidth
              label="Prénom/First Name"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              variant="outlined"
              size="small"
              required
            />
          </Field>
          <Field>
            <TextField
              fullWidth
              label="Nom/Last name"
              type="text" 
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              variant="outlined"
              size="small"
              required
            />
          </Field>
          <Field>
            <TextField
              fullWidth 
              label="Email"
              type="email" 
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              variant="outlined"
              size="small"
              required
            />
          </Field>
          <Field>
            <TextField
              fullWidth
              label="Message"
              id="outlined-multiline-static" 
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              multiline
              rows={8}
              variant="outlined"
              size="small"
              required
            />
          </Field>
          <Field>
            <Button variant="contained" type="submit" onClick={this.handleClick}>
              {this.state.text}
            </Button>
          </Field>
        </form>
    )
  }
}

const Field = styled.div`
  margin-bottom: 10px;
`

export default Form