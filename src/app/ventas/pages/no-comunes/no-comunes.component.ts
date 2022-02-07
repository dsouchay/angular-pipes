import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Arturo'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': ' tenemos un cliente esperando',
    other: 'no tenemos # clientes esperando',
  };

  cambiarNombre() {
    this.nombre = 'Dania';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá',
  };

  //Json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //Async Pipe

  miObservable = interval(5000); //0,1,2,3,4,5,...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data de promesa');
    }, 3500);
  });
}
