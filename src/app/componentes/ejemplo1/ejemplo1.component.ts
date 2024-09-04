import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../modulos/material/material.module';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.scss'
})
export class Ejemplo1Component {
  @Input() imagenDelPadre: string='';  
  @Output() emisor = new EventEmitter <string>();
  imagen='https://www.coindesk.com/resizer/l-IBJD7CfqXCyTb9lQYlhHaGgDw=/1056x595/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/WMXJCFJ3ERCETA6TJNZ5NQPNKA.webp'
  nombre = '';
  nombres = ['Andres', 'Juan Carlos', 'Lorena', 'Verónica']

  setName(){
    this.nombre = 'Darth Vader';
  }
}
