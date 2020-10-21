import { Component, OnInit } from '@angular/core';
import { ClientService } from './services';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Designer Fitness';

  constructor(
    private swUpdate: SwUpdate,
  ) {
  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(next => {
        if (
          confirm('Nova versão disponível. Recarregar a página para receber?')
        ) {
          window.location.reload();
        }
      });
    }
  }
}
