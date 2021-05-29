import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ComunicationService, Mensaje, TipoMensaje } from '../service/comunication.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  @ViewChild(MatAccordion) accordion: MatAccordion;
  mensaje: string;
  constructor(public comunicationService: ComunicationService) { }

  ngOnInit(): void {
    this.comunicationService.enviarMensajeSubjectObservable.subscribe( mensaje => {
      this.mensaje = '';

      if(mensaje.tipo == TipoMensaje.ascii){
        for(let i = 0; i<mensaje.text.length; i++){
          this.mensaje += String.fromCharCode(mensaje.text.charCodeAt(i));
        }
      }

      if(mensaje.tipo == TipoMensaje.hex){
        var hex = mensaje.text.toString();//force conversion
        for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
          this.mensaje += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      }

      if(mensaje.tipo == TipoMensaje.bin){
          this.mensaje = mensaje.text.split(/\s/).map(function (val){
              return String.fromCharCode(parseInt(val, 2));
            }).join("");
      }
    });
  }

  cambioTexto(text: string){
    var mensaje: Mensaje = {
      text: text,
      tipo: TipoMensaje.text
    };
    this.comunicationService.enviarMensaje(mensaje);
  }

}
