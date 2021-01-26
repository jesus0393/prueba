import * as moment from 'moment';

export class Tareas {
    id: number = 0;
    tarea: string;
    colaborador: string;
    estado: string;
    fechaInicio: string;
    fechaTermino: string;
    porcentaje: boolean = false;
}
