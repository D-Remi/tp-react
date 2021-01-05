import React from 'react';
 
function Login() {
  const state = {
    myInputEmailValue: null,
    myInputPasswordValue: null
  }
  return (
    <div>
      <h1>ME CONNECTER</h1>
      <form>
        <label>Votre Email</label>
        <input type="text" placeholder="email" name="email" value={state.myInputEmailValue}/>
        <label>Votre mot de passe</label>
        <input type="password" placeholder="mot de passe" name="password" value={state.myInputPasswordValue}/>
        <button type="submit" onclick={connect}>Se connecter</button>
      </form>
    </div>
  );

  function connect() {
    let email = "remi@react-it.fr";
    let password = "12345";

    if( email === state.myInputEmailValue && password === state.myPasswordValue){
      console.log('connexion ok')
    }

  }
}

export default Login;