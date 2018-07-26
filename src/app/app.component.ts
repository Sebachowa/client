import { Component } from '@angular/core';
import { CohortService } from './services/cohort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "";
  pictureUrl = "";

  constructor(private cohortService: CohortService) {}

  submitForm(form) {
    if (form.valid) {
      const data = {
        name: this.name,
        pictureUrl: this.pictureUrl
      };
      this.cohortService.create(data)
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
