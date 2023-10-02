import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavbarComponent,
        FooterComponent,
        PrincipalComponent,
        CardComponent,
        ModalComponent,
        SearchbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
