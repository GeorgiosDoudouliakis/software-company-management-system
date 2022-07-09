import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements AfterViewInit {
  private _tooltipElement: HTMLParagraphElement;
  private _reversePlacement = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }
  @Input('tooltip') public title: string;
  @Input() public placement: "top" | "right" | "bottom" | "left";

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _elRef: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
      this._tooltipElement = this._document.createElement("p");
      this._tooltipElement.classList.add("tooltip", this.placement);
      this._tooltipElement.innerText = this.title;
  }

  @HostListener("mouseover") onHover() {
    this._renderer.setStyle(this._elRef.nativeElement, "position", "relative");
    this._tooltipElement.style[(this._reversePlacement as any)[this.placement]] =  (this._elRef.nativeElement.offsetWidth + 10) + 'px';
    this._renderer.appendChild(this._elRef.nativeElement, this._tooltipElement);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this._renderer.removeChild(this._elRef.nativeElement, this._tooltipElement);
  }
}
