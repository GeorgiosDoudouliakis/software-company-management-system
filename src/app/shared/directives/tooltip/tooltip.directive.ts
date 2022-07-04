import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements AfterViewInit {
  private tooltipElement: HTMLParagraphElement;
  @Input('tooltip') title: string;
  @Input() placement: "top" | "right" | "bottom" | "left";

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elRef: ElementRef, 
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
      this.tooltipElement = this.document.createElement("p");
      this.tooltipElement.classList.add("tooltip", this.placement);
      this.tooltipElement.innerText = this.title;
  }

  @HostListener("mouseover") onHover() {
    this.renderer.setStyle(this.elRef.nativeElement, "position", "relative");
    this.renderer.appendChild(this.elRef.nativeElement, this.tooltipElement);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.removeChild(this.elRef.nativeElement, this.tooltipElement);
  }
}
