import { Component } from '@angular/core';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { SharedService } from 'src/app/shared.service';

/** @title Datepicker input and change events */
@Component({
  selector: 'datepicker-events-example',
  templateUrl: 'datepicker-events-example.html',
  styleUrls: ['datepicker-events-example.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgFor,
    ReactiveFormsModule,
  ],
})
export class DatepickerEventsExample {
  form: FormGroup;
  constructor(private fb: FormBuilder, public shared: SharedService) {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
    });
  }

  events: string[] = [];

  addEvent(type: string, event: any) {
    // this.events.push(`${type}: ${event.value}`);
    // event.target.value = format(new Date(2023, 9 + 1, 9), 'MM/dd/yyyy');
    // this.events.push('formgroup ' + this.form.value.firstName);
  }

  onSubmit(form: FormGroup) {
    this.events.push('form ', this.form.value.firstName);
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
