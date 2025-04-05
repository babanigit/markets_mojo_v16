import { Pipe, PipeTransform } from '@angular/core';
import { ItaxHistroyPopup_data_List, The201617_Element } from 'src/app/models/pp/taxHistoryPopup';

@Pipe({
  name: 'unique',
  standalone:true
})
export class UniquePipe implements PipeTransform {

  transform(value: any[], key: string): The201617_Element[] {
    if (!Array.isArray(value) || !key) {
      return value;
    }

    const uniqueItems = value.filter((item, index, self) =>
      index === self.findIndex((t) => (t[key] === item[key]))
    );

    return uniqueItems;
  }

}
