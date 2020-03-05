import React from 'react';
import FormInput from '../form_input/FormInput';
import CustomButton from '../custom_button/CustomButton';
import { signInWithGoogle } from '../firebase/FirebaseUtils';
import './SignIn.scss';


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''

    }
  }

  handleSubmit = event => {
    event.preventDefault();
    // this.setState({ email: '', password: '' });
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email' 
            type='email' 
            value={this.state.email} 
            handleChange={this.handleChange}
            label='email'
            required 
          />

          <FormInput 
            name='password' 
            type='password' 
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required 
          />
          <div className='buttons'>
            <CustomButton type='submit'>sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {''}
              sign in with google
          </CustomButton>
          </div>        
        </form>
      </div>
    )
  }
}

export default SignIn;