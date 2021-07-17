import { NgModule } from "@angular/core"
import { Routes, RouterModule  } from "@angular/router"
import { TLAppComponent } from "./TLApp/TLApp.component"
const routes: Routes = [{path:'', component:TLAppComponent}]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
