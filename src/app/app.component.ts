import { Component } from '@angular/core';

// Declaramos las variables para jQuery
declare var $: any;

@Component({
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-angular';

  constructor() {
    // Floating label headings for the contact form
    $('body').on('input propertychange', '.floating-label-form-group', function(e) {
      $(this).toggleClass('floating-label-form-group-with-value', !!$(e.target).val());
    }).on('focus', '.floating-label-form-group', function() {
      $(this).addClass('floating-label-form-group-with-focus');
    }).on('blur', '.floating-label-form-group', function() {
      $(this).removeClass('floating-label-form-group-with-focus');
    });

    // Show the navbar when the page is scrolled up
    const MQL = 992;

    // primary navigation slide-in effect
    if ($(window).width() > MQL) {
      const headerHeight = $('#mainNav').height();
      $(window).on('scroll', {
          previousTop: 0
        },
        function() {
          const currentTop = $(window).scrollTop();
          // check if user is scrolling up
          if (currentTop < this.previousTop) {
            // if scrolling up...
            if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
              $('#mainNav').addClass('is-visible');
            } else {
              $('#mainNav').removeClass('is-visible is-fixed');
            }
          } else if (currentTop > this.previousTop) {
            // if scrolling down...
            $('#mainNav').removeClass('is-visible');
            if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) { $('#mainNav').addClass('is-fixed'); }
          }
          this.previousTop = currentTop;
        });
    }
  }
  init() {

  }
}
