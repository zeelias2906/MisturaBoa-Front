import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaListComponent } from "./views/categoria/list/categoria-list.component";
import { CategoriaRegisterComponent } from "./views/categoria/register/categoria-register.component";
import { ProdutoListComponent } from "./views/produto/list/produto-list.component";
import { ProdutoRegisterComponent } from "./views/produto/register/produto-register.component";
import { PedidoListComponent } from "./views/pedido/list/pedido-list.component";


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
  {
    path: 'pedido',
    children: [
      {
        path: '',
        component: PedidoListComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }