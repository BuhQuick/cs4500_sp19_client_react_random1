import React from 'react'

const Login = ({handleChange, handleLogin}) =>
    <div className="container">
        <h1>Welcome back</h1>
        <br/>
        <div>
            <div className="row">
                <div className="col-12">
                    <label for="username">Username</label>
                    <input id="username" className="form-control" onChange={handleChange}/>
                </div>
                <div className="col-12">
                    <br/>
                    <label for="password">Password</label>
                    <input id="password" className="form-control" onChange={handleChange}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label for="password">
                        <input type="checkbox"/>
                        &nbsp; Remember me
                    </label>
                </div>
                <div className="col-12">
                    <a className="float-right" href="#">Forgot password?</a>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <button onClick={handleLogin} id="loginBtn" className="btn btn-primary btn-block">
                        Log in
                    </button>
                </div>
            </div>
        </div>
    </div>

export default Login