import {
	Component,
	OnInit,
	Input,
	Output,
	OnChanges,
	EventEmitter,
} from '@angular/core';
import { ImageSelected } from '../interface';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'app-image-selected',
	templateUrl: './image-selected.component.html',
	styleUrls: ['./image-selected.component.scss'],
})
export class ImageSelectedComponent implements OnInit, OnChanges {
	@Input()
	imageSelected: ImageSelected;

	maxIndexImage: number = environment.imagePerPage;

	@Output()
	indexImageEvent = new EventEmitter<number>();

	constructor() {}

	ngOnInit(): void {}

	ngOnChanges(): void {
		console.log(this.imageSelected.uri);
	}

	newImageSelected(indexImage: number) {
		this.imageSelected.index = indexImage;
		this.indexImageEvent.emit(this.imageSelected.index);
	}
}
