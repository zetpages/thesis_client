import {makeAutoObservable} from "mobx";

export default class UserAuth {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._id = "";
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    getUs(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}