import { Routes } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RubroComponent } from './pages/rubro/rubro.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
export const routes: Routes = [

    {     path: "", component: HomeComponent},
    {     path: "carrito", component: CarritoComponent},
    {     path: "buscar", component: BuscarComponent},
    {     path: "perfil", component: PerfilComponent},
    {     path: "rubro", component: RubroComponent},
    {     path: "articulo", component: ArticuloComponent}
];
