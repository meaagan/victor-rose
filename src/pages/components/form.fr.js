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
    this.state= {text: 'Soumettre'}
  }
  state = {
    prenom: "",
    nom: "",
    email: "",
   };

   handleClick = e => {
     fetch("/", {
       method: "POST",
       headers: { "Content-Type": "application/x-www-form-urlencoded"},
       body: encode({ "form-name": "contact", ...this.state })
      })
        .catch(error => alert("Erreur! S'il-vous-plaît remplissez tous les champs requis"))
        .then(() => this.setState({text:'Reçu!'}))
        

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
              label="Prénom"
              type="text"
              name="prenom"
              value={this.state.prenom}
              onChange={this.handleInputChange}
              variant="outlined"
              size="small"
              required
            />
          </Field>
          <Field>
            <TextField
              fullWidth
              label="Nom"
              type="text" 
              name="nom"
              value={this.state.nom}
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
              multiline
              rows={8}
              variant="outlined"
              size="small"
              required
            />
          </Field>
          <Field>
            <Button variant="contained" type="submit" onClick= {this.handleClick}>
              {this.state.text}
            </Button>
          </Field>
        </form>
    )
  }
}

const Field = styled.p`
  margin: 10px;
`

export default Form