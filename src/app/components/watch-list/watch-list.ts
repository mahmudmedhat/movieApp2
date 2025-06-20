import { Component } from '@angular/core';
import { WatchListService } from '../../core/watch-list';
import { IMovises } from '../../Models/Imovises';
import { VotePercentPipe } from '../../Models/vote-percent-pipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-watch-list',
  imports: [CommonModule,VotePercentPipe],
  templateUrl: './watch-list.html',
  styleUrl: './watch-list.css'
})
export class WatchListC {
constructor(public _watchListService: WatchListService) {}

  get movies(): IMovises[] {
    return this._watchListService.getWishlist();
  }

  removeFromWatchlist(id: number) {
    this._watchListService.removeFromWishlist(id);
  }
}
