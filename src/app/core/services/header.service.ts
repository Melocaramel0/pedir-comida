import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  mostrarHeader: any;


  constructor() { }

  titulo = signal("Titulo");
  extendido: WritableSignal<boolean> = signal(false);
}
