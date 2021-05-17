import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../service/comunication.service';

@Component({
  selector: 'app-output-binary',
  templateUrl: './output-binary.component.html',
  styleUrls: ['./output-binary.component.css']
})
export class OutputBinaryComponent implements OnInit {

  mensaje: string;
  constructor(private comunicationService: ComunicationService) { }

  ngOnInit(): void {
    this.comunicationService.enviarMensajeSubjectObservable.subscribe( mensaje => {
      this.mensaje = ''
      for(let i = 0; i<mensaje.length; i++){
        this.mensaje += mensaje.charCodeAt(i).toString(2);
      }
    });
  }

}
