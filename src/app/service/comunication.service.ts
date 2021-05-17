import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  constructor() { }
  mensaje: string;
  private enviarMensajeSubject = new Subject<string>();
  enviarMensajeSubjectObservable = this.enviarMensajeSubject.asObservable();

  enviarMensaje(mensaje: string) {
    this.mensaje = '';
    this.enviarMensajeSubject.next(mensaje);
  }
}
