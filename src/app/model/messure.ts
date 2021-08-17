/**
 * Clase que representa un objeto de tipo Medicion
 */
export class Messure{
    private _medicionId: number;
    private _fecha: Date; 
    private _valor: number;
    private _dispositivoId: number;

    /**
     * Copnstructor que define un objeto de tipo medicion
     * @param medicion Id de la medicion del dispositivo
     * @param fecha Fecha de la medicion del dispositivo
     * @param valor Valor de la medicion del dispositivo
     * @param dispositivoId Id del dispositivo
     */
    constructor(medicion,fecha,valor,dispositivoId){
        this._medicionId=medicion;
        this.fecha=fecha;
        this._valor=valor;
        this._dispositivoId=dispositivoId;
    }

    /**
     * Devuelve el Id de la medicion del dispositivo
     */
    public get medicionId(): number {
        return this._medicionId;
    }
    /**
     * Setea Id de la medicion del dispositivo
     */
    public set medicionId(value: number) {
        this._medicionId = value;
    }
    /**
     * Devuelve fecha de la medicion del dispositivo
     */
    public get fecha(): Date {
        return this._fecha;
    }
    /**
     * Setea fecha de la medicion del dispositivo
     */
    public set fecha(value: Date) {
        this._fecha = value;
    }
    /**
     * Devuelve valor de la medicion del dispositivo
     */
    public get valor(): number {
        return this._valor;
    }
    /**
     * Setea valor de la medicion del dispositivo
     */
    public set valor(value: number) {
        this._valor = value;
    }
    /**
     * Devuelve id del dispositivo
     */
    public get dispositivoId(): number {
        return this._dispositivoId;
    }
    /**
     * Setea Id del dispositivo
     */
    public set dispositivoId(value: number) {
        this._dispositivoId = value;
    }
}