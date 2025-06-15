import { Routes,RouterModule, } from '@angular/router';

import { HeaderComponent } from './componentes/header/header.component';
import { NgModule } from '@angular/core';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { OrdenaComponent } from './componentes/ordena/ordena.component';
import { NombreComponent } from './componetes2/nombre/nombre.component';
import { AleatorioComponent } from './componetes2/aleatorio/aleatorio.component';

export const routes: Routes = [
    {path: "cabecera", component:HeaderComponent},
    {path: "nosotros", component:NosotrosComponent},
    {path: "principal", component:PrincipalComponent},
    {path: "ordena", component:OrdenaComponent,
        children:[
            {path: "primero", component: NombreComponent},
            {path:"tercero", component: AleatorioComponent}
            // {path: '**', redirectTo: 'ordena'},
        ]
    },
    {path: '**', redirectTo: 'principal'}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class appRoutingModule{}
