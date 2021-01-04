import React from 'react';
 
function Login() {
  return (
    <div>
      <h1>me CONNECTER</h1>
      <form>
        <label>Votre Email</label>
        <input type="text" placeholder="email" name="email"/>
        <label>Votre mot de passe</label>
        <input type="password" placeholder="mot de passe" name="password"/>
        <button type="submit" onclick="connect()">Se connecter</button>
      </form>
    </div>
  );

  function connect() {
    //
  }
}

export default Login;