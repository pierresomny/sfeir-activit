import { Component } from '@angular/core';

@Component({
             selector: 'app-weekly-group',
             templateUrl: './weekly-group.component.html',
             styleUrls: [ './weekly-group.component.scss' ],
           })
export class WeeklyGroupComponent {
  weekNumber: number = new Date().getWeek();


}
