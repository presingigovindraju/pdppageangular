import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent implements OnInit {

  // Login URL
  loginURL = 'https://shop.drivemedical.com/us/en/login';


  /**
   * Component initialization
   *
   * When the user comes back from login,
   * check whether there is a URL saved in sessionStorage.
   */
  ngOnInit(): void {

    this.handlePostLoginRedirection();

  }


  /**
   * Get cookie value
   */
  getCookie(cookieName: string): string | null {

    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {

      const cookie = cookies[i].trim();

      if (cookie.startsWith(cookieName + '=')) {

        return cookie.substring(
          cookieName.length + 1
        );

      }
    }

    return null;
  }


  /**
   * Validate Cancellations & Returns URL
   */
  validateURL(event: Event): void {

    // Prevent the normal link navigation
    event.preventDefault();


    // Check login cookie
    const isValidated =
      this.getCookie('us-userLoggedIn');


    // Get the URL from the clicked link
    const rmUrl =
      (event.currentTarget as HTMLAnchorElement).href;


    console.log('validateURL called');

    console.log(
      'isValidated:',
      isValidated
    );

    console.log(
      'rmUrl:',
      rmUrl
    );


    /*
     * If user is already logged in,
     * directly open Return Policy.
     */
    if (isValidated === 'true') {

      console.log(
        'User is logged in. Redirecting to:',
        rmUrl
      );

      window.location.href = rmUrl;

    }

    /*
     * If user is NOT logged in,
     * save the Return Policy URL first,
     * then redirect user to login.
     */
    else {

      console.log(
        'User is not logged in.'
      );


      // Save URL for after login
      sessionStorage.setItem(
        'redirectAfterLogin',
        rmUrl
      );


      console.log(
        'Saved redirect URL:',
        rmUrl
      );


      // Redirect to login
      window.location.href =
        this.loginURL;

    }

  }


  /**
   * Handle redirect after successful login
   */
  handlePostLoginRedirection(): void {

    // Check whether user is logged in
    const isValidated =
      this.getCookie('us-userLoggedIn');


    // Get previously saved URL
    const redirectAfterLogin =
      sessionStorage.getItem(
        'redirectAfterLogin'
      );


    console.log(
      'Post-login redirection check'
    );

    console.log(
      'isValidated:',
      isValidated
    );

    console.log(
      'redirectAfterLogin:',
      redirectAfterLogin
    );


    /*
     * If the user is logged in
     * and we have a saved URL,
     * redirect them there.
     */
    if (
      isValidated === 'true' &&
      redirectAfterLogin
    ) {

      console.log(
        'User logged in successfully.'
      );

      console.log(
        'Redirecting to:',
        redirectAfterLogin
      );


      // Remove URL from sessionStorage
      sessionStorage.removeItem(
        'redirectAfterLogin'
      );


      // Redirect to saved URL
      window.location.href =
        redirectAfterLogin;

    }

  }

}