import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highestObj',
  standalone:true,
})
export class HighestObjPipe implements PipeTransform {

  transform(value: any[]): any {
    if (!Array.isArray(value) || value.length === 0) {
      return null; // Return null if input is not valid
    }

    return value.reduce((prev, current) => {
      return (prev.dgain > current.dgain) ? prev : current;
    });
  }
}
