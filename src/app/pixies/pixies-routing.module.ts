import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PixiesPage } from "./pixies.page";

const routes: Routes = [
  {
    path: "tabs",
    component: PixiesPage,
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
        redirectTo: "/pixies/tabs/discover",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/pixies/tabs/discover",
    pathMatch: "full"
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PixiesRoutingModule {}
