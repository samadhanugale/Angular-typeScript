import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charAt'
})
export class CharAtPipe implements PipeTransform {

  transform(property:string,index:number) {
    return property.charAt(index);
  }

}
