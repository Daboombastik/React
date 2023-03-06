export interface Question {
    question: string,
    answers: Answer[]
}

export interface Answer {
    text: string,
    isCorrect: boolean
}

export const quizQuestions: Question[] = [
    {
        question: "What is ReactJS?",
        answers: [
            {text: "A programming language", isCorrect: false},
            {text: "A JavaScript library", isCorrect: true},
            {text: "A markup language", isCorrect: false},
        ],
    },
    {
        question: "What is the virtual DOM in ReactJS?",
        answers: [
            {text: "A lightweight version of the actual DOM", isCorrect: true},
            {text: "A completely separate component of ReactJS", isCorrect: false},
            {text: "A framework for handling server-side rendering", isCorrect: false},
        ],
    },
    {
        question: "What is the purpose of state in ReactJS?",
        answers: [
            {text: "To store and manage data within a component", isCorrect: true},
            {text: "To handle routing between pages", isCorrect: false},
            {text: "To manage styling and layout of components", isCorrect: false},
        ],
    },
    {
        question: "What is JSX in ReactJS?",
        answers: [
            {text: "A programming language used for React development", isCorrect: false},
            {text: "A syntax extension for JavaScript", isCorrect: true},
            {text: "A package manager for React libraries", isCorrect: false},
        ],
    },
    {
        question: "What is the purpose of props in ReactJS?",
        answers: [
            {text: "To pass data from parent components to child components", isCorrect: true},
            {text: "To handle asynchronous data fetching", isCorrect: false},
            {text: "To manage user authentication and authorization", isCorrect: false},
        ],
    },
];
