import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() defaultColor = 'white';
  @Input('appHighlight') highlightColor = 'yellow';

  constructor() {
  }

  @HostBinding('style.backgroundColor') get setColor(): string {
    return this.backgroundColor;
  }

  private backgroundColor!: string;

  @HostListener('mouseover') onMouseOver(): void {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
