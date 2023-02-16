import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
@Output('srvcreated') Servercreated=new EventEmitter<{nameserver:string,servercontent:string}>();
@Output('Blueprintcreated') Blueprintcreated=new EventEmitter<{nameserver:string,servercontent:string}>();
@ViewChild('serverContentinput') serverContentinput: ElementRef;

onAddserver(servernameinput: HTMLInputElement){
  console.log(servernameinput.value);
  this.Servercreated.emit({
nameserver:servernameinput.value,
servercontent:this.serverContentinput.nativeElement.value
  });
}

onAddBlueprint(servernameinput: HTMLInputElement){
  console.log(servernameinput.value);

  this.Blueprintcreated.emit({
nameserver:servernameinput.value,
servercontent:this.serverContentinput.nativeElement.value
  });
}
}
