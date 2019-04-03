import React , {Components} from 'react'
import {Link , withRouter} from 'react-router-dom'

class Landing extends Components{
    render(){
        return (
            <div className="container">
            <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
                Welcome
            </div>
            </div>
            </div>
        )
    }
}

export default withRouter(Landing)