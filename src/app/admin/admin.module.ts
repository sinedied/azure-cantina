import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { EventListComponent } from './event-list.component';
import { EventEditComponent } from './event-edit.component';
import { LocalDatePipe } from './local-date.pipe';

@NgModule({
  declarations: [
    AdminComponent,
    EventListComponent,
    EventEditComponent,
    LocalDatePipe,
  ],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}
