import React,{useState} from 'react';
import Login from './auth/Login';
import New from './auth/New';
//import Register from './auth/Register';
//import Counter from './Counter';
import { Route, Switch } from 'react-router-dom';
import { authService } from './myBase'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
const App = () => {
  const auth = getAuth();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  console.log(authService.currentUser)

  
  const onSubmit = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    
  }
	return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input onChange={(e) => setEmail(e.target.value)}/>
          <input onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">submit</button>
        </form>
      </div>
      <Switch>
        <>
				{/* <Counter />
				<Register />
				<hr /> */}
				<Route exact path="/" component={Login} />
				<hr />
				<Route exact path="/new" component={New} />
        </>
			</Switch>
		</div>
	);
};

export default App;
