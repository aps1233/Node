import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appSixthLoopDir]'
})
export class SixthLoopDirDirective {

  constructor(private tr: TemplateRef<any>, private vc:ViewContainerRef) { }
  @Input('appSixthLoopDir') set fun_loop(num:number)
  {
    this.vc.clear();
    for(var i=0; i < num ; i++)
    {
      this.vc.createEmbeddedView(this.tr);
    }
  } 

}
