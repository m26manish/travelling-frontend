Here's a sample `README.md` file for your project.

---

## Live Demo

[View the live application here](https://travelling-frontend-lovat.vercel.app/)
login id:testuser
login password:testpass

# Packages Booking Application

This is a **Packages Booking Application** built with React, designed to fetch, display, search, and sort packages. Users can search by name or location, sort by price or location, and confirm a booking with a simple popup.

## Features

- **Fetch Packages**: Fetches a list of packages from a backend API.
- **Search Functionality**: Allows users to search packages by name or location.
- **Sort Functionality**: Sort packages by price or location.
- **Booking Confirmation**: Provides a confirmation popup on booking.
- **Responsive UI**: Fully responsive design using Tailwind CSS.

## Technologies Used

- **React**: For creating a dynamic and interactive user interface.
- **Axios**: For making HTTP requests to the backend API.
- **Tailwind CSS**: For responsive and modern styling.
- **React Hooks**: For managing state and side effects in the component.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/m26manish/travelling-frontend
   cd travelling-frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm run dev
   ```

## Usage

### Fetching Packages

On loading, the application will automatically fetch a list of available packages from the API endpoint `https://travelling-backend-wg50.onrender.com`. The data will display as cards in a grid layout.

### Searching Packages

1. Use the search input field to search packages by **name** or **location**.
2. The list dynamically updates based on your query.

### Sorting Packages

1. Choose an option from the dropdown menu to **sort by price** or **sort by location**.
2. The displayed packages list updates to match the selected sort option.

### Booking Confirmation

1. To book a package, click the **Book Now** button on a package card.
2. A confirmation dialog appears. If confirmed, a "Booking confirmed!" popup will appear.
3. Click the "Close" button to close the popup and go back to the previous page.

## Code Overview

### Component Structure

- **`Packages` Component**: The main component that manages the entire packages list, search, sort, and booking functionalities.

### Important Functions

- **`fetchPackages`**: Fetches package data from the API.
- **`handleClick`**: Handles the booking confirmation flow.
- **`closePopup`**: Closes the popup and navigates to the previous page.

### State Variables

- `packages`: Stores the list of packages.
- `sortOption`: Stores the selected sort option (price or location).
- `searchQuery`: Stores the search query entered by the user.
- `loading`: Controls loading state for the package fetch request.
- `error`: Stores any error message that occurs during data fetching.
- `showPopup`: Controls the visibility of the booking confirmation popup.

## API Endpoint

This app expects a backend API at `http://localhost:8080/api/packages`. The API should return an array of package objects with fields like `name`, `location`, `price`, and `description`.

## Folder Structure

```
src/
├── components/
│   └── Packages.js           # Main component for packages list
├── App.js                    # Main application file
├── index.js                  # Entry point for React
└── styles/
    └── index.css             # Global styles
```

## Possible Improvements

- Add additional filters for advanced searches.
- Implement pagination for large datasets.
- Add more booking details (e.g., date selection, user information).

## License

This project is licensed under the MIT License.

---
