import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { GlobalPrefixComponent } from './global-prefix/global-prefix.component';
import { HttpAdapterComponent } from './http-adapter/http-adapter.component';
import { HybridApplicationComponent } from './hybrid-application/hybrid-application.component';
import { LifecycleEventsComponent } from './lifecycle-events/lifecycle-events.component';
import { MultipleServersComponent } from './multiple-servers/multiple-servers.component';

const routes: Routes = [
  {
    path: 'global-prefix',
    component: GlobalPrefixComponent,
    data: { title: 'Global prefix - FAQ' },
  },
  {
    path: 'lifecycle-events',
    component: LifecycleEventsComponent,
    data: { title: 'Lifecycle events - FAQ' },
  },
  {
    path: 'hybrid-application',
    component: HybridApplicationComponent,
    data: { title: 'Hybrid application - FAQ' },
  },
  {
    path: 'multiple-servers',
    component: MultipleServersComponent,
    data: { title: 'HTTPS & Multiple Servers - FAQ' },
  },
  {
    path: 'http-adapter',
    component: HttpAdapterComponent,
    data: { title: 'HTTP adapter - FAQ' },
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    GlobalPrefixComponent,
    LifecycleEventsComponent,
    HybridApplicationComponent,
    MultipleServersComponent,
    HttpAdapterComponent,
  ],
})
export class FaqModule {}
