import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value,opt)
  {
    if(opt)
    {
      return (value*opt);
    }
    else{
      return (value*value);
    }
  }

}
