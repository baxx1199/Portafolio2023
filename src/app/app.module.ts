import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './vistas/footer/footer.component';
import { NavbarComponent } from './vistas/navbar/navbar.component';
import { AboutmeComponent } from './vistas/aboutme/aboutme.component';
import { HeaderComponent } from './vistas/header/header.component';
import { SkillsComponent } from './vistas/skills/skills.component';
import { ProjectsComponent } from './vistas/projects/projects.component';
import { ProjectCardComponent } from './componentes/project-card/project-card.component';
import { LogtechComponent } from './componentes/logtech/logtech.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutmeComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectCardComponent,
    LogtechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
