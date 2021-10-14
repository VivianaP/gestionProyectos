
import {ViewEncapsulation} from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
    title = 'Vision7 Dashboard';


    constructor() { }

    ngOnInit() {
    }


}
