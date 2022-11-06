import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-core-utilsbar',
  templateUrl: './core-utilsbar.component.html',
  styleUrls: ['./core-utilsbar.component.scss']
})
export class CoreUtilsbarComponent implements OnInit, AfterViewInit {

  title: string = '';
  description: string | null = null;
  @ViewChild('description') descriptionRef!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    if (this.route.firstChild) {
      this.title = this.route.firstChild.snapshot.data['title'];
      this.description = this.route.firstChild.snapshot.data['description'];
    }

    if (this.route.firstChild && this.route.firstChild.firstChild) {
      this.title = this.route.firstChild.firstChild.snapshot.data['title'];
      this.description = this.route.firstChild.firstChild.snapshot.data['description'];
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.route.firstChild) {
          this.title = this.route.firstChild.snapshot.data['title'];
          this.description = this.route.firstChild.snapshot.data['description'];
        }

        if (this.route.firstChild && this.route.firstChild.firstChild) {
          this.title = this.route.firstChild.firstChild.snapshot.data['title'];
          this.description = this.route.firstChild.firstChild.snapshot.data['description'];
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.renderer.setProperty(this.descriptionRef.nativeElement, 'innerHTML', this.description !== undefined ? this.description : null);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.renderer.setProperty(this.descriptionRef.nativeElement, 'innerHTML', this.description !== undefined ? this.description : null);
      }
    });
  }

}
