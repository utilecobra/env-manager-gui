import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-working-indicator',
  templateUrl: './working-indicator.component.html',
  styleUrls: ['./working-indicator.component.css']
})
export class WorkingIndicatorComponent implements OnInit {
  @Input() active = false;

  constructor() { }

  ngOnInit() {
  }

}
