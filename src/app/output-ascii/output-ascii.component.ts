import { Component, OnInit } from '@angular/core';
import { ComunicationService, Mensaje, TipoMensaje } from '../service/comunication.service';

@Component({
  selector: 'app-output-ascii',
  templateUrl: './output-ascii.component.html',
  styleUrls: ['./output-ascii.component.css']
})
export class OutputAsciiComponent implements OnInit {

  mensaje: string;
  constructor(private comunicationService: ComunicationService) { }

  ngOnInit(): void {
    this.comunicationService.conversorDescriptionTitle = "¿Qué es el código ASCII?";
    this.comunicationService.conversorDescription = "ASCII es la abreviatura de American Standard Code for Information Interchange. Es un esquema de codificación de caracteres donde cada letra tiene su propio número. Este código se desarrolló originalmente a partir de códigos telegráficos. Por ejemplo, 097 es la representación numérica ASCII del carácter a. ASCII cubre más de 100 caracteres y algunos de estos caracteres son caracteres de control que controlan cómo aparece el texto.";

    this.comunicationService.enviarMensajeSubjectObservable.subscribe( mensaje => {
      // Solo se convierte cuando se actualice el mensaje desde el input de texto normal
      if(mensaje.tipo == TipoMensaje.text){
        this.mensaje = '';
        for(let i = 0; i<mensaje.text.length; i++){
          this.mensaje += mensaje.text.charCodeAt(i) + " ";
        }
      }
    });
  }

  cambioTexto(text: string){
    var mensaje: Mensaje = {
      text: text,
      tipo: TipoMensaje.ascii
    };
    this.comunicationService.enviarMensaje(mensaje);
  }
}
