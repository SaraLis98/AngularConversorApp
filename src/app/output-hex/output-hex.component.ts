import { Component, OnInit } from '@angular/core';
import { ComunicationService, Mensaje, TipoMensaje } from '../service/comunication.service';

@Component({
  selector: 'app-output-hex',
  templateUrl: './output-hex.component.html',
  styleUrls: ['./output-hex.component.css']
})
export class OutputHexComponent implements OnInit {

  mensaje: string;
  constructor(private comunicationService: ComunicationService) { }

  ngOnInit(): void {
    this.comunicationService.conversorDescriptionTitle = "HOLA";
    this.comunicationService.conversorDescription = "hola";

    this.comunicationService.enviarMensajeSubjectObservable.subscribe( mensaje => {
      // Solo se convierte cuando se actualice el mensaje desde el input de texto normal
      if(mensaje.tipo == TipoMensaje.text) {
        let mensajeAux = "";
        for(let i = 0; i<mensaje.text.length; i++){
          mensajeAux += mensaje.text.charCodeAt(i).toString(16);
        }
        this.mensaje = mensajeAux;
      }
    });
  }

  cambioTexto(text: string){
    var mensaje: Mensaje = {
      text: text,
      tipo: TipoMensaje.hex
    };
    this.comunicationService.enviarMensaje(mensaje);
  }

}
