import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dirClrDefault',
  standalone:true,
})
export class DirClrDefaultPipe implements PipeTransform {

  transform(value: string | number, def: string): string {
    console.log("pipe called... ")
    // Convert value to a number if it is a string
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;

    // Determine the color based on the numeric value
    if (numericValue === 0) {
      return def; // Use the default value if provided and value is zero
    } else if (numericValue < 0) {
      return 'red';
    } else {
      return 'green';
    }
  }

}
