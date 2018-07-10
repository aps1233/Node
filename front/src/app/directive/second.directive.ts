import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSecond]'
})
export class SecondDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mouseenter') onmouseenter()
  {
    this.el.nativeElement.style.backgroundColor="yellow";
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.el.nativeElement.style.backgroundColor="pink";
  }
  @HostListener('click') onclick()
  {
    this.el.nativeElement.style.backgroundColor="gray";
  }

}
