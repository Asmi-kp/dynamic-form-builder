import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-field-builder',
  templateUrl: './dynamic-field-builder.component.html',
  styleUrls: ['./dynamic-field-builder.component.scss']
})
export class DynamicFieldBuilderComponent implements OnInit {
  @Input() field: any;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
