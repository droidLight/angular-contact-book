import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  modalState: Record<string, boolean> = {
    "modal": true,
    "modal-open": false,
    "modal-close": true
  };

  showModal() {
    this.modalState = {
      "modal": true,
      "modal-open": true,
      "modal-close": false
    };
  }

  closeModal() {
    this.modalState = {
      "modal": true,
      "modal-open": false,
      "modal-close": true
    };
  }
}
