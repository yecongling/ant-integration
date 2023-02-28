import {makeAutoObservable} from "mobx";

class Global {
    token = "";
    constructor() {
        makeAutoObservable(this);
    }

    setToken = (token: string) => {
        this.token = token;
    }
}
export default new Global();