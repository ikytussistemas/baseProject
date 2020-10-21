import { OverlayRef } from '@angular/cdk/overlay';
import { ConfirmComponent } from '../confirm/confirm.component';

export class ComponentRef {
  constructor(private readonly overlay: OverlayRef) { }

  close() {
    this.overlay.dispose();
  }

  isVisible() {
    return this.overlay && this.overlay.overlayElement;
  }

  getPosition() {
    return this.overlay.overlayElement.getBoundingClientRect();
  }
}
