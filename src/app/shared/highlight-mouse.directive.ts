import {Directive, HostListener, Renderer2, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  constructor(
    // private renderer: Renderer2, private elementRef: ElementRef
  ) {
  }

  // @HostBinding('style.backgroundColor') backgroundColor!: string;
  @HostBinding('style.backgroundColor') get setColor(): string {
    return this.backgroundColor;
  }
  private backgroundColor!: string;

  @HostListener('mouseover') onMouseOver(): void {
    /* this.renderer.setStyle(
       this.elementRef.nativeElement,
       'background-color',
       'yellow'
     );*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'white'
    );*/
    this.backgroundColor = 'white';
  }

}
