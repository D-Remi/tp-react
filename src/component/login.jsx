import React, { Component} from 'react';

class  Login extends Component{
    render(){
        return <div>
            <h1>Me Connecter</h1>
            <form target="/login" method="post">
                <label for="email">Votre email</label>
                <input type="text" placeholder="email" name="email"/>
                <label for="password">Votre mot de passe</label>
                <input type="text" name="password" placeholder="mot de passe"/>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    }
}