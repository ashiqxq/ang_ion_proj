import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators'

@Injectable({providedIn: 'root'})
export class PersonService{
    personsChanged = new Subject<string[]>();
    persons: string[] = ['Rahman', 'Sivakumar', 'Naren', 'Noufal'];
    constructor(private http: HttpClient) {}
    addPerson(name: string){
      this.persons.push(name);
      console.log(this.persons);
      this.personsChanged.next(this.persons);
    }
    fetchPersons(){
      this.http.get<any>('https://swapi.dev/api/people').pipe(map(resData=>{
        return resData.results.map(character=>character.name);
      })).subscribe(transformedData=>{
        this.personsChanged.next(transformedData);
        console.log(transformedData)})
    }
    removePerson(name: string){
      this.persons = this.persons.filter(person =>{
        return person!==name;
      });
      console.log(this.persons);
      this.personsChanged.next(this.persons);
    }
  }

// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class PersonsService {
//   personsChanged = new Subject<string[]>();
//   persons: string[] = ['Max', 'Manuel', 'Anna'];

//   addPerson(name: string) {
//     this.persons.push(name);
//     this.personsChanged.next(this.persons);
//   }

//   removePerson(name: string) {
//     this.persons = this.persons.filter(person => {
//       return person !== name;
//     });
//     this.personsChanged.next(this.persons);
//   }
// }
