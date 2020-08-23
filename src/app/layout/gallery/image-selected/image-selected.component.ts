import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-image-selected',
  templateUrl: './image-selected.component.html',
  styleUrls: ['./image-selected.component.scss']
})
export class ImageSelectedComponent implements OnInit, OnChanges {

  @Input()
  imageSelected: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.imageSelected);
  }

}
