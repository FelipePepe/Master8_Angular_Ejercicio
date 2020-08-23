import { Component, OnInit } from '@angular/core';
import { GalleryService } from './service';
import { PageEvent } from '@angular/material/paginator';
import { ImageSelectedComponent } from './image-selected/image-selected.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  imageGallery: string[] = [];
  pageEvent: PageEvent;
  currentPage: number = 1;
  currentImage: number = 0;

  imageSelected: string;

  constructor(private galleryService: GalleryService) {
    this.getImageGallery(this.currentPage);
  }

  getImageGallery(page: number): void {
    this.imageGallery = [];
    this.galleryService.getNatureImageGallery(page).subscribe(res => {
      res.photos.map(p => this.imageGallery.push(p.src.medium))
      if (!this.imageSelected) {
        this.imageSelected = this.imageGallery[this.currentImage];
      }
    });
  }

  getImageEvent(event: PageEvent): PageEvent {
    this.getImageGallery(event.pageIndex + 1);
    return event;
  }

  ngOnInit(): void {

  }

}
