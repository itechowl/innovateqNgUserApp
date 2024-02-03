import { Component, OnInit, inject } from '@angular/core';
import { LayoutComponent } from './theme/layout/layout.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'innovateqNgUserApp';
  private breakpointObserver = inject(BreakpointObserver);

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.TabletLandscape])
      .subscribe((result) => {
        if (result.matches) {
        }
      });
  }
}
