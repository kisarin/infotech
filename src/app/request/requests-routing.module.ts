
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {RequestsComponent} from "./requests.component";
import {RequestEditComponent} from "./request-edit/request-edit.component";

const requestsRoutes: Routes = [
  { path: 'requests', component: RequestsComponent},
  { path: 'requests/:id/edit', component: RequestEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(requestsRoutes)
  ],
  exports: [RouterModule]
})
export  class RequestsRoutingModule {}