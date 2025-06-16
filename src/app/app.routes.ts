import { Routes,RouterModule, } from '@angular/router';

import { HeaderComponent } from './componentes/header/header.component';
import { NgModule } from '@angular/core';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { OrdenaComponent } from './componentes/ordena/ordena.component';
import { NombreComponent } from './componetes2/nombre/nombre.component';
import { AleatorioComponent } from './componetes2/aleatorio/aleatorio.component';
import { LetraComponent } from './componetes2/letra/letra.component';

export const routes: Routes = [
    {path: "cabecera", component:HeaderComponent},
    {path: "principal", component:PrincipalComponent},
    {path: "ordena", component:OrdenaComponent,
        children:[
            {path: "primero", component: NombreComponent},
            {path:"tercero", component: AleatorioComponent},
            {path: "segundo", component:LetraComponent}
       
        ]
    },
    {path: '**', redirectTo: 'principal'}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class appRoutingModule{}
