import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appThird]'
})
export class ThirdDirective {
 /* @Input() customHover: string; */
 @Input() appThird: string;
 @Input() appThird2: string;
  constructor(private el: ElementRef) { }

@HostListener('mouseenter') onmouseenter() {
  this.el.nativeElement.style.backgroundColor = this.appThird;
}

@HostListener('mouseleave')  onmouseleave() {
 this.el.nativeElement.style.backgroundColor = this.appThird2;
}
/*appThird used for @Input() appThird: string; for one time, we can not use in same way in multiple time */
}