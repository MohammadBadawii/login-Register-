import React , {Component} from 'react'
import {Link , withRouter} from 'react-router-dom'
class Navbar extends Component{
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render(){
        const RegularLinks = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/loginnn" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const UserLinks = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        User
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>

                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
            </ul>
        )

        return(
            <div className="nav navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                        type="button"
                        data-toggle ="collapse"
                        data-target ="#navbar1"
                        aria-controls="navbar1"
                        aria-expanded="false"
                        aria-label = "toggle navigation"
                >
                   <span className="navbar-toggler-icon"></span>     
                </button>

                <div className="collapse navbar-collapse justify-conetent-md-center" id="navbar1">
                    <ul className ="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? UserLinks : RegularLinks}
                </div>
            
            </div>


        
        )
    }

} 

export default withRouter(Navbar)