import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { ClientAddComponent } from './pages/client-add/client-add.component';
import { ClientEditComponent } from './pages/client-edit/client-edit.component';
import { LoginGoogleComponent } from './components/login-google/login-google.component';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'clientes', component: ClientListComponent, canActivate: [AuthGuard]  },
  { path: 'clientes/añadir', component: ClientAddComponent, canActivate: [AuthGuard] },
  { path: 'clientes/editar/:id', component: ClientEditComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginGoogleComponent },
  { path: 'contacto', component: ContactInfoComponent }
];
