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
    this.comunicationService.conversorDescriptionTitle = "¿Qué es el código binario?";
    this.comunicationService.conversorDescription = "El código binario es el sistema de codificación usado para la representación de textos, o procesadores de instrucciones de computadora, utilizando el sistema binario (sistema numérico de dos dígitos, o bit: el '0' y el '1'). En informática y telecomunicaciones, el código binario se utiliza en la codificación de datos, tales como cadenas de caracteres, o cadenas de bits.";
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
