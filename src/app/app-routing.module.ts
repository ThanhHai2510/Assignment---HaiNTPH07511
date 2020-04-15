import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { AdminComponent } from "./admin/admin.component";
import { ClientComponent } from "./client/client.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: ClientComponent,
    children: [
      { path: "book/:id", 
        component: ProductDetailComponent },
        {
        path: "",
        component: HomeComponent
      }
    ]
  },
  
  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
