
export enum NivelEducativo{
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSTGRADO = "Postgrado"
}
export class Aprendiz{

    constructor(public nombres: string, public apellidos: string, public avatar: string, public edad: number){

    }
}