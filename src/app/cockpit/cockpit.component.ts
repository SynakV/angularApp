import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: 'app-cockpit',
    styleUrls: ['cockpit.component.css'],
    templateUrl: 'cockpit.component.html'
})

export class CockpitComponent implements OnInit {

    @Output()
    serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output()
    blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

    @ViewChild('serverName') serverName: ElementRef;
    @ViewChild('serverContent') serverContent: ElementRef;

    // newServerName = '';
    // newServerContent = '';

    constructor() {
    }

    ngOnInit() {
    }

    onAddServer() {
        this.serverCreated.emit({
            serverName: this.serverName.nativeElement.value,
            serverContent: this.serverContent.nativeElement.value
        });
    }

    onAddBlueprint() {
        this.blueprintCreated.emit({
            blueprintName: this.serverName.nativeElement.value,
            blueprintContent: this.serverContent.nativeElement.value
        });
    }

}
