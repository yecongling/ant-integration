import React from "react";
import {inject, observer} from "mobx-react";

const Login: React.FC = (global: any)=> {
    return (
        <div className="login-container">
            登陆div
        </div>
    )
}

export default inject("global")(observer(Login));