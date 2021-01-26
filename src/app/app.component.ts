import { Component } from '@angular/core';
import {Tareas} from './models/tareas';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public myClass: boolean = false;
  
  tareasArray: Tareas[] = [
    {id:1, tarea: 'Atender', colaborador: 'Otto', estado:'Sin iniciar', fechaInicio:'2021-01-25', fechaTermino:'2021-01-29', porcentaje: false},
    {id:2, tarea: 'Eliminar', colaborador: 'Maggie', estado:'En proceso', fechaInicio:'2021-01-25', fechaTermino:'2021-01-25', porcentaje: false},
    {id:3, tarea: 'Vender', colaborador: 'Homero', estado:'Finalizado', fechaInicio:'2021-01-25', fechaTermino:'2021-01-25', porcentaje: false}
  ];

  

  seleccionarTarea: Tareas = new Tareas();

  

  agregarEditar(){
    if(this.seleccionarTarea.id === 0){
      this.seleccionarTarea.id = this.tareasArray.length + 1;
      this.tareasArray.push(this.seleccionarTarea);
    }
    
    this.seleccionarTarea = new Tareas();
   }

   abrirEdicion(tarea: Tareas){
     this.seleccionarTarea = tarea;
   }

   borrar(){
     if(confirm("Estas seguro de eliminar la tarea")){
      this.tareasArray= this.tareasArray.filter(x => x != this.seleccionarTarea);
      this.seleccionarTarea = new Tareas();
     }
   };

  calculoFecha(tarea: Tareas){
    let fechaInicio = new Date(tarea.fechaInicio).getTime();
    let fechaFin    = new Date(tarea.fechaTermino).getTime();
    let hoy = new Date().getTime();
    let porcentaje = 0.2;
    

    let total = fechaFin - fechaInicio;
    let diff = fechaFin - hoy;

    if((total * porcentaje) >= diff){
      tarea.porcentaje = true;
    }

    
   }  
    
}
