<div align="center">
	<a href="https://merry-tiramisu-b4df73.netlify.app" target="_blank"><img src="https://github.com/iamdenis1234/van-life/assets/39136616/35c7affa-1b1b-45c2-86fa-558341d87aac" alt="vanlife logo"></a>
</div>

___

**Vanlife** - A portfolio project showcasing my skills in web development and user experience design

**Vanlife** - An online platform for renting vans, designed to offer users a seamless experience in exploring vehicles for their adventures on the road.

Feel free to check out the [Vanlife site](https://merry-tiramisu-b4df73.netlify.app/).

## :sparkles:Main Technologies & Features
* **React** for dynamic user interfaces
* **Firestore** to store and manage main and user-related data
* **Firebase Google Authentication** for seamless and secure access to profile-specific features
* **Algolia** for fast and extensive search functionality
* **React Router** with new Data APIs, including loaders and actions
* **Tanstack Query** to simplify state management with auto-managed queries and caching
* **Material UI** with custom theming and design for an enhanced user and developer experience
* **Dark** and **Light** color modes with automatic detection based on system settings
* **Protected routes** to ensure access control for authenticated users only
* Full-fledged **search** with **highlighting**, **filtering**, **sorting**, and **pagination**
* **Responsive design** with mobile-first approach, following **BEM** principles
* **User Profile** section to view and manage personal data
* Actions to add/remove vans from **favorites**
* Comprehensive **error handling** leveraging new React Router features
* **XSS** and **Open Redirect** Protection
* **Continuous Deployment** with Netlify

### Better User Experience:
* Optimistic UI for seamless interactions
* Caching and Prefetching to optimize performance
* Minimization of layout shifts for smoother browsing
* Loading indicators for better feedback
* Developed and Tested with Network and CPU throttling
* Tested with Google Lighthouse for performance optimization
* WebP images to improve image loading speed
* Debounced search for efficient querying
* Redirects for unauthorized users
* Split Vendor chunks for optimized loading

### Better Developer Experience:
* Vite for simplified development and build processes
* Prettier for opinionated code formating
* ESLint to quickly find and fix code problems
* Hot Module Replacement to speed up development
* Emotion babel plugin for the minification and optimization of styles
* And more...

## Installation
To view the source code locally, clone the repository and then run the following command in your terminal from the project's root folder:
```shell
#install the necessary dependencies for the project
npm install
```

> [!IMPORTANT]
> Running the project locally with `npm run dev` requires ***.env*** file containing API keys for services such as Firestore and Algolia. However, this file is not included in the repository to prevent abuse of the keys.
