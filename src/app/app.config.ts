import { routes } from './app.routes'; // Import the named routes
import { provideRouter } from '@angular/router';

export const appConfig = {
  providers: [
    provideRouter(routes), // Provide the routes to the application
  ],
};
