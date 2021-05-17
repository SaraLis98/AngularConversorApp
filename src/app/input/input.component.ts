import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ComunicationService } from '../service/comunication.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  @ViewChild(MatAccordion) accordion: MatAccordion;
  mensaje: string;
  constructor(private comunicationService: ComunicationService) { }

  ngOnInit(): void {
  }

  cambioTexto(mensaje: string){
    this.comunicationService.enviarMensaje(mensaje);
  }

}
