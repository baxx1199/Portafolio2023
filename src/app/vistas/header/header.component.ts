import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serviceLanguage:LanguageService) { }

  currentLanguage:any
  
  ngOnInit(): void {

    this.serviceLanguage.getLanguage$.subscribe(
      (Language:any)=>(this.currentLanguage =Language)
    )
    if(this.currentLanguage== null){
      this.serviceLanguage.setLanguage("es")
      this.serviceLanguage.getLanguage$.subscribe(
        (Language:any)=>(this.currentLanguage =Language)
      )
    }

    
  }

  changeLanguage(languageId:string){
    this.serviceLanguage.setLanguage(languageId)
  }
}
