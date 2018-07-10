import { Directive, HostListener, ElementRef, Renderer, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFifthDir]'
})
export class FifthDirDirective {

  constructor(private el:ElementRef, private re:Renderer, private re2:Renderer2) {

    
  }

  @HostListener('mouseenter') onmouseenter() {
    this.re.setElementStyle(this.el.nativeElement, 'background-color', 'grey'); 
    this.re2.addClass(this.el.nativeElement,'wild');
    
  }

  @HostListener('mouseleave') onmouseleave() {
    this.re.setElementStyle(this.el.nativeElement, 'background-color', 'yellow');
    this.re2.removeClass(this.el.nativeElement,'wild');
    
  }

}
