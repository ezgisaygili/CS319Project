import React from 'react';
import "./Home.css"
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    componentDidMount(){
        this.props.history.push('/home');
    }

    render(){
        return(
            <div className="field2">
            <header>
              <p>
                Classroom Helper
              </p>
           </header>
              <form>
                <label>
                  Email:
                  <input type="text" name="Email"/>
                </label>
              </form>
    
              <form>
                <label>
                  Password:
                  <input type="text" name="Password" />
                </label>
              </form>
    
              <Link to="/MyGroup">  <button>Login</button>   </Link>  
              <Link to="/SignUpPageStudent">  <button>Sign-up</button>   </Link>
          </div>
          )
        ;
    }
}
  