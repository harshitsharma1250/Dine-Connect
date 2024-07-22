#  DINE-CONNECT

## Overview

**DineConnect** is a powerful and scalable enterprise-level food and dining ordering and delivery application designed to streamline the entire dining experience. Built with modern technologies, DineConnect offers a seamless and efficient platform for users to explore menus, place orders, and enjoy timely deliveries.

### Features

- **User-Friendly Interface**: Leverages Vite and React to provide a responsive and intuitive user experience.
- **TypeScript Support**: Ensures type safety and enhances development efficiency.
- **Dynamic Backend**: Powered by Node.js and MongoDB, offering robust performance and scalability.
- **Stylish Design**: Utilizes Tailwind CSS for a clean and modern UI design.
- **Efficient Routing**: Incorporates ShadyCN for optimized and reliable routing.

### Technologies

- **Frontend**: Vite, React, TypeScript, Tailwind CSS, React-Query
- **Backend**: Node.js, MongoDB
- **Routing**: ShadyCN, Auth0

### <em>What we learned new on Day 0 </em>
- How to create used defined global snippets for functional componets.
- How to resolve the proxy network issue (which we encountered during our installation of ShadyCn).


### <em>What we developed new on Day 1 </em>
- How to add Auth0 Authentication for the user login.
- Auth0 authentication is based on a usecontext api under the hood.
- UseContext api makes it very reliable to help in redirect and redirect. 


### <em>What we developed new on Day 2 </em>
- Create user model to save the user credentials in the database
- Installing React query, **why react query ?** it heps in data fetching, cache managing, also provides API to interact with the cache.
- Added route to api-callback **reason** when the user logs in the credentials are stored to the backend directly by using our callback API ans useContextAPI.

