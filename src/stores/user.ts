import {makeAutoObservable} from "mobx";

class User {
    route: any = [];
    constructor() {
        makeAutoObservable(this);
    }
}
export default new User();