import { RouterModule, Routes } from '@angular/router';
import { AdminGuard, LoginGuardGuard } from '../services/service.index';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicoComponent } from './medicos/medico.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const pagesRoutes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		data: { titulo: 'Dashboard' }
	},
	{
		path: 'progress',
		component: ProgressComponent,
		data: { titulo: 'Progress' }
	},
	{
		path: 'graficas1',
		component: Graficas1Component,
		data: { titulo: 'Gráficas' }
	},
	{
		path: 'promesas',
		component: PromesasComponent,
		data: { titulo: 'Promesas' }
	},
	{ path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
	{
		path: 'account-settings',
		component: AccountSettingsComponent,
		data: { titulo: 'Ajustes del Tema' }
	},
	{
		path: 'perfil',
		component: ProfileComponent,
		data: { titulo: 'Perfil de usuario' }
	},
	{
		path: 'busqueda/:termino',
		component: BusquedaComponent,
		data: { titulo: 'Buscador' }
	},
	// Mantenimientos
	{
		path: 'usuarios',
		component: UsuariosComponent,
		canActivate: [ AdminGuard ],
		data: { titulo: 'Mantenimiento de usuarios' }
	},
	{
		path: 'hospitales',
		component: HospitalesComponent,
		data: { titulo: 'Mantenimiento de hospitales' }
	},
	{
		path: 'medicos',
		component: MedicosComponent,
		data: { titulo: 'Mantenimiento de medicos' }
	},
	{
		path: 'medico/:id',
		component: MedicoComponent,
		data: { titulo: 'Actualizar Medico' }
	},
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
