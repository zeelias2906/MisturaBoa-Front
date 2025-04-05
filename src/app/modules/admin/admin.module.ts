import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProdutoListComponent } from './views/produto/list/produto-list.component';
import { ProdutoRegisterComponent } from './views/produto/register/produto-register.component';
import { CategoriaRegisterComponent } from './views/categoria/register/categoria-register.component';
import { CategoriaListComponent } from './views/categoria/list/categoria-list.component';
import { SharedModule } from '../../shared/shared.module';
import { CategoriaStore } from './views/categoria/store/categoria.store';
import { ProdutoStore } from './views/produto/store/produto.store';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxCurrencyDirective } from "ngx-currency";


@NgModule({
  declarations: [
    ProdutoListComponent,
    ProdutoRegisterComponent,
    CategoriaRegisterComponent,
    CategoriaListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxSpinnerModule,
    AdminRoutingModule,
    SharedModule,
    PickerComponent,
    NgbTooltip,
    NgSelectModule,
    NgxCurrencyDirective,
  ],
  providers:[
    CategoriaStore,
    ProdutoStore,
    provideNgxMask(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
  ]
})
export class AdminModule { }
