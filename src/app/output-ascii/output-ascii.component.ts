import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../service/comunication.service';

@Component({
  selector: 'app-output-ascii',
  templateUrl: './output-ascii.component.html',
  styleUrls: ['./output-ascii.component.css']
})
export class OutputAsciiComponent implements OnInit {

  mensaje: string;
  constructor(private comunicationService: ComunicationService) { }

  ngOnInit(): void {
    this.comunicationService.enviarMensajeSubjectObservable.subscribe( mensaje => {
      this.mensaje = '';
      for(let i = 0; i<mensaje.length; i++){
        this.mensaje += mensaje.charCodeAt(i)
      }
    });
  }
}
