import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { WatchListService } from '../../core/watch-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.css']
})
export class NavBar {
  private router = inject(Router);
  public WatchList= inject( WatchListService)

  onSearch(event: Event, query: string) {
    event.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      this.router.navigate(['/search'], { queryParams: { q: trimmedQuery } });
    }
  }
}


