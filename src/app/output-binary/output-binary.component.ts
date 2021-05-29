import { Component, OnInit } from '@angular/core';
import { ComunicationService, Mensaje, TipoMensaje } from '../service/comunication.service';

@Component({
  selector: 'app-output-binary',
  templateUrl: './output-binary.component.html',
  styleUrls: ['./output-binary.component.css']
})
export class OutputBinaryComponent implements OnInit {

  mensaje: string;
  constructor(private comunicationService: ComunicationService) { }

  ngOnInit(): void {
    this.comunicationService.conversorDescriptionTitle = "HOLA";
    this.comunicationService.conversorDescription = "hola";

    this.comunicationService.enviarMensajeSubjectObservable.subscribe( mensaje => {
      // Solo se convierte cuando se actualice el mensaje desde el input de texto normal
      if(mensaje.tipo == TipoMensaje.text){
        this.mensaje = ''
        for(let i = 0; i<mensaje.text.length; i++){
          this.mensaje += mensaje.text.charCodeAt(i).toString(2) + " ";
        }
      }
    });
  }

  cambioTexto(text: string){
    var mensaje: Mensaje = {
      text: text,
      tipo: TipoMensaje.bin
    };
    this.comunicationService.enviarMensaje(mensaje);
  }

}
