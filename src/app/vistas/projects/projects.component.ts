import { Component, OnInit } from '@angular/core';
import { projectsData } from'../../modelos/projects-data'
import { skillData, techForFilter } from 'src/app/modelos/skills-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  technologies = [...skillData, ...techForFilter];
  projects = projectsData;
  projectsFilter =projectsData;
  selectedTechs: Set<string> = new Set();
  watchFilter = false

  constructor() { }

  ngOnInit(): void {
  }
  
  filterByTech() {
    if (this.selectedTechs.size === 0) {
      // Si no hay tecnologías seleccionadas, mostrar todos los proyectos
      this.projectsFilter = this.projects;
    } else {
      // Filtrar proyectos según las tecnologías seleccionadas
      this.projectsFilter = this.projects.filter(work => work.techs.some(tech => this.selectedTechs.has(tech)));
      }
   }

  toggleTechSelection(tech: any) {
    if (this.selectedTechs.has(tech.name)) {
      this.selectedTechs.delete(tech.name);
    } else {
      this.selectedTechs.add(tech.name);
    }

    this.filterByTech();
  }

  toggleFilter(){
    this.watchFilter = !this.watchFilter
  }

  cleanFilter(){
    this.selectedTechs.clear()
    this.projectsFilter = this.projects;
  }
}
