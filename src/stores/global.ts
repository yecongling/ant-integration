import {makeAutoObservable, observable} from "mobx";
import {getToken, setToken} from "@/utils/token";

class Global {
    token: string = getToken() || "";
    authRouter: any = [];

    setToken = (token:string) => {
        this.token = token;
        setToken(token);
    }

    constructor() {
        makeAutoObservable(this);
    }
}

export default new Global();