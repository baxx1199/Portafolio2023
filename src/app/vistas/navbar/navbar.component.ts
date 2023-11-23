import { Component, Input, OnInit } from '@angular/core';
import { SeccionService } from 'src/app/services/seccions.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() currentLanguage:any;
  hideMenu=true
  constructor(private sections: SeccionService) { }

  ngOnInit(): void {

    const scrollToSectionBaxx = document.getElementById("idLiBaxx");
      const scrollToSectionAboutMe = document.getElementById("idLiAbout");
      const scrollToSectionSkills = document.getElementById("idLiSkills");
      const scrollToSectionProjects = document.getElementById("idLiProjects");
      const scrollToSectionContact = document.getElementById("idLiContacts");

      scrollToSectionBaxx?.addEventListener("click", () => {
       
        this.sections.header?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      
      scrollToSectionAboutMe?.addEventListener("click", () => {
        this.sections.aboutMe?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      
      scrollToSectionSkills?.addEventListener("click", () => {
        this.sections.skills?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      
      
      scrollToSectionProjects?.addEventListener("click", () => {
      
        this.sections.projects?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      
      scrollToSectionContact?.addEventListener("click", () => {
        this.sections.contact?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
     

  }

  togglerMenu(){
      this.hideMenu = !this.hideMenu;
  }

 
}
