# 🔐 SecretInk – Text Encoding & Decoding

**SecretInk** is a simple, interactive, browser-based application that converts normal text into hexadecimal format and decodes hexadecimal values back into readable text.

It is built using HTML, CSS, and JavaScript as part of my JavaScript learning journey.

### ✨ Features

- **Encode Message:** Convert normal text into hexadecimal format.
- **Decode Message:** Convert hexadecimal values back into readable text.
- **Copy Result:** Copy the generated output directly to the clipboard.
- **Clear Option:** Clear both input and output fields instantly.
- **Input Validation:** Prevent empty inputs and invalid hexadecimal formats.
- **Error Handling:** Handle invalid input and decoding errors.
- **Interactive Interface:** Switch easily between Encode and Decode modes.
- **Responsive Design:** Simple interface designed for different screen sizes.

### 🛠️ Technologies Used

- HTML5 – Structure of the application.
- CSS3 – Styling and user interface design.
- JavaScript – Encoding, decoding, validation, and user interactions.

### 💡 JavaScript Concepts Implemented

This project helped me practice the following JavaScript concepts:

- DOM Manipulation
- Event Handling
- Functions and Conditional Statements
- String Manipulation
- Array.from(), map(), and join()
- TextEncoder() and TextDecoder()
- Uint8Array
- Regular Expressions
- Error Handling using try...catch
- Clipboard API (navigator.clipboard.writeText())
- Async/Await

### ⚙️ How It Works

**1. Encoding**

- Enter a normal text message.
- Click the Encode Message button.
- JavaScript converts the text into UTF-8 bytes using TextEncoder().
- Each byte is converted into a two-digit hexadecimal value.
- The encoded result is displayed in the output field.

**2. Decoding**

- Select the Decode option.
- Paste a hexadecimal message.
- Click the Decode Message button.
- JavaScript validates the hexadecimal input.
- The hexadecimal values are converted back into bytes.
- TextDecoder() converts the bytes into the original readable message.

### 📂 Project Structure

```text
SecretInk/
│
├── secret.html
├── secret.css
├── secret.js
└── README.md
```

### 🚀 How to Run the Project

1. Clone this repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Open the project folder in VS Code.

3. Open `secret.html` in your browser.

4. Start encoding and decoding your messages!

### 📸 Application Overview

SecretInk provides two main operations:

- Encode – Converts readable text into hexadecimal format.
- Decode – Converts hexadecimal format back into readable text.

### 🎯 Project Objective

The main objective of this project is to gain practical experience with JavaScript by building an interactive application and understanding how JavaScript handles user input, data conversion, DOM manipulation, and browser functionality.

### 📚 What I Learned

Working on SecretInk improved my understanding of JavaScript functions, built-in objects, array methods, string processing, error handling, and browser APIs.

It also helped me improve my debugging and problem-solving skills through hands-on development.

### ⚠️ Important Note

SecretInk uses hexadecimal encoding, not encryption. It does not provide password protection or cryptographic security. Encoded messages can be decoded without a secret key.

### 👨‍💻 Developed By

Created as part of my JavaScript learning journey.

**Technologies:** HTML | CSS | JavaScript

