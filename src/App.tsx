import './App.css'
import Router from "@/routes";
import AuthRouter from "@/routes/utils/authRouter";
import React from "react";

const App: React.FC = () => {
    return (
        <AuthRouter>
            <Router/>
        </AuthRouter>
    )
}
export default App;
