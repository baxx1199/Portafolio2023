import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logtech',
  templateUrl: './logtech.component.html',
  styleUrls: ['./logtech.component.css']
})
export class LogtechComponent implements OnInit {
  
  @Input() tech :any;

  constructor() { }

  ngOnInit() {
  }

}
