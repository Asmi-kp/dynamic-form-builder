
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.scss']
})
export class DynamicFormBuilderComponent implements OnInit {

  @Input() fields: any[] = [];
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    const fieldsCtrls = {};
    for (const f of this.fields) {
        const opts = {};
        fieldsCtrls[f.name] = new FormGroup(opts);
    }
    this.form = new FormGroup(fieldsCtrls);
  }


}
