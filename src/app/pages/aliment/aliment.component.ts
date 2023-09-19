import { Component, Input } from '@angular/core';
import { Aliment } from 'src/app/models/aliment';
import { AlimentService } from 'src/app/services/aliment.service';

@Component({
  selector: 'app-aliment',
  templateUrl: './aliment.component.html',
  styleUrls: ['./aliment.component.css'],
})
export class AlimentComponent {
  alimentToDisplay: Aliment[] = [];

  constructor(private alimentService: AlimentService) {}

  ngOnInit() {
    this.alimentService.getAliments().subscribe((aliment) => {
      this.alimentToDisplay = aliment;
      console.log(this.alimentToDisplay);
    });
  }
}
