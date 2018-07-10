import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFinal7]'
})
export class Final7Directive {

  constructor(private temp: TemplateRef<any> , private vc:ViewContainerRef) { }

  @Input('appFinal7') set cpDelay(delay: number) {
    this.vc.clear();
    setTimeout(() =>
      { 
          this.vc.createEmbeddedView(this.temp);
    }, delay);
 }

}
