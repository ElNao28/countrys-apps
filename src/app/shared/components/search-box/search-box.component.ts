import { Component,EventEmitter, Input,Output } from '@angular/core';
//import {Subject} from 'rxjs';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  //private debouncer = Subject<string>  =new Subject<string>();

  @Input()
  public placeholder:string = ''

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  emitValue(value: string):void {
    this.onValue.emit(value)
  }

  onKeyPress(searchTerm: string){
    console.log(searchTerm)
  }
}
