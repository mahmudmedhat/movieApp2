import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { environment } from './../../environments/environment';
import { Movises } from '../../core/movises';
import { IMovises } from '../../Models/Imovises';
import { VotePercentPipe } from '../../Models/vote-percent-pipe';
import { WatchListService } from '../../core/watch-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VotePercentPipe, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  responseMovie: IMovises[] = [];
  pages: number[] = [];
  currentPage: number = 1;
  ImgSrc = environment.imageBaseUrl;
  isLoading: boolean = false;

  private _Movises = inject(Movises);

  constructor(public WatchList: WatchListService) {}

  ngOnInit(): void {
    this.loadMovie(this.currentPage);
  }

  loadMovie(page: number): void {
  this.currentPage = page;
  this.isLoading = true;

  this._Movises.getMovie(page).subscribe({
    next: (response) => {
      this.responseMovie = response.results;
      this.pages = Array.from({ length: 4 }, (_, i) => i + 1);
      this.isLoading = false;
    },
    error: (err) => {
      console.log(err);

      this.isLoading = false;
    }
  });
}
  goToPage(page: number) {
    this.loadMovie(page);
  }






  message: string = '';
messageType: 'success' | 'danger' = 'success';

showMessage(msg: string, type: 'success' | 'danger' = 'success') {
  this.message = msg;
  this.messageType = type;

  setTimeout(() => {
    this.message = '';
  }, 2000); // تختفي بعد ثانيتين
}

toggleWishlist(movie: IMovises) {
  if (this.WatchList.isInWishlist(movie.id)) {
    this.WatchList.removeFromWishlist(movie.id);
    this.showMessage('❌ تمت الإزالة من المفضلة', 'danger');
  } else {
    this.WatchList.addToWishlist(movie);
    this.showMessage('✅ تمت الإضافة إلى المفضلة', 'success');
  }
}

}
