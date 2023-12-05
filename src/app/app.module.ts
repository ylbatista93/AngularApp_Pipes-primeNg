import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';

// Configuracion del locale de la app pata agregar un idioma al pipe
import localeEsHN from '@angular/common/locales/es-HN';
import localeFrCA from '@angular/common/locales/fr-CA';
import localeEnUM from '@angular/common/locales/en-UM';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsHN);
registerLocaleData(localeFrCA);
registerLocaleData(localeEnUM);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,

    ProductsModule
    
  ],
  providers: [
    //para establecer este pipe globamente
    { provide: LOCALE_ID, useValue: 'es-HN' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
