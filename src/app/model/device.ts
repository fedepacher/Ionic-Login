export class Device{

    private _id:number = 0;
    private _name:string = "";
    private _location:string="";
    private _valveId:number = 0;
    private _icon:string = "";

    constructor(id:number, name:string, location:string, valveId:number, icon:string){
        this._id = id;
        this._name = name;
        this._location = location;
        this._valveId = valveId;
        this._icon = icon;
    }

    public get id() : number{
        return this._id;
    }
    public get name() : string{
        return this._name;
    }
    public get location() : string{
        return this._location;
    }
    public get valveId() : number{
        return this._valveId;
    }

    public get icon() : string{
        return this._icon;
    }

    public set id(value:number){
        this._id = value;
    }
    public set name(value:string){
        this._name = value;
    }
    public set location(value:string){
        this._location = value;
    }
    public set valveId(value:number){
        this._valveId = value;
    }
    public set icon(value:string){
        this._icon = value;
    }
}