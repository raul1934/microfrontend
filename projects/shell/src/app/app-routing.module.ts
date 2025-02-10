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
        remoteEntry: 'http://10.0.2.2:8101/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.AppModule).catch(err => {
        console.error('Error loading remote module', err);
          throw err;
      }),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://10.0.2.2:8101/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.AppModule).then((m) => m.AppModule).catch(err => {
        console.error('Error loading remote module', err);
        throw err;
      }),
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
