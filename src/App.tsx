import './App.css'
import Router from "@/routes";
import AuthRouter from "@/routes/utils/authRouter";
import {inject, observer} from "mobx-react";
import React from "react";

const App: React.FC = ({global}: any) => {
    console.log(global.token);
    return (
        <AuthRouter>
            <Router/>
        </AuthRouter>
    )
}
export default inject("global")(observer(App))
