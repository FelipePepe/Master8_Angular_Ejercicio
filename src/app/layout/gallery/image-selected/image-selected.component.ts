import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ImageSelected } from '../interface'

@Component({
  selector: 'app-image-selected',
  templateUrl: './image-selected.component.html',
  styleUrls: ['./image-selected.component.scss']
})
export class ImageSelectedComponent implements OnInit, OnChanges {

  @Input()
  imageSelected: ImageSelected;

  @Output()
  indexImageEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.imageSelected.uri);
  }

  on_left() {
    if (this.imageSelected.index > 0) {
      this.indexImageEvent.emit(this.imageSelected.index - 1)
    }
  }

  on_right() {
    if (this.imageSelected.index < 3) {
      this.indexImageEvent.emit(this.imageSelected.index + 1)
    }
  }

}
