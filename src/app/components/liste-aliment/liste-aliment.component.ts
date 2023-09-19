import { Component, Input, OnInit } from '@angular/core';
import { Aliment } from 'src/app/models/aliment';
import { AlimentService } from 'src/app/services/aliment.service';

@Component({
  selector: 'app-liste-aliment',
  templateUrl: './liste-aliment.component.html',
  styleUrls: ['./liste-aliment.component.css'],
})
export class ListeAlimentComponent {
  @Input() aliments!: Aliment[];
}
