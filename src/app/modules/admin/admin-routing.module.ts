import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaListComponent } from "./views/categoria/list/categoria-list.component";
import { CategoriaRegisterComponent } from "./views/categoria/register/categoria-register.component";
import { ProdutoListComponent } from "./views/produto/list/produto-list.component";
import { ProdutoRegisterComponent } from "./views/produto/register/produto-register.component";


const routes: Routes = [
  {
    path: 'categoria',
    children: [
      {
        path: '',
        component: CategoriaListComponent
      },
      {
        path: 'form',
        component: CategoriaRegisterComponent
      }
    ]
  },
  {
    path: 'produto',
    children: [
      {
        path: '',
        component: ProdutoListComponent
      },
      {
        path: 'form',
        component: ProdutoRegisterComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }