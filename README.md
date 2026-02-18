# IonioPortal

IonioPortal is an academic course management system designed to streamline the complex process of curriculum navigation. It empowers students to make informed decisions about their academic path by aligning their interests with available university tracks.

## Project Impact

*   **Student Empowerment**: Demystifies complex curriculum structures, helping students understand their options clearly.
*   **Academic Alignment**: Provides a structured way for students to visualize how their preferences map to specific degree requirements.
*   **Administrative Efficiency**: Reduces the counseling burden by providing an automated, intelligent first layer of guidance for course selection.

## Key Features

*   **Dynamic Scoping**: A flexible engine that captures student interests and maps them to academic paths.
*   **Weighted Scoring System**: Proprietary logic to calculate alignment with specific "Majors" and "Toolboxes".
*   **Role-Based Access**: Secure environments for both Students and Administrators to manage data.
*   **Modern Architecture**: Clean separation of concerns using industry-standard patterns.

## Tech Stack

*   **Backend**: .NET 8 Web API (Entity Framework Core)
*   **Frontend**: React + TypeScript (Vite)
*   **Database**: PostgreSQL

## Project Structure

*   **/Backend**: Contains the C# Web API, services, and data models.
*   **/Frontend**: Contains the React application and UI components.

## Getting Started

1.  **Clone the repository**
2.  **Backend Setup**:
    *   Navigate to `Backend/`
    *   Copy `appsettings.Example.json` to `appsettings.json` and configure your database.
    *   Copy `course_mapping_all.example.json` to `course_mapping_all.json`.
    *   Run `dotnet run`
3.  **Frontend Setup**:
    *   Navigate to `Frontend/`
    *   Copy `.env.example` to `.env`.
    *   Run `npm install` and then `npm run dev`.

## Contributing

We welcome contributions. Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to submit changes.
