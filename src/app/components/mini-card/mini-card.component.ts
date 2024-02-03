import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mini-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.scss',
})
export class MiniCardComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() icon!: string;
  @Input() color!: string;
}
