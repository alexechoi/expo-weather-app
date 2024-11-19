# Welcome to the Weather App Expo Project 👋

This project is an Expo application designed to provide weather information based on user location. Follow the steps below to set up and run the project.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- npm (comes with Node.js)
- Expo CLI (install globally with `npm install -g expo-cli`)

### Step 1: Install Dependencies

Navigate to the project directory in your terminal and run the following command to install the necessary dependencies:

```
npm install
```

### Step 2: Start the App

Once the dependencies are installed, you can start the app with:

```
npx expo start
```

This command will launch the Expo development server. You will see options to open the app in:

- A development build
- An Android emulator
- An iOS simulator
- Expo Go (a mobile app for testing)

### Project Structure

The project is organized as follows:

- **app/**: Contains the main application code.
  - **_layout.tsx**: The root layout component for the app.
  - **index.tsx**: The main entry point for the weather functionality.
  - **components/**: Contains reusable components like `WeatherInfo`, `WeatherMap`, and `CoordinatesModal`.
  - **types/**: Defines TypeScript interfaces for weather data and location data.
  - **hooks/**: Custom hooks for managing weather data.
  - **services/**: Contains the weather service for fetching weather data from an API.
  - **utils/**: Utility functions for handling location data.

### Step 3: Developing the App

You can start developing by editing the files inside the **app** directory. The project uses [file-based routing](https://docs.expo.dev/router/introduction), making it easy to manage navigation and components.

### Learn More

Feel free to DM me on X @alexchhk