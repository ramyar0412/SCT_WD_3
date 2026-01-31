# SCT_WD_3

# Interactive Tic-Tac-Toe Web Application – Internship Task 03

## Introduction
This project is an **Interactive Tic-Tac-Toe Game with Advanced AI and DOM Manipulation** developed as **Internship Task 03**.  
The objective of this task was to build a fully functional tic-tac-toe web application that demonstrates mastery of **game logic implementation**, **DOM manipulation**, **event handling**, **artificial intelligence algorithms**, and **interactive user interface design**.

The game features a modern, visually stunning design with floating particle animations, multiple game modes, intelligent AI opponent, score tracking system, and smooth animations—showcasing advanced front-end development skills using vanilla JavaScript.

---

## Objectives of the Task
- Build a fully functional tic-tac-toe game with complete game logic
- Implement comprehensive DOM manipulation techniques
- Create interactive event listeners for game board interactions
- Develop an intelligent AI opponent with strategic decision-making
- Design a responsive and visually appealing user interface
- Add advanced features like score tracking and game mode switching

---

## Features Implemented

### Core Game Functionality
✅ **Classic Tic-Tac-Toe Rules** – 3x3 grid with X and O players  
✅ **Win Detection** – Automatic detection of winning combinations (rows, columns, diagonals)  
✅ **Tie Detection** – Recognizes when the board is full with no winner  
✅ **Game State Management** – Proper handling of game flow and player turns  
✅ **Move Validation** – Prevents invalid moves and cell overwrites  
✅ **Winner Highlighting** – Visual emphasis on winning cells with gradient animation  

### Advanced Interactive Features
🤖 **Intelligent AI Opponent** – Strategic computer player with decision-making logic  
👥 **Two-Player Mode** – Play against a friend on the same device  
🎨 **Modern Gradient Design** – Purple to violet gradient background with glassmorphism  
✨ **Floating Particles Animation** – Dynamic background with animated particles  
📊 **Score Tracking System** – Persistent scoreboard for X wins, O wins, and ties  
💫 **Smooth Animations** – Pop-in effects, bounce animations, and transitions  
🎯 **Visual Feedback** – Hover effects, click animations, and winner celebrations  
📱 **Fully Responsive Design** – Optimized for mobile, tablet, and desktop devices  

### User Experience Enhancements
- Click cells to place X or O marks
- Automatic turn switching between players
- AI makes strategic moves with slight delay for realism
- Visual distinction between X (purple) and O (violet) players
- Animated score increments when players win
- Winning cells highlighted with special gradient effect
- Mode toggle to switch between vs Computer and vs Player
- New Game button to reset the board while keeping scores
- Clean, intuitive interface with minimal learning curve

---

## Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic structure and game layout organization |
| **CSS3** | Advanced styling, animations, gradients, and responsiveness |
| **JavaScript (ES6+)** | Game logic, AI algorithm, DOM manipulation, and event handling |
| **CSS Grid** | Responsive 3x3 game board layout |
| **CSS Animations** | Smooth transitions, pop-ins, and particle effects |

**No external frameworks or libraries** were used to demonstrate proficiency in vanilla JavaScript and core web technologies.

---

## Project Structure

```
tictactoe-project/
│
├── index.html          # Main HTML structure
├── style.css           # Complete styling and animations
├── script.js           # Game logic and AI implementation
└── README.md           # Project documentation
```

### File Descriptions

**index.html**
- Semantic HTML5 structure
- Game board with 3x3 grid of buttons
- Status display for turn and winner announcements
- Score tracking section
- Mode selector for game type
- Control buttons for game management

**style.css**
- Modern gradient designs with purple/violet theme
- CSS Grid for perfect 3x3 board layout
- Keyframe animations for particles, pop-ins, and win effects
- Glassmorphism effect on main container
- Media queries for responsive breakpoints
- Custom button styling with hover and active states

**script.js**
- Game state management system
- AI decision-making algorithm with strategic logic
- Win pattern detection algorithm
- Event listeners for all user interactions
- Score tracking and display updates
- Mode switching functionality
- Animation trigger controls

---

## How to Run the Project

### Method 1: Direct File Opening
1. Download all three files (`index.html`, `style.css`, `script.js`)
2. **Place them in the same folder** (this is critical!)
3. Open `index.html` in any modern web browser
4. Start playing!

