import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ng-banner',
  templateUrl: 'app/banner/banner.component.html',
  styleUrls: ['app/banner/banner.component.css']
})
export class BannerComponent implements OnInit {
  banner: {
    image: string;
    text : string;
  }

  ngOnInit(): void {
    this.setBanner('/public/images/leaf_wide.jpg', 'get inspired');
  }

  setBanner(image, text): void {
    this.banner = {
      image: image,
      text:  text
    };
  }
}