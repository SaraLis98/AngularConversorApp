import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Mensaje{
  text: string;
  tipo: TipoMensaje;
}

export enum TipoMensaje{
  text, hex, bin, ascii
}

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  conversorDescription: string;
  conversorDescriptionTitle: string;

  constructor() { }
  mensaje: string;
  private enviarMensajeSubject = new Subject<Mensaje>();
  enviarMensajeSubjectObservable = this.enviarMensajeSubject.asObservable();

  enviarMensaje(mensaje: Mensaje) {
    this.mensaje = '';
    this.enviarMensajeSubject.next(mensaje);
  }
}
