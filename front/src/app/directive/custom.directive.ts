import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el: ElementRef) {
	
  this.el.nativeElement.style.backgroundColor = 'green';
  this.el.nativeElement.style.width="30%";
	}

}
/*

@Directive : The imported Directive symbol provides the Angular the @Directive decorator. 
ElementRef : ElementRef grants direct access to the host DOM element through its nativeElement property. <p appHighlight>Highlight me!</p>
HostListener:  for events like > mouse enters or leaves (The @HostListener decorator lets you subscribe to events of the DOM)
@Input: Currently the highlight color is hard-coded within the directive. That's inflexible. In this section, 
	   you give the developer the power to set the highlight color while applying the directive.
       Begin by adding Input to the list of symbols imported from @angular/core.
	   [for not use of hard coded property set]

      Notice the @Input decorator. It adds metadata to the class



1: attr directive
2: stru dic
3: component dir

ngStle - attibute directive - add cosmatic (use of [])
*ngFor - structure dic - define structure(use of *)

'mouseenter' is alias, you can leave it blank

for structure dir : templateRef and viewcontainerref

TemplateRef (it will refrence to the element object), ViewContainerRef are almost same as ElementRef , but is is use for structure directive. and both will refrence to the container


Renderer/Render2 :The Renderer/Render2 class is an abstraction provided by Angular in the form of a service that allows to manipulate elements of your app without having to touch the DOM directly.	   


diff in angular and angular 4 
https://www.quora.com/What-is-the-difference-between-Angular-2-and-Angular-4


*/