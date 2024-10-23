# Gridoku - Sudoku Game Application

## Introduction

Welcome to **Gridoku**, the ultimate Sudoku game application! This containerized, user-friendly app lets you generate, play, and solve Sudoku puzzles with a variety of features that enhance your experience. Whether you're a beginner or a seasoned Sudoku expert, Gridoku has something for everyone.

## Key Features

### 1. Sudoku Grid Display
- The app provides a clear and intuitive visual representation of the Sudoku grid, making it easy to play and track your progress.

### 2. Difficulty Levels
- Choose from three different levels of difficulty to match your skill:
  - **Easy**
  - **Medium**
  - **Hard**

### 3. Timer
- A built-in timer tracks how long you spend solving each puzzle.
- When the timer is stopped, the Sudoku grid is blurred, and you can't continue solving until the timer is restarted.

### 4. Error Counting
- Every time you input an incorrect number, the error counter increases, helping you keep track of your mistakes and improve your solving accuracy.

### 5. Hints
- Stuck on a puzzle? Use the hint feature to fill in the correct number in any empty cell, allowing you to make progress when you're unsure of the next step.

### 6. Color Themes (Dark Mode)
- The app supports a dark mode with a custom color palette for a more comfortable visual experience.
- The original numbers generated by the puzzle are visually distinguished from the numbers entered by the user.

### 7. User Input and Interaction
- The user selects a number from the number bar at the bottom of the screen and can then fill the selected number into the appropriate cells on the grid.
- The grid dynamically updates to reflect user inputs and changes.

### 8. Containerization
- The entire application is containerized using Docker. With a `Dockerfile` and `docker-compose`, it's easy to set up and deploy Gridoku across different environments.

## How to Play
1. Select a difficulty level (Easy, Medium, or Hard).
2. Start the game and the timer begins tracking your progress.
3. Select a number from the bar at the bottom and fill in the corresponding empty cells.
4. If you're stuck, use the **Hint** button to get help.
5. Keep an eye on the error counter to monitor your accuracy.
6. The game pauses (blurs) when you stop the timer, and you can't make moves until the timer is restarted.

## Technologies Used
- **Python** (Django)
- **Docker** for containerization
- **JavaScript, CSS** for the interactive front-end
- **Dark Mode** support with a customized color palette
- **Efficient Sudoku Solving Algorithm**

## Contact
For any questions, feedback, or support, please reach out to [Katarína Kováčová](mailto:katarinakovacova100@gmail.com).