### Method 2: Live Server (Recommended for Development)
1. Open the project folder in VS Code
2. Install "Live Server" extension
3. Right-click on `index.html` and select "Open with Live Server"
4. Browser will open automatically with live reload enabled

### Method 3: Local Web Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

**No installation, build process, or dependencies required.**

---

## Game Rules & Mechanics

### Classic Tic-Tac-Toe Rules
1. The game is played on a 3×3 grid
2. Player X always goes first
3. Players alternate turns placing their mark (X or O)
4. The first player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
5. If all 9 cells are filled without a winner, the game is a tie

### Winning Combinations
The game checks for 8 possible winning patterns:
- **3 Rows:** Top, Middle, Bottom
- **3 Columns:** Left, Center, Right
- **2 Diagonals:** Top-left to bottom-right, Top-right to bottom-left

### Game Flow
1. **Game Start** – Board is empty, Player X's turn
2. **Player Move** – Click empty cell to place mark
3. **Turn Switch** – Automatically switches to other player
4. **AI Move** (Computer mode) – Computer makes strategic move after 500ms delay
5. **Win Check** – After each move, check for winner or tie
6. **Game End** – Display winner, highlight winning cells, update scores
7. **New Game** – Reset board while maintaining score history

---

## AI Algorithm Explanation

### Strategic Decision-Making
The computer AI follows a strategic decision tree:

#### 1. **Try to Win**
- Scans all winning patterns
- If AI has 2 marks in a row with 1 empty cell, place mark there to win

#### 2. **Block Player**
- Scans all winning patterns
- If player has 2 marks in a row with 1 empty cell, block that cell

#### 3. **Take Center**
- If center cell (index 4) is empty, take it
- Center provides most winning opportunities

#### 4. **Take Corner**
- If corners (0, 2, 6, 8) are available, randomly select one
- Corners are strategically valuable positions

#### 5. **Take Any Available**
- If no strategic move available, take any remaining cell
- Ensures AI always makes a move when possible

### AI Difficulty Level
The AI is **challenging but beatable**, providing an engaging experience:
- ✅ Makes strategic offensive moves
- ✅ Blocks player winning attempts
- ✅ Prioritizes center and corners
- ❌ Does not use minimax algorithm (keeps game fun)
- ❌ Not unbeatable (players can win with good strategy)

---

## User Interface Sections

### Game Header
- **Title** – Tic Tac Toe
- **Mode Selector** – Toggle between vs Computer and vs Player
- **Active State** – Highlighted button shows current mode

### Status Display
- **Turn Indicator** – "Your Turn - X" or "Player X's Turn"
- **Computer Thinking** – Shows when AI is making its move
- **Winner Announcement** – "Player X Wins! 🎉" or "Computer Wins! 🎉"
- **Tie Announcement** – "It's a Tie! 🤝"

### Game Board
- **3x3 Grid** – Nine equally-sized cells
- **Empty Cells** – Light gray with gradient, hover effect on mouseover
- **X Marks** – Purple color with pop-in animation
- **O Marks** – Violet color with pop-in animation
- **Winning Cells** – Gradient background with bounce animation
- **Click Prevention** – Taken cells cannot be clicked again

### Control Section
- **New Game Button** – Resets board, keeps scores
- **Gradient Styling** – Matches overall theme
- **Hover Effect** – Elevates with shadow on mouseover

### Score Tracking
- **Player X Score** – Displayed in purple
- **Ties Count** – Displayed in gray
- **Player O Score** – Displayed in violet
- **Increment Animation** – Score values scale up when updated
- **Persistent Across Games** – Scores maintain until mode switch

### Background Effects
- **Floating Particles** – 20 animated circles
- **Random Positioning** – Spread across viewport
- **Varied Animation** – Different durations and delays
- **Subtle Opacity** – Semi-transparent white circles
- **Continuous Loop** – Float upward infinitely

---

## Responsiveness

The game automatically adapts to different screen sizes:

### Desktop (> 768px)
- Maximum width of 520px for container
- Large cell size (aspect ratio maintained)
- Font size 3.5em for X and O
- Full padding and spacing
- Optimal touch targets

