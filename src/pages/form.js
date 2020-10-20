import React from "react"
import { TextField, Button } from '@material-ui/core'

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
   };

   handleClick = e => {
     fetch("/", {
       method: "POST",
       headers: { "Content-Type": "application/x-www-form-urlencoded"},
       body: encode({ "form-name": "contact", ...this.state })
      }) 
        .then(() => this.setState({text:'Sent!'}))
        .catch(error => alert(error))

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
            <Button variant="contained" type="submit" onClick= {this.handleClick}>
              {this.state.text}
            </Button>
            <div>
                  {/* <span>Thank you for your message! I will get back to you as soon as possible.</span> */}
            </div>
          </p>
        </form>
    )
  }
}

export default Form