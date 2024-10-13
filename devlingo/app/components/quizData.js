export const quizQuestions = [
    {
        question: "What is the correct way to print 'Hello, world!' in Python?",
        options: [
            { answer: "print('Hello, world!')", isCorrect: true },
            { answer: "echo('Hello, world!')", isCorrect: false },
            { answer: "printf('Hello, world!')", isCorrect: false },
            { answer: "print(Hello, world!)", isCorrect: false }
        ]
    },
    {
        question: "What will the following code print?\nx = 5\ny = 10\nz = x + y\nprint(z)",
        options: [
            { answer: "15", isCorrect: true },
            { answer: "x + y", isCorrect: false },
            { answer: "5 + 10", isCorrect: false },
            { answer: "Error", isCorrect: false }
        ]
    },
    {
        question: "What is the output of the following function?\n\ndef add(a, b):\n    return a + b\nresult = add(5, 10)\nprint(result)",
        options: [
            { answer: "15", isCorrect: true },
            { answer: "510", isCorrect: false },
            { answer: "None", isCorrect: false },
            { answer: "Error", isCorrect: false }
        ]
    },
    {
        question: "What does the following loop print?\nfor i in range(3):\n    print(i)",
        options: [
            { answer: "0 1 2", isCorrect: true },
            { answer: "1 2 3", isCorrect: false },
            { answer: "0 1 2 3", isCorrect: false },
            { answer: "3 2 1", isCorrect: false }
        ]
    },
    {
        question: "Which of the following is a valid Python `if` statement?",
        options: [
            { answer: "if x > 5:", isCorrect: true },
            { answer: "if (x > 5) then:", isCorrect: false },
            { answer: "if (x > 5):", isCorrect: false },
            { answer: "if x > 5 then:", isCorrect: false }
        ]
    },
    {
        question: "What will the following code print?\nx = -5\nif x > 0:\n    print('Positive')\nelse:\n    print('Negative')",
        options: [
            { answer: "Negative", isCorrect: true },
            { answer: "Positive", isCorrect: false },
            { answer: "None", isCorrect: false },
            { answer: "Error", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of a Python function?",
        options: [
            { answer: "To encapsulate code into reusable blocks.", isCorrect: true },
            { answer: "To repeat a block of code multiple times.", isCorrect: false },
            { answer: "To execute code based on conditions.", isCorrect: false },
            { answer: "To define a new variable.", isCorrect: false }
        ]
    }
];
