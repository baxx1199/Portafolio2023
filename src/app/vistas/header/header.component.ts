import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  element: HTMLElement | null = null;
  constructor() { }

  ngOnInit(): void {
    this.element= document.getElementById('idHeader')
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    
     if(window.scrollY > 0){
      if(this.element){
        this.element.style.marginTop="105px";
      }
     }else if(window.scrollY == 0){
        if(this.element){
          this.element.style.marginTop="0px";
        }
     }
  }

}
