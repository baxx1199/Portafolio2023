import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  card: HTMLElement | null = null;
  @Input() work: any;
  @Input() id!: string;

  constructor() {}

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    this.card = document.getElementById(this.id);
  }

  redirectWithDelay(urlStr: string) {
    if (this.card) {
      this.card.classList.add('animate__animated', 'animate__tada');
    }
    setTimeout(() => {
      window.open(urlStr, '_blank');
      if (this.card) this.card.classList.remove('animate__animated', 'animate__tada');
    }, 1000);
  }
}
