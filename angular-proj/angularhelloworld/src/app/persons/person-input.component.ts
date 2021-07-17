import { Component, Output, EventEmitter} from "@angular/core"
import { PersonService } from "./persons.service";
@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']

})
export class PersonInputComponent{
  enteredPersonName =  '';
  // @Output() personCreate = new EventEmitter<string>()
  constructor(private personService: PersonService){}

  onCreatePerson(){
    console.log('New person created: '+this.enteredPersonName);
    this.personService.addPerson(this.enteredPersonName);
    // this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = 'changed';
  }
}
