import React , {Component} from 'react'
import {login} from "./UserFunctions"
import {Link , withRouter} from 'react-router-dom'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email : '',
            password: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            email : this.state.email,
            password : this.state.password
        }

        login(user).then(res =>{
            if(res){
                this.props.history.push("/profile")
            }
        }).catch(err =>{
            console.log("err" + err )
        })
    }

    render(){
        return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form novalidate onSubmit={this.onSubmit}>
                                <h1 className="h3 mb3 font-weight-normal">
                                    Please sign in
                                </h1>
                                <div className="form-group">
                                    <label for="email">Email Address</label>
                                    <input  type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Enter Email"
                                            value = {this.state.email}
                                            onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input  type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Enter password"
                                            value = {this.state.password}
                                            onChange={this.onChange}/>
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary btb-block">
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}

export default withRouter(Login)