import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[appFourthDir]'
})
export class FourthDirDirective {
  //isHidden: boolean = true; 
  isHidden: boolean = false; 
  constructor(private tr: TemplateRef<any>, private vc: ViewContainerRef) { 
  if(!(this.isHidden)) { 
  this.vc.createEmbeddedView(this.tr);
  }
  else
  {
  this.vc.clear();  
  }

  }

}
