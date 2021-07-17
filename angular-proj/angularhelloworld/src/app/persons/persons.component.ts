import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { PersonService } from "./persons.service";

@Component({
  'selector': 'app-persons',
  'templateUrl': './persons.component.html',

})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[] = [];
  private pls: Subscription;
  isFetching = false;
  constructor(private prsService: PersonService){
    // this.personList = prsService.persons;
  }
  ngOnInit(){
    // this.personList = this.prsService.persons;
    // this.personList = this.prsService.fetchPersons();
    // this will be activated only if personsChanged is triggered
    this.pls = this.prsService.personsChanged.subscribe(persons=>{
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.prsService.fetchPersons();
  }
  ngOnDestroy(){
    this.pls.unsubscribe();
  }
  onRemovePerson(personName: string){
    this.prsService.removePerson(personName);
  }
}
