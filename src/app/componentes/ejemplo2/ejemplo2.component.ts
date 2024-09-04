import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ejemplo1Component } from '../ejemplo1/ejemplo1.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ejemplo2',
  standalone: true,
  imports: [Ejemplo1Component, RouterLink],
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.scss'
})
export class Ejemplo2Component implements OnInit, OnDestroy {
saludo = 'ejemplo 2 works';
imagenes = [
"https://material.angular.io/assets/img/examples/shiba2.jpg",
"https://media.zenfs.com/en/motleyfool.com/4b24d7ec486e613542d8d34a2761e4cc",
"https://media.istockphoto.com/id/1297445091/es/foto/shiba-inu-perro-de-raza-japon%C3%A9s.jpg?s=612x612&w=0&k=20&c=xnpxH__7TbPe4QWJtJ-CbRt7ogkDecwxOW1kb9QE000=",
"https://www.elmueble.com/medio/2023/02/26/perro-de-raza-shiba-inu_b6387407_230226130353_900x900.jpg"
]



imagenActual= this.imagenes[0];
 constructor(){}
 ngOnInit(): void {
  console.log('component initialization')
 }

 ngOnDestroy(): void {
  console.log('component destruction')
 }
 enviarImagen(indice: number) {
this.imagenActual =this.imagenes [indice];
 }

 onEmit(mensaje: string){
  this.saludo =mensaje;
 }
}
