import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { FormProfesionalComponent } from './componentes/form-profesional/form-profesional.component';
import { FormAcademicaComponent } from './componentes/form-academica/form-academica.component';
import { IdiomasComponent } from './componentes/idiomas/idiomas.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    FormProfesionalComponent,
    FormAcademicaComponent,
    IdiomasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
