# Master Mind

![Screenshot 2024-06-25 at 5 03 43 PM](https://github.com/LeviGreen/master-mind/assets/52007192/b6fb9909-99f6-4406-81a7-03fd42e917ab)


This is a React App for the game of Master Mind, a classic code-breaking game where one player tries to guess the code set by another within a certain number of guesses. The game is built using React, a popular JavaScript library for building user interfaces, along with HTML and CSS for styling.

## How to Play

To play Master Mind, visit [Master Mind Game](http://levigreen.github.io/master-mind).

The objective of the game is to guess the correct sequence of colors chosen by the game. After each guess, you will receive feedback in the form of colored pegs indicating how many of your chosen colors are in the correct spot and how many are correct colors but in the wrong spot.

- **Black Peg**: Indicates a color that is correct and in the correct position.
- **White Peg**: Indicates a color that is correct but in the wrong position.

Use this feedback to make better guesses in subsequent turns. The game continues until you guess the correct combination or run out of turns.

## Local Development

If you're interested in contributing to the development of Master Mind, you can set up a local development environment by following these steps. This guide assumes you have a basic understanding of terminal/command line usage and that you have Git and Node.js installed on your computer.

### 1. Clone the Repository

First, clone the repository to your local machine using Git. Open your terminal, navigate to the directory where you want to clone the repository, and run:
```bash
git clone https://github.com/levigreen/master-mind.git
```

This command creates a new directory named master-mind and clones the repository into it.

### 2. Install Dependencies
Navigate into the project directory:
```bash
cd master-mind
```

Then, install the project dependencies using npm:
```bash
npm install
```

This command reads the package.json file in the project directory and installs all the necessary dependencies listed there.

3. Start the Development Server
Once the dependencies are installed, you can start the development server by running:
```bash
npm start
```

This command starts a local web server and opens the project in your default web browser (visit `localhost:3000` in any browser). As you make changes to the code, the browser will automatically reload to reflect those changes.

## Contributing
Contributions are welcome! If you have an idea for improving the game or have found a bug, feel free to clone the repository, make your changes, and submit a pull request. If you're new to contributing to open source, the [GitHub documentation on creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) is a great place to start.

Thank you for your interest in contributing to Master Mind!
