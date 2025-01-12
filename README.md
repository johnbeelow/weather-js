# Overview

This application is a simple yet functional weather forecast tool written in plain JavaScript. It provides users with the ability to find real-time weather information and view detailed forecasts for the current day. The application uses Parcel for efficient module bundling and high performance.

## Features

- **City Search**: Quick and intuitive search for weather information in any city.
- **Current Weather View**: Displays key metrics such as temperature, humidity, wind speed, and more.
- **Daily Data**: A detailed list of weather conditions for the entire day, including hourly changes.
- **Favorites Management**: Allows users to add and remove cities from a favorites list for quick access.

## Installation

To get started with the application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/johnbeelow/weather-js.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-js
   ```

3. Install Parcel for module bundling:
   ```bash
   npm install --save-dev parcel
   ```

4. Install the required libraries:
   ```bash
   npm install date-fns --save
   npm i js-cookie
   ```

Now the application is ready to use! To start it, use Parcel:
```bash
npx parcel index.html 
