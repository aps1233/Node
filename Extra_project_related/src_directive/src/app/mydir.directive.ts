import { Directive,HostListener, ElementRef, Renderer } from '@angular/core';
@Directive({
  selector: '[appMydir]'
})
export class MydirDirective 
{
  constructor(private el: ElementRef,private renderer: Renderer)
   { 
    
   }
   @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setElementStyle(this.el.nativeElement, 'background-color', 'grey');
    }
  @HostListener('mouseleave') onMouseLeave() {
  this.renderer.setElementStyle(this.el.nativeElement, 'background-color', 'yellow');
}

}
/*

@Directive : The imported Directive symbol provides the Angular the @Directive decorator. 
ElementRef : ElementRef grants direct access to the host DOM element through its nativeElement property. <p appHighlight>Highlight me!</p>
HostListener:  for events like > mouse enters or leaves (The @HostListener decorator lets you subscribe to events of the DOM)
				The @HostListener decorator lets you subscribe to events of the DOM element
@Input: Currently the highlight color is hard-coded within the directive. That's inflexible. In this section, 
	   you give the developer the power to set the highlight color while applying the directive.
       Begin by adding Input to the list of symbols imported from @angular/core.
	   [for not use of hard coded property set]


Renderer :The Renderer2 class is an abstraction provided by Angular in the form of a service that allows to manipulate elements of your app without having to touch the DOM directly.	   
*/
