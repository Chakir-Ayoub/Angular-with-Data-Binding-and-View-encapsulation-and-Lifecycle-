import { Component, Input, SimpleChanges, ViewEncapsulation, } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ServerElementComponent {
@Input('srvElement') element:{ name: string; content: string; } ;
@Input() name:string;
  constructor(){console.log("Constructor called ")}
  ngOnInit(): void {
    console.log("ngOnInit called ");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnchanges called");
    console.log(changes);
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");

  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }
ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked called");
}
ngOnDestroy(): void {
  console.log("ngDestroy called");
}
}
