import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Breadcrumb } from '../../models/breadcrumb';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-core-breadbrumbs',
  templateUrl: './core-breadbrumbs.component.html',
  styleUrls: ['./core-breadbrumbs.component.scss']
})
export class CoreBreadbrumbsComponent implements OnInit {

  breadcrumbs: Observable<Breadcrumb[]>;

  constructor(
    private readonly ref: ElementRef,
    private readonly renderer: Renderer2,
    private readonly router: Router,
    private readonly breadcrumbService: BreadcrumbsService) {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
  }

  ngOnInit(): void {
    this.checkUrlCompatibility(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkUrlCompatibility(event.url);
      }
    });
  }

  private checkUrlCompatibility(url: string) {
    if (url === '/' || url === '') {
      this.renderer.setStyle(this.ref.nativeElement, 'display', 'none');
    } else {
      this.renderer.setStyle(this.ref.nativeElement, 'display', 'block');
    }
  }

}
