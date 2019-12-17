import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudiesPage } from "./studies.page";

const routes: Routes = [
  {
    path: "tabs",
    component: StudiesPage,
    children: [
      {
        path: "discover",
        children: [
          {
            path: "",
            loadChildren: "./discover/discover.module#DiscoverPageModule"
          }
        ]
      },
      {
        path: "search",
        children: [
          {
            path: "",
            loadChildren: "./search/search.module#SearchPageModule"
          }
        ]
      },
      {
        path: "",
        redirectTo: "/studies/tabs/discover",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/studies/tabs/discover",
    pathMatch: "full"
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiesRoutingModule {}
