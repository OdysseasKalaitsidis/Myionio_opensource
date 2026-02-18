# Contributing to IonioPortal

Thank you for your interest in contributing to IonioPortal! We welcome contributions from the community to help improve this project.

## How to Contribute

1.  **Fork the Repository**: Click the "Fork" button at the top right of this page to create your own copy of the repository.
2.  **Clone the Repository**: Clone your forked repository to your local machine.
    ```bash
    git clone https://github.com/YOUR_USERNAME/Myionio_opensource.git
    cd Myionio_opensource
    ```
3.  **Create a Branch**: Create a new branch for your feature or bug fix.
    ```bash
    git checkout -b feature/amazing-feature
    ```
4.  **Make Changes**: Implement your changes. Please ensure your code follows the existing style and conventions.
5.  **Commit Changes**: Commit your changes with a descriptive commit message.
    ```bash
    git commit -m "Add some amazing feature"
    ```
6.  **Push to Branch**: Push your changes to your forked repository.
    ```bash
    git push origin feature/amazing-feature
    ```
7.  **Open a Pull Request**: Go to the original repository and open a Pull Request (PR) from your forked branch. Provide a clear description of your changes.

## Development Guidelines

*   **Backend**: The backend is built with .NET 8. Ensure you have the .NET SDK installed.
    *   Configuration: Use `appsettings.Example.json` as a template for `appsettings.json`.
*   **Frontend**: The frontend is built with React and Vite.
    *   Configuration: Use `.env.example` as a template for `.env`.
    *   Run `npm install` to install dependencies and `npm run dev` to start the development server.
*   **Data**: The project uses example data files (`*.example.json`) to protect proprietary information. When developing, you can use these or create your own local data files.

## Code of Conduct

Please note that we expect all contributors to be respectful and constructive. Harassment or abusive behavior will not be tolerated.

Thank you for helping make IonioPortal better!
