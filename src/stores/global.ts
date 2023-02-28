import {makeAutoObservable} from "mobx";

class Global {
    token: string = "123";
    authRouter: any = [];

    constructor() {
        makeAutoObservable(this);
    }
}

export default new Global();