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
          },
          {
            path: ":studyId",
            loadChildren: "./detail/detail.module#DetailPageModule"
          }
        ]
      },
      {
        path: "search",
        children: [
          {
            path: "",
            loadChildren: "./search/search.module#SearchPageModule"
          },
          {
            path: ":studyId",
            loadChildren: "./detail/detail.module#DetailPageModule"
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
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiesRoutingModule {}
