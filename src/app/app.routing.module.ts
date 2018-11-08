import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {RouterModule, PreloadAllModules, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./not-found.component";


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'requests', loadChildren:: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes,
      {preloadingStrategy: PreloadAllModules} )

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}