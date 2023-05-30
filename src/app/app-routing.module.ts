import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { WeeklyGroupComponent } from 'src/app/weekly-group/weekly-group.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'group', component: WeeklyGroupComponent },
];

@NgModule({
            imports: [ RouterModule.forRoot(routes) ],
            exports: [ RouterModule ],
          })
export class AppRoutingModule {}
