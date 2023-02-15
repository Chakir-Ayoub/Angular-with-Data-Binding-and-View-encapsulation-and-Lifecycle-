import { ServerElementComponent } from './server-element/server-element.component';
import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements=[{type:"server",name:"TestServer",content:"Just test !"}] ;

  onAddserver(serverData:{nameserver:string,servercontent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.nameserver,
      content:serverData.servercontent
    });
  }

  onAddBluePrint(bluePrintData:{nameserver:string,servercontent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:bluePrintData.nameserver,
      content:bluePrintData.servercontent
    });

  }
}
