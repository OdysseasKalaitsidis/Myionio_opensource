# IonioPortal (Open Source Edition)

Welcome to the open-source repository for **IonioPortal**, an intelligent academic course recommendation engine designed to help students navigate their curriculum with AI-driven insights.

## 🚀 About The Project

IonioPortal leverages Large Language Models (LLMs) to analyze student preferences and academic history, providing personalized course and toolbox recommendations. It features a dynamic questionnaire system and a robust rule engine to tailor suggestions based on specific academic tracks.

> **Note**: This repository contains the source code for the application. Specific curriculum data and scoring rules have been replaced with example data to maintain confidentiality.

## 🛠️ Tech Stack

*   **Backend**: .NET 8 Web API
*   **Frontend**: React (Vite) + TypeScript + TailwindCSS
*   **Database**: PostgreSQL (Entity Framework Core)
*   **AI Integration**: OpenAI API (GPT-4o)
*   **Authentication**: JWT & Google OAuth

## ✨ Key Features

*   **AI-Powered Recommendations**: Uses OpenAI to analyze qualitative student input.
*   **Dynamic Scoring Engine**: A flexible `ScoreTracker` system that weights student answers against academic tracks ("Majors" and "Toolboxes").
*   **Interactive UI**: A modern, responsive interface built with React and TailwindCSS.
*   **Role-Based Data**: Distinguishes between different user types (Students vs. Admins).

## 📂 Project Structure

*   `Backend/`: C# .NET Web API solution.
    *   `Services/`: Core business logic (Recommendation Engine, Auth).
    *   `Controllers/`: API Endpoints.
    *   `Data/`: EF Core context and models.
*   `Frontend/`: React application.
    *   `src/components/`: Reusable UI components.
    *   `src/pages/`: Application views (Schedule, Questionnaire, etc.).

## 🔧 Getting Started

### Prerequisites
*   .NET 8 SDK
*   Node.js & npm
*   PostgreSQL

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/yourusername/IonioPortal.git
    ```

2.  **Setup Backend**
    ```sh
    cd Backend
    # Rename example config
    cp appsettings.Example.json appsettings.json
    # Rename example data
    cp course_mapping_all.example.json course_mapping_all.json
    # Update appsettings.json with your DB string and API keys
    dotnet run
    ```

3.  **Setup Frontend**
    ```sh
    cd Frontend
    # Rename example env
    cp .env.example .env
    npm install
    npm run dev
    ```

## 🤝 Contact

For more information about the architecture or implementation details, feel free to contact me directly.