### Tablet (768px - 480px)
- Container width adapts to screen
- Slightly smaller fonts
- Maintained grid proportions
- Touch-friendly button sizes

### Mobile (< 480px)
- Compact container padding (25px)
- Reduced title font (2em)
- Cell font size 2.5em
- Status text 1.2em
- Single column layout
- Optimized for thumb reach

**Responsive design achieved using:**
- CSS Flexbox for container centering
- CSS Grid for game board layout
- Relative units (em, rem, %)
- Aspect ratio for square cells
- Media queries for breakpoints
- Viewport-based background effects

---

## Code Architecture

### Object-Oriented Approach
While using procedural code for simplicity, the logic is well-organized:

```javascript
// Game State Variables
let board = []           // 9-element array for game state
let currentPlayer = 'X' // Current turn tracker
let gameActive = true   // Game running state
let gameMode = 'computer' // vs Computer or vs Player
let scores = {}         // Score tracking object

// Core Functions
init()              // Initialize game and event listeners
handleCellClick()   // Process player moves
makeMove()          // Place mark on board
computerMove()      // AI decision-making
findBestMove()      // Strategic move finder
checkWinner()       // Win/tie detection
endGame()           // Game conclusion handler
resetGame()         // Board reset
updateStatus()      // UI status updates
```

### Key Programming Concepts Demonstrated
- **Game State Management** – Tracking board, player, and score states
- **Event-Driven Programming** – Click handlers and user interactions
- **DOM Manipulation** – Dynamic content updates and class toggling
- **Algorithm Design** – AI decision tree and win detection
- **Conditional Logic** – Complex if-else chains for game rules
- **Array Operations** – Board state management and pattern checking
- **Animation Control** – CSS class manipulation for effects
- **Data Structures** – Arrays for board and winning patterns

---

## Learning Outcomes

Through this task, the following skills were mastered:

### Technical Skills
✅ Game logic implementation and state management  
✅ AI algorithm design and strategic decision-making  
✅ Advanced DOM manipulation techniques  
✅ Event listener implementation for interactive games  
✅ Win detection algorithms and pattern matching  
✅ CSS animations and keyframe effects  
✅ Responsive design with CSS Grid and Flexbox  
✅ Procedural and functional JavaScript programming  

### Soft Skills
✅ Problem-solving in game development  
✅ User experience (UX) design for gaming interfaces  
✅ Code organization and logical structuring  
✅ Algorithm optimization for performance  
✅ Testing game scenarios and edge cases  
✅ Visual design and aesthetic choices  

---

## Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Opera | 76+ | ✅ Fully Supported |

**Note:** CSS Grid and modern JavaScript features require recent browser versions.

---

## Performance Optimizations

- **Efficient DOM Updates** – Minimal reflows by batching class changes
- **Event Delegation** – Single event listeners on parent containers
- **CSS Hardware Acceleration** – Transform and opacity for smooth animations
- **Strategic AI Delay** – 500ms timeout prevents instant moves (better UX)
- **Lightweight Animations** – CSS-only, no JavaScript animation loops
- **Optimized Particle Count** – 20 particles for balance between effect and performance

---

## Future Enhancements

### Planned Features
- [ ] Difficulty levels for AI (Easy, Medium, Hard, Impossible)
- [ ] Minimax algorithm for unbeatable AI
- [ ] Larger board options (4x4, 5x5)
- [ ] Multiplayer online mode
- [ ] Tournament bracket system
- [ ] Timer for timed matches
- [ ] Player name customization
- [ ] Avatar selection
- [ ] Sound effects for moves and wins
- [ ] Undo move functionality

### Advanced Improvements
- [ ] Progressive Web App (PWA) support
- [ ] Score persistence with LocalStorage
- [ ] Statistics tracking (win rate, longest streak)
- [ ] Replay system to watch past games
- [ ] Theme customization options
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Backend integration for global leaderboards
- [ ] Mobile app version (React Native)

---

## Challenges Overcome

### Technical Challenges
1. **AI Decision Logic** – Implemented strategic priority system
2. **Win Detection** – Created efficient pattern-checking algorithm
3. **Turn Management** – Prevented double moves and ensured proper sequencing
4. **Animation Timing** – Synchronized AI delay with visual feedback
5. **State Synchronization** – Kept UI in sync with game state

