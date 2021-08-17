/**
 * Clase que representa objetos de Riego
 */
export class Spray{
    private _logRiegoId:number;
    private _apertura:number;
    private _fecha: Date;
    private _electrovalvulaId:number;

    /**
     * Copnstructor que define un objeto de tipo riego
     * @param logRiegoId Id del log de riego
     * @param apertura Indica con valor 0 si la valvula esta cerrada o 1 si la valvula esta abierta
     * @param fecha Fecha del log de riego
     * @param electrovalvulaId Id de la electrovalvula que efectuo alguna tarea de log
     */
    constructor(logRiegoId, apertura, fecha, electrovalvulaId){
        this._logRiegoId = logRiegoId;
        this._apertura=apertura;
        this._fecha=fecha;
        this._electrovalvulaId=electrovalvulaId;
    }

    /**
     * Devuelve Id del log de riego
     */
    public get logRiegoId(){
        return this._logRiegoId;
    }
    /**
     * Setea Id del log de riego
     */
    public set logRiegoId(value:number){
        this._logRiegoId = value;
    }
    /**
     * Devuelve status del riego
     */
    public get apertura(){
        return this._apertura;
    }
    /**
     * Setea status del riego
     */
    public set apertura(value:number){
        this._apertura = value;
    }
    /**
     * Devuelve la fecha del log de riego
     */
    public get fecha(){
        return this._fecha;
    }
    /**
     * Setea la fecha del log de riego
     */
    public set fecha(value:Date){
        this._fecha = value;
    }
    /**
     * Devuelve Id de la electrovalvula
     */
    public get electrovalvulaId(){
        return this._electrovalvulaId;
    }
    /**
     * Setea Id de la electrovalvula
     */
    public set electrovalvulaId(value:number){
        this._electrovalvulaId = value;
    }
}