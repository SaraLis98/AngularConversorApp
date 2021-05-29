import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { OutputAsciiComponent } from './output-ascii/output-ascii.component';
import { OutputBinaryComponent } from './output-binary/output-binary.component';
import { OutputHexComponent } from './output-hex/output-hex.component';

const routes: Routes = [
  { path: 'conversor', component: InputComponent, 
    children: [
      { path: 'bin', component: OutputBinaryComponent },
      { path: 'hex', component: OutputHexComponent },
      { path: 'ascii', component: OutputAsciiComponent },
      { path: '', redirectTo: '/conversor/bin', pathMatch: 'full' },
    ],
  },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
