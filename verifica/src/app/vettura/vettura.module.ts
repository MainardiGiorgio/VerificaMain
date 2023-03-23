export class Macchina {
    id: number;
    tipomodello: string;
    marca: string;
    costo: number;
    velocitamax: number;

    constructor(id: number, tipomodello: string, marca: string, costo: number, velocitamax: number) {
        this.id = id;
        this.tipomodello = tipomodello;
        this.marca = marca;
        this.costo = costo;
        this.velocitamax = velocitamax;
    }
}