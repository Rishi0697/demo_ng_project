import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  { path: "", redirectTo: "/parent", pathMatch: "full" },
  // { path: "home", component: HomeComponent },
  // { path: "header", component: HeaderComponent },
  {path : "parent", component : ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
