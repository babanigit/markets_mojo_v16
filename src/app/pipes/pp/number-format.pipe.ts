// number-format.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true,
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    if (value < 1000) {
      return value.toString();
    } else if (value >= 1000 && value < 100000) {
      return (value / 1000).toFixed(2) + 'k';  // Thousands
    } else if (value >= 100000 && value < 10000000) {
      return (value / 100000).toFixed(2) + 'lacs';  // Lakhs
    } else if (value >= 10000000 && value < 1000000000) {
      return (value / 10000000).toFixed(2) + 'cr';  // Crores
    } else if (value >= 1000000000) {
      return (value / 1000000000).toFixed(2) + 'B';  // Billions (optional)
    }
    return value.toString();
  }

}
