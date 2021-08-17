/**
 * Clase que representa un dispositivo de tipo Device
 */
export class Device{
    private _dispositivoId: number;
    private _nombre: string; 
    private _ubicacion: string;
    private _electrovalvulaId: number;

    /**
     * Constructor de la clase Device utilizado para crear un objeto de tipo
     * @param dispositivo Id del dispositivo
     * @param nombre Nombre del dispositivo    
     * @param ubicacion Ubicacion del dispositivo 
     * @param electrovalvulaId Id de la electrovalvula asociada al dispositivo
     */
    constructor(dispositivo,nombre,ubicacion,electrovalvulaId){
        this._dispositivoId=dispositivo;
        this._nombre=nombre;
        this._ubicacion=ubicacion;
        this._electrovalvulaId=electrovalvulaId;
    }

    /**
     * Devuelve el Id del dispositivo
     */
    public get dispositivoId(): number {
        return this._dispositivoId;
    }
    /**
     * Setea el Id del dispositivo
     */
    public set dispositivoId(value: number) {
        this._dispositivoId = value;
    }

    /**
     * Devuelve el nombre del dispositivo
     */
    public get nombre(): string {
        return this._nombre;
    }
    /**
     * Setea el nombre del dispositivo
     */
    public set nombre(value: string) {
        this._nombre = value;
    }
    /**
     * Devuelve la ubicacion del dispositivo
     */
    public get ubicacion(): string {
        return this._ubicacion;
    }
    /**
     * Setea la ubicacion del dispositivo
     */
    public set ubicacion(value: string) {
        this._ubicacion = value;
    }
    /**
     * Devuelve el id de la electrovalvula del dispositivo
     */
    public get electrovalvulaId(): number {
        return this._electrovalvulaId;
    }
    /**
     * Setea el id de la electrovalcula del dispositivo
     */
    public set electrovalvulaId(value: number) {
        this._electrovalvulaId = value;
    }
}