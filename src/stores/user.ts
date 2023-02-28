import {makeAutoObservable} from "mobx";

class User {
    session = [];

    constructor() {
        makeAutoObservable(this);
    }

    setSession = (session: []) => {
        this.session = session;
    }
}

export default new User();