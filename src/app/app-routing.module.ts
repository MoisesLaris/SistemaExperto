import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailMethodComponent } from './system/detail-method/detail-method.component';
import { QuestionsComponent } from './system/questions/questions.component';
import { RoutingComponent } from './system/routing/routing.component';


const routes: Routes = [
  {
    path: '',
    component: RoutingComponent,
    children: [
        { path: '', redirectTo: 'questions', pathMatch: 'full' },
        { path: 'questions', component: QuestionsComponent, data: { breadcrumb: 'Preguntas' } },
        { path: 'detailPage/:id', component: DetailMethodComponent, data: { breadcrumb: 'Detalle metodo' } },
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
