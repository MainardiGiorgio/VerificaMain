import { Component, Input, OnInit } from '@angular/core';
import { Macchina } from './vettura.module';

@Component({
  selector: 'app-vettura',
  templateUrl: './vettura.component.html',
  styleUrls: ['./vettura.component.css']
})
export class VetturaComponent implements OnInit {
  @Input()
  macchina!: Macchina;
  constructor() {

  }

  ngOnInit() {

  }
}
