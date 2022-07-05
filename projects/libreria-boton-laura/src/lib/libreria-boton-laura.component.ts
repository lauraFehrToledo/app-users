import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-libreriaBotonLaura',
  templateUrl: './libreria-boton-laura.component.html',
  styleUrls: ['./libreria-boton-laura.component.css']
})
export class LibreriaBotonLauraComponent implements OnInit {

  @Input() nameIcon: string;
  @Input() tooltipIcon: string;
  @Input() colorIcon: string;
  @Output() clickBotonEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public clickButton(): void {
    this.clickBotonEmitter.emit();
  }

}
