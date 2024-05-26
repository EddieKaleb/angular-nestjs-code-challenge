import { Directive, ElementRef, Input, NgZone } from '@angular/core';
import { fromEvent, switchMap } from 'rxjs';

@Directive({
  selector: '[appCopyClipboard]',
  standalone: true,
})
export class CopyClipboardDirective {
  @Input() public copy!: string;

  constructor(private host: ElementRef<HTMLElement>, private zone: NgZone) {}

  public ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      fromEvent(this.host.nativeElement, 'click')
        .pipe(switchMap(() => navigator.clipboard.writeText(this.copy)))
        .subscribe(() => {});
    });
  }
}
