import { Component, effect, inject, signal } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    headerService = inject(HeaderService);
    claseAplicada = signal("");
    tituloMostrado = signal(this.headerService.titulo()); // Inicializar con el valor actual

    esconderTitulo = effect(() => {
        if(this.headerService.titulo()) {
            this.claseAplicada.set("fade-out");
            // Después del fade-out, mostrar el nuevo título
            setTimeout(() => {
                this.tituloMostrado.set(this.headerService.titulo());
                this.claseAplicada.set("fade-in");
            }, 300); // Ajusta el tiempo según tu animación
        }
    }, {allowSignalWrites: true});

    mostrarTituloNuevo(e:Event) {
        this.tituloMostrado.set(this.headerService.titulo());
        this.claseAplicada.set(""); // Reset de la clase
    }
}
