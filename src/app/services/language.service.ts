import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

constructor() { }
  language: any = null;

  LanguageList=["es", "es-419",
  "es-AR", "es-BO", "es-BR", "es-BZ", "es-CL", "es-CO", "es-CR",
  "es-CU", "es-DO", "es-EA", "es-EC", "es-ES", "es-GQ", "es-GT",
  "es-HN", "es-IC", "es-MX", "es-NI", "es-PA", "es-PE", "es-PH",
  "es-PR", "es-PY", "es-SV", "es-US", "es-UY", "es-VE"]
  

  private language$ = new BehaviorSubject<any>(this.language);

  get getLanguage$():Observable<any>{
    return this.language$.asObservable();
  }
  setLanguage(language:any):void{
    
    this.language$.next(this.validateLanguage(language));
  }

  validateLanguage(idLanguage:string){
      if(this.LanguageList.includes(idLanguage)) {
        return "es"
      }else{
        return "en"
      }
  }
}
