import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ddf',
  templateUrl: './ddf.component.html',
  styleUrls: []
})
export class DdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setInterval(this.reloadPage, 600000);
  }

  reloadPage(): void {
    window.location.reload();
  }

}
