export class Spray{
    private _logRiegoId:number;
    private _apertura:number;
    private _fecha: Date;
    private _electrovalvulaId:number;

    constructor(logRiegoId, apertura, fecha, electrovalvulaId){
        this._logRiegoId = logRiegoId;
        this._apertura=apertura;
        this._fecha=fecha;
        this._electrovalvulaId=electrovalvulaId;
    }

    public get logRiegoId(){
        return this._logRiegoId;
    }
    public set logRiegoId(value:number){
        this._logRiegoId = value;
    }

    public get apertura(){
        return this._apertura;
    }
    public set apertura(value:number){
        this._apertura = value;
    }

    public get fecha(){
        return this._fecha;
    }
    public set fecha(value:Date){
        this._fecha = value;
    }

    public get electrovalvulaId(){
        return this._electrovalvulaId;
    }
    public set electrovalvulaId(value:number){
        this._electrovalvulaId = value;
    }
}