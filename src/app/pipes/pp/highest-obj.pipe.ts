import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highestObj',
  standalone:true,
})
export class HighestObjPipe implements PipeTransform {

  transform(items: any[], no: boolean): any[] {
    if (!items || items.length === 0) {
      return items;
    }

    if(no){
      return items.sort((a, b) => b.dgain - a.dgain);
    }else{
      return items.sort((a, b) => a.dgain - b.dgain);
    }
    
  }
}
