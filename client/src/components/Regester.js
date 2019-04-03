import React , {Component} from 'react'
import {register} from "./UserFunctions"
import {Link , withRouter} from 'react-router-dom'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            first_name : '',
            last_name : '',
            phone : '',
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
            first_name :  this.state.first_name,
            last_name :  this.state.last_name,
            phone :  this.state.phone,
            email : this.state.email,
            password : this.state.password
        }

        register(user).then(res =>{
            this.props.history.push("/login")
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
                            <label for="first_name">First Name </label>
                            <input  type="text"
                                    className="form-control"
                                    name="first_name"
                                    placeholder="Enter First Name"
                                    value = {this.state.first_name}
                                    onChange={this.onChange}/>
                          </div>
                          <div className="form-group">
                            <label for="last_name">Last Name </label>
                            <input  type="text"
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Enter "
                                    value = {this.state.last_name}
                                    onChange={this.onChange}/>
                          </div>
                          <div className="form-group">
                            <label for="phone">Phone</label>
                            <input  type="phone"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Enter phone"
                                    value = {this.state.phone}
                                    onChange={this.onChange}/>
                          </div>
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
                              Register
                          </button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(Register)