import {makeAutoObservable, observable} from "mobx";
import {getToken, setToken} from "@/utils/token";

class Global {
    token: string = getToken() || "";
    authRouter: any = [];
    isCollapse: boolean = false;
    setToken = (token:string) => {
        this.token = token;
        setToken(token);
    }

    setCollapse = (isCollapse: boolean) => {
        this.isCollapse = isCollapse;
    }

    constructor() {
        makeAutoObservable(this);
    }
}

export default new Global();