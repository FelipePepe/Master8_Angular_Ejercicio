import { Component, OnInit } from '@angular/core';
import { GalleryService } from './service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ImageSelected } from './interface';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
	imageGallery: string[] = [];
	pageEvent: PageEvent;
	currentPage: number = 1;
	currentImage: number = 0;
	imagePerPage: number = environment.imagePerPage;

	imageSelected: ImageSelected;

	constructor(private galleryService: GalleryService) {
		this.getImageGallery(this.currentPage, 0);
	}

	getImageGallery(page: number, indexImage: number): void {
		this.imageGallery = [];
		this.galleryService.getNatureImageGallery(page).subscribe((res) => {
			res.photos.map((p) => this.imageGallery.push(p.src.medium));
			this.imageSelected = {
				index: indexImage,
				uri: this.imageGallery[this.currentImage],
			};
		});
	}

	getImageEvent(event: PageEvent, indexImage: number): PageEvent {
		this.currentPage = event.pageIndex + 1;
		this.getImageGallery(this.currentPage, indexImage);
		return event;
	}

	ngOnInit(): void {}

	newImageSelected(indexImage: number) {
		if (indexImage === 4 && this.currentPage < 50) {
			this.currentPage++;
			this.currentImage = 0;
			this.getImageGallery(this.currentPage, this.currentImage);
		} else if (indexImage === -1 && this.currentPage > 1) {
			this.currentPage--;
			this.currentImage = 3;
			this.getImageGallery(this.currentPage, this.currentImage);
		} else if (indexImage === -1 && this.currentPage === 1) {
			this.imageSelected = {
				index: 0,
				uri: this.imageGallery[0],
			};
		} else {
			this.imageSelected = {
				index: indexImage,
				uri: this.imageGallery[indexImage],
			};
		}
	}
}
