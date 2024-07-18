# Patient Dashboard Application

This project is a submission by Okwudili Joshua Odumodu for the frontend engineer position at Coalition Technologies. It is a React application that fetches mock patient data and displays it in a user-friendly dashboard.

## Table of Contents

- [Patient Dashboard Application](#patient-dashboard-application)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Dependencies](#dependencies)
  - [Author](#author)

## Description

This React application fetches mock patient data from [Coalition Technologies Patient Data API](https://app.testedrecruits.com/test/take/1658/973004) and displays it in a dashboard. The dashboard consists of a patient list, diagnosis history, and patient information. The design for this application was based on the mockups provided by Coalition Technologies at [Adobe XD](https://xd.adobe.com/view/121254c9-532f-4772-a1ba-dfe529a96b39-4741/).

## Features

- Displays a list of patients with their profile picture, name, gender, and age.
- Shows detailed information about the selected patient.
- Displays diagnosis history in a line chart for systolic and diastolic blood pressure.

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository**

    ```bash
    git clone https://github.com/pikarestiv/patient-dashboard.git
    cd patient-dashboard
    ```

2. **Install dependencies**

    Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then, run:

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm start
    ```

    This will start the application on `http://localhost:3000`.

## Usage

Once the application is running, you can view the patient dashboard by navigating to `http://localhost:3000` in your web browser. The application will fetch the mock patient data from the API and display it in the dashboard.

- Click on any patient in the list to view their detailed information and diagnosis history.
- The diagnosis history chart displays systolic and diastolic blood pressure readings over time.

## Dependencies

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Chart.js](https://www.chartjs.org/) - A JavaScript library for creating charts.
- [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2) - React wrapper for Chart.js.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.

## Author

**Okwudili Joshua Odumodu**

This project was developed as part of a technical test for the application for the role of frontend engineer at Coalition Technologies.