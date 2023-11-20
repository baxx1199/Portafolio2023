import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  header :HTMLElement | null = null;
  aboutMe :HTMLElement | null= null;
  skills :HTMLElement | null= null;
  projects :HTMLElement | null = null;
  contact :HTMLElement | null = null;

}
