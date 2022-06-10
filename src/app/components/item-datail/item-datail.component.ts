import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/interfaces/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-datail',
  templateUrl: './item-datail.component.html',
  styleUrls: ['./item-datail.component.scss']
})
export class ItemDatailComponent implements OnInit {

  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal()
  }

  ngOnInit(): void {
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}
