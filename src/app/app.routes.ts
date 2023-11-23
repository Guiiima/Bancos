import { Routes } from '@angular/router';
import { AgenciaComponent } from './agencia/agencia.component';
import { CartaoComponent } from './cartao/cartao.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ContaComponent } from './conta/conta.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { InvestimentoComponent } from './investimento/investimento.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { SeguroComponent } from './seguro/seguro.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';

export const routes: Routes = [
  {path: '', component: AgenciaComponent},
  {path: 'Agencia', component: AgenciaComponent},
  {path: 'Cartao', component: CartaoComponent},
  {path: 'Cliente', component: ClienteComponent},
  {path: 'Conta', component: ContaComponent},
  {path: 'Emprestimo', component: EmprestimoComponent},
  {path: 'Endereco', component: EnderecoComponent},
  {path: 'investimento', component: InvestimentoComponent},
  {path: 'Movimentacao', component: MovimentacaoComponent},
  {path: 'Seguro', component: SeguroComponent},
  {path: 'Tranferencia', component: TransferenciaComponent},


];
