import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatMenuModule } from '@angular/material/menu';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { MiniCardComponent } from '../../components/mini-card/mini-card.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    CardComponent,
    MiniCardComponent,
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private breakpointObserver = inject(BreakpointObserver);

  miniCardData!: any;

  ngOnInit() {
    this.miniCardData = [
      {
        title: 'Total orders',
        value: '345',
        color: 'primary',
        icon: 'shopping_cart',
      },
      {
        title: 'Total Expenses',
        value: '267',
        color: 'primary',
        icon: 'account_balance_wallet',
      },
      {
        title: 'Total Revenue',
        value: '345',
        color: 'primary',
        icon: 'poll',
      },
      {
        title: 'New Users',
        value: '345',
        color: 'primary',
        icon: 'person',
      },
    ];
  }

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          table: { cols: 1, rows: 2 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        table: { cols: 4, rows: 2 },
      };
    })
  );
}
