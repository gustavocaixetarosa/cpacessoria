import { Routes } from '@angular/router';
import { SobreComponent } from './components/sobre/sobre.component';
import { ServicosComponent } from './components/servicos/servicos.component';

export const routes: Routes = [
  {path: "sobre", component: SobreComponent},
  {path: "nossosServicos", component: ServicosComponent}
];
