import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeeklyGroupComponent } from 'src/app/pages/weekly-group/weekly-group.component';
import { WeeklyIdeasComponent } from 'src/app/pages/weekly-ideas/weekly-ideas.component';

const routes: Routes = [
  { path: 'group', component: WeeklyGroupComponent },
  { path: 'ideas', component: WeeklyIdeasComponent },
];

@NgModule({
            imports: [ RouterModule.forRoot(routes) ],
            exports: [ RouterModule ],
          })
export class AppRoutingModule {}
