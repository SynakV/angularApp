import { Directive, HostListener, ElementRef, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') addClass = false;

    constructor(private elRef: ElementRef) {}

    @HostListener('click') click() {
        this.addClass = !this.addClass;
    }
}
