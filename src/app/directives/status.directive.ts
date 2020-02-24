import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding, HostListener, Input,
  OnDestroy,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { StatusComponent } from '../status/status.component';

@Directive({
  selector: '[status]',
})
export class StatusDirective implements OnInit, OnDestroy {

  private element: HTMLElement;
  private statusRef: ComponentRef<StatusComponent>;

  @Input()
  status: string = '';

  @HostListener('click') onClick() {
    this.showStatus();
  }

  @HostListener('mouseleave') onMouseleave() {
    this.hideStatus();
  }

  // tslint:disable-next-line:max-line-length
  constructor(private elementRef: ElementRef,
              private viewContainer: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.element = this.elementRef.nativeElement;
  }

  ngOnDestroy() {
    this.hideStatus();
  }

  private createStatus(content: string): ComponentRef<StatusComponent> {
    this.viewContainer.clear();
    const statusComponentFactory = this.componentFactoryResolver.resolveComponentFactory(StatusComponent);
    const statusComponentRef = this.viewContainer.createComponent(statusComponentFactory);
    statusComponentRef.instance.content = content;
    return statusComponentRef;
  }


  hideStatus() {
    if (this.statusRef) {
      this.statusRef.destroy();
      this.statusRef = null;
    }
  }
  showStatus() {
    this.statusRef = this.createStatus(this.status);
    const statusEl = this.statusRef.location.nativeElement;
    console.log(this.status);
  }


}
