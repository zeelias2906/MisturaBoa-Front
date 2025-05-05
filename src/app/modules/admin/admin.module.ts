import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
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
import { PedidoListComponent } from './views/pedido/list/pedido-list.component';
import localePt from '@angular/common/locales/pt';
import { JustificativaModalComponent } from './views/pedido/modals/justificativa-modal/justificativa-modal.component';
import { TabPedidoComponent } from './views/pedido/components/tab-pedido/tab-pedido.component';
import { AceitarPedidoModalComponent } from './views/pedido/modals/aceitar-pedido-modal/aceitar-pedido-modal.component';
import { PedidoStore } from './views/pedido/stores/pedido.store';
import { ImpressaoStore } from './views/pedido/stores/impressao.store';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    ProdutoListComponent,
    ProdutoRegisterComponent,
    CategoriaRegisterComponent,
    CategoriaListComponent,
    PedidoListComponent,
    JustificativaModalComponent,
    TabPedidoComponent,
    AceitarPedidoModalComponent,
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
    PedidoStore,
    ImpressaoStore,
    provideNgxMask(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ]
})
export class AdminModule { }
