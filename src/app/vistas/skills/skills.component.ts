import { Component, OnInit, Input } from '@angular/core';
import { skillData, knowledge } from 'src/app/modelos/skills-data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() currentLanguage:any;
  skills = skillData
  otherSkill = knowledge

  constructor() { }

  ngOnInit(): void {
  }

}
