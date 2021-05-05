export class User {


    constructor(
        private _fullname?: String,
        private _lastname?: String,
        private _email?: String,
        private _photo?:String,
        private _service?:String,
        private _function?:String,
        private _password?: String,
    ) { }
    
    public getFullname(): String {
        return this._fullname
    }
    public setFullname(value: String): void {
        this._fullname = value
    }
    get lastname(): String {
        return this._lastname
    }
    set lastname(value: String) {
        this._lastname = value
    }
    set email(value: String) {
        this._email = value
    }
    get email(): String {
        return this._email
    }
    set photo(value:String) {
        this._photo = value
    }
    get photo():String{
        return this._photo
    }
    set service(value: String) {
        this._service = value
    }
    get service(): String {
        return this._service
    }
    set function(value: String) {
        this._function = value
    }
    get function(): String {
        return this._function
    }
    set password(value: String) {
        this._password = value
    }
    get password(): String {
        return this.password
    }
}
