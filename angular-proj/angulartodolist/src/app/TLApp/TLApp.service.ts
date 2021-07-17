import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({providedIn:'root'})
export class TDLService{
  ToDoListContainer = new Subject<string[]>();
  listitems = [];
  counter = 0;
  addTask(taskName: string){
    this.counter += 1;
    this.listitems.push({name: taskName, checked:false, id:this.counter});
    this.sortList();
    console.log(this.listitems);
    this.ToDoListContainer.next(this.listitems);
  }
  removeTask(taskid: Number){
    this.listitems = this.listitems.filter(task_data =>{
      return task_data.id!==taskid;
    });
    this.sortList();
    this.ToDoListContainer.next(this.listitems);
  }
  deleteAll(){
    this.listitems = [];
    this.ToDoListContainer.next(this.listitems);
  }
  alterCheck(taskid: Number){
    for (let taskdesc of this.listitems){
      if (taskid===taskdesc.id){
        taskdesc.checked = !taskdesc.checked;
        // console.log("altered"+taskdesc)
        this.sortList();
        break;
      }
    }
  }
  sortList(){
    this.listitems.sort((a,b) => {
      return a.checked - b.checked;
    });
    this.ToDoListContainer.next(this.listitems);
  }
}
