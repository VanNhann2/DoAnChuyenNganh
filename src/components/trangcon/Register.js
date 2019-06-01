import React, { useState } from 'react';
import '../../css/style1.css';
import {Link, withRouter} from 'react-router-dom'
import firebase from '../../connectdb/firebase'

function Register(props) {
    //const { classes } = props

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [quote, setQuote] = useState('')

        return (
            <div>
                <form id="registration_form"  onSubmit={e => e.preventDefault() && false } >
  {/* <div>
    <label>
      <input placeholder="first name:" type="text" tabIndex={1} required autofocus />
    </label>
  </div> */}
  <div>
    <label>
      <input placeholder="Name" type="text" tabIndex={2} required autofocus value={name} onChange={e => setName(e.target.value)} />
    </label>
  </div>
  <div>
    <label>
      <input placeholder="email address:" type="email" tabIndex={3} required value={email} onChange={e => setEmail(e.target.value)}/>
    </label>
  </div>
  {/* <div className="sky-form">
    <div className="sky_form1">
      <ul>
        <li><label className="radio left"><input type="radio" name="radio" defaultChecked /><i />Male</label></li>
        <li><label className="radio"><input type="radio" name="radio" /><i />Female</label></li>
        <div className="clearfix" />
      </ul>
    </div>
  </div> */}
  <div>
    <label>
      <input placeholder="password" type="password" tabIndex={4} required value={password} onChange={e => setPassword(e.target.value) }/>
    </label>
  </div>						
  <div>
    <label>
      <input placeholder="quote" type="text" tabIndex={4} required value={quote} onChange={e => setQuote(e.target.value)}/>
    </label>
  </div>	
  <div>
    <input type="submit" defaultValue="create an account" id="register-submit" onClick={onRegister} />
  </div>
  <div className="sky-form">
    <label className="checkbox"><input type="checkbox" name="checkbox" /><i />i agree to shoppe.com &nbsp;<a className="terms" href="#"> terms of service</a> </label>
  </div>
</form>

            </div>
        )
        async function onRegister() {
          try {
            await firebase.register(name, email, password)
            await firebase.addQuote(quote)
            props.history.replace('/home')
          } catch(error) {
            alert(error.message)
          }
        }
    }


export default withRouter(Register);