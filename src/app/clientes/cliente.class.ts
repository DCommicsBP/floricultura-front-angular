export class Cliente{
    constructor(){
    }
    
    private _id : number;
    public get Id() : number {
        return this._id;
    }
    public set Id(v : number) {
        this._id = v;
    }
    
    private  _nome: string;
    public get nome() : string {
        return this._nome;
    }
    public set nome(v : string) {
        this._nome = v;
    }

    
    private _email : string;
    public get email() : string {
        return this._email;
    }
    public set email(v : string) {
        this._email = v;
    }
    
    
}