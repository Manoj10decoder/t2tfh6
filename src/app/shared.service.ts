import { Injectable } from '@angular/core';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  onDateChange(event: any) {
    event.target.value = format(new Date(2023, 9 - 1, 9), 'MM/d/yyyy');
  }
}
