import { TDLService } from "./TLApp.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";


@Component({
  'selector': 'tlsapp',
  'templateUrl': './TLApp.component.html',
  'styleUrls': ['./TLApp.component.css']
})
export class TLAppComponent implements OnInit, OnDestroy{
  addedTaskname = "Enter a task to do"
  taskList = [];
  isinitial = 1
  private pls: Subscription;
  constructor(private listService: TDLService){}
  onAddTask(){
    this.listService.addTask(this.addedTaskname);
    console.log('new task created :'+this.addedTaskname);
    this.onClearText();
  }
  onRemoveTask(id: Number){
    this.listService.removeTask(id);
  }
  onClearAll(){
    this.listService.deleteAll();
  }
  onAlterCheck(id: Number){
    this.listService.alterCheck(id);
  }
  onClearText(){
    this.addedTaskname = ""
  }
  onClearInputBar(){
    if (this.isinitial===1){
      this.onClearText();}
      this.isinitial = 0;
  }
  ngOnInit(){
    this.taskList = this.listService.listitems;
    this.pls = this.listService.ToDoListContainer.subscribe(tasks=>{
      this.taskList = tasks;
    });
  }

  ngOnDestroy(){
      this.pls.unsubscribe();
  }
}
