import { Component, HostListener, OnInit } from '@angular/core';
import { SeccionService } from './services/seccions.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isNavbarFixed = false;
  title = 'portafolio';
  currentLanguage:any
  

  sectionHeader :HTMLElement | null = null;
  sectionAboutMe :HTMLElement | null= null;
  sectionSkills :HTMLElement | null= null;
  sectionProjects :HTMLElement | null = null;
  sectionContact :HTMLElement | null = null;

  constructor(private sections:SeccionService, private serviceLanguage:LanguageService ){

  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarFixed = window.scrollY > 0;
  }

  ngOnInit(){
    console.log("app")
    this.serviceLanguage.setLanguage(navigator.language)

    this.serviceLanguage.getLanguage$.subscribe(
      (Language:any)=>(this.currentLanguage =Language)
    )
    if(this.currentLanguage== null){
      this.serviceLanguage.setLanguage(navigator.language)
      this.serviceLanguage.getLanguage$.subscribe(
        (Language:any)=>(this.currentLanguage =Language)
      )
    }

  }
  ngAfterViewInit() {
    this.sections.header = document.getElementById('idheaderbanner');
    this.sections.aboutMe =document.getElementById('idAboutMe');
    this.sections.skills = document.getElementById('idSkills');
    this.sections.projects = document.getElementById('idProjects');
    this.sections.contact = document.getElementById('idContact');
  }

}
