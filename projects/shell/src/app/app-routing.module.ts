import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://192.168.0.11:8101/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://192.168.0.11:8102/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
