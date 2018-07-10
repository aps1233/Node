import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appStr]'
})
export class StrDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  @Input() set appStr(shouldAdd: boolean) {  // adding property
    if (shouldAdd)
     {
      // If condition is true add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
     // Else remove template from DOM
      this.viewContainer.clear();
    }
  }

}
