import {Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirective implements OnChanges {

  @HostBinding('class.mat-elevation-z10')
  applyImportantStyle = false;

  constructor(private elementReference: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.renderer.addClass(this.elementReference.nativeElement, 'mat-elevation-z10');
    this.applyImportantStyle = true;
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.renderer.removeClass(this.elementReference.nativeElement, 'mat-elevation-z10');
    this.applyImportantStyle = false;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


}
