import {makeAutoObservable} from "mobx";

class Global {
    token = "";
    constructor() {
        makeAutoObservable(this);
    }
}
export default new Global();