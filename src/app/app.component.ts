import { Component } from '@angular/core';
import { ApiQueryService } from './common/service/api.service./api.get.fictif';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'interceptor-angular';

  constructor(private apiQueryService: ApiQueryService) {}

  ngOnInit() {
    this.apiQueryService
      .getPlaceholder()
      .subscribe((data) => console.log(data));
  }
}
