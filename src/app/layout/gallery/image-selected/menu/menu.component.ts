import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageSelected } from '../../interface';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
	@Input()
	imageSelected: ImageSelected;

	@Output()
	indexImageEvent = new EventEmitter<number>();

	pause: boolean = false;
	pass: boolean = true;

	onLeft() {
		if (this.imageSelected.index > 0) {
			this.imageSelected.index--;
			this.indexImageEvent.emit(this.imageSelected.index);
		}
	}

	onRight() {
		if (this.imageSelected.index < 4) {
			this.imageSelected.index++;
			this.indexImageEvent.emit(this.imageSelected.index);
		}
	}

	onPlay() {
		if (this.pause) return;

		setTimeout(() => {
			this.onRight();
			this.onPlay();
		}, 2000);
	}

	onPause() {
		this.pause = true;
	}
}