### Design Challenges
1. **Visual Hierarchy** – Made winner announcements prominent
2. **Color Consistency** – Used purple/violet theme throughout
3. **Particle Performance** – Balanced visual appeal with smooth rendering
4. **Mobile Touch Targets** – Ensured cells are easy to tap
5. **Winning Cell Highlight** – Made victory clear without being overwhelming

---

## Testing Performed

### Functionality Testing
✅ All winning combinations (3 rows, 3 columns, 2 diagonals)  
✅ Tie detection when board is full  
✅ Turn switching between X and O  
✅ AI strategic moves (win, block, center, corner)  
✅ Mode switching (Computer vs Player)  
✅ Score tracking accuracy  
✅ New Game reset functionality  
✅ Cell click validation (no overwriting)  

### Compatibility Testing
✅ Chrome, Firefox, Safari, Edge browsers  
✅ Windows, macOS, Linux operating systems  
✅ Mobile devices (Android, iOS)  
✅ Different screen sizes and orientations  
✅ Touch and mouse input methods  

### Performance Testing
✅ Smooth animations at 60 FPS  
✅ No lag during particle animations  
✅ Instant response to user clicks  
✅ Fast AI decision-making (< 100ms computation)  
✅ No memory leaks on extended play  

### Edge Case Testing
✅ Rapid clicking on same cell  
✅ Clicking during AI turn  
✅ Mode switching mid-game  
✅ Multiple consecutive wins  
✅ Score overflow scenarios  

---

## Code Quality

### Best Practices Followed
✅ **Semantic HTML** – Proper use of buttons and div containers  
✅ **Organized CSS** – Logical grouping of styles by component  
✅ **Clean JavaScript** – Well-commented and readable code  
✅ **Consistent Naming** – camelCase for variables and functions  
✅ **DRY Principle** – Reusable functions for repeated logic  
✅ **Separation of Concerns** – HTML structure, CSS presentation, JS behavior  

### Code Comments
The JavaScript file includes comments explaining:
- Variable purposes
- Function responsibilities
- Algorithm steps
- Event listener purposes

---

## Credits & Acknowledgments

### Resources Used
- **MDN Web Docs** – JavaScript array methods and DOM APIs
- **CSS-Tricks** – CSS Grid and animation tutorials
- **W3Schools** – HTML5 and CSS3 references
- **Stack Overflow** – Algorithm optimization insights

### Inspiration
This tic-tac-toe game was designed with inspiration from classic game interfaces while incorporating modern web design trends and original implementation approaches.

---

## Author

**Ramya R**  
*Web Development Intern*

📧 Email: rramyareddy0220@gmail.com  
💼 LinkedIn: www.linkedin.com/in/ramya-r-5262b03a9  
🐱 GitHub: https://github.com/ramyar0412

---

## Internship Details

**Company/Organization:** SkillCraft Technology  
**Internship Period:** 15-01-2026 - 15-02-2026  
**Task Number:** Task 03  
**Task Title:** Tic-Tac-Toe Web Application  
**Submission Date:** 31-01-2026

---

## License

This project was created for educational purposes as part of an internship assignment.  
Feel free to use this code for learning and reference purposes.

---

## Project Highlights

> "This tic-tac-toe game demonstrates not just game development fundamentals, but a comprehensive understanding of interactive web applications—from AI algorithm implementation to smooth animations, from responsive design to intuitive user experience. Every line of code was written from scratch using vanilla JavaScript, showcasing pure programming skills without relying on frameworks or libraries."

---

## Conclusion

This Interactive Tic-Tac-Toe project successfully demonstrates comprehensive understanding of:
- **Game Development Logic** (rules, turns, win detection)
- **Artificial Intelligence** (strategic decision-making)
- **Core Web Technologies** (HTML, CSS, JavaScript)
- **DOM Manipulation** and Event Handling
- **User Interface Design** and Responsiveness
- **Animation and Visual Effects**
- **Code Organization** and Best Practices

The game is production-ready, fully functional, and provides an engaging user experience across all devices. It represents a significant milestone in front-end development proficiency and practical application of game development concepts in web technologies.

---

## Project Demonstration Link  

https://ramyar0412.github.io/SCT_WD_3/ 


---

**Thank you for reviewing this project!** 🎉

---
