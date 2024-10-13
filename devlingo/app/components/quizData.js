export const quizQuestions = {
    chapter1: [
        {
            quiz1: [
                {
                    question: "What is the correct syntax to print 'Hello, world!' in Python?",
                    options: [
                        { answer: "print('Hello, world!')", isCorrect: true },
                        { answer: "echo 'Hello, world!'", isCorrect: false },
                        { answer: "printf('Hello, world!')", isCorrect: false },
                        { answer: "console.log('Hello, world!')", isCorrect: false }
                    ]
                },
                {
                    question: "Which of the following is a correct variable assignment in Python?",
                    options: [
                        { answer: "let x = 5", isCorrect: false },
                        { answer: "x = 5", isCorrect: true },
                        { answer: "int x = 5", isCorrect: false },
                        { answer: "x := 5", isCorrect: false }
                    ]
                },
                {
                    question: "What function is used to display output in Python?",
                    options: [
                        { answer: "echo()", isCorrect: false },
                        { answer: "console.log()", isCorrect: false },
                        { answer: "print()", isCorrect: true },
                        { answer: "output()", isCorrect: false }
                    ]
                },
                {
                    question: "How do you write comments in Python?",
                    options: [
                        { answer: "# This is a comment", isCorrect: true },
                        { answer: "// This is a comment", isCorrect: false },
                        { answer: "/* This is a comment */", isCorrect: false },
                        { answer: "<!-- This is a comment -->", isCorrect: false }
                    ]
                },
                {
                    question: "What is the output of the following code: `x = 2 + 3 * 2`?",
                    options: [
                        { answer: "10", isCorrect: true },
                        { answer: "12", isCorrect: false },
                        { answer: "14", isCorrect: false },
                        { answer: "8", isCorrect: false }
                    ]
                }
            ],
            quiz2: [
                {
                    question: "What will the following code output? `x = 10; y = 20; print(x + y)`",
                    options: [
                        { answer: "10", isCorrect: false },
                        { answer: "20", isCorrect: false },
                        { answer: "30", isCorrect: true },
                        { answer: "40", isCorrect: false }
                    ]
                },
                {
                    question: "Which of the following is the correct way to declare a string variable in Python?",
                    options: [
                        { answer: "string x = 'hello'", isCorrect: false },
                        { answer: "x = 'hello'", isCorrect: true },
                        { answer: "x := 'hello'", isCorrect: false },
                        { answer: "str x = 'hello'", isCorrect: false }
                    ]
                },
                {
                    question: "How do you check the type of a variable in Python?",
                    options: [
                        { answer: "checkType(variable)", isCorrect: false },
                        { answer: "type(variable)", isCorrect: true },
                        { answer: "typeof(variable)", isCorrect: false },
                        { answer: "varType(variable)", isCorrect: false }
                    ]
                },
                {
                    question: "Which Python keyword is used to define a function?",
                    options: [
                        { answer: "func", isCorrect: false },
                        { answer: "def", isCorrect: true },
                        { answer: "function", isCorrect: false },
                        { answer: "lambda", isCorrect: false }
                    ]
                },
                {
                    question: "What will be the result of `5 ** 2` in Python?",
                    options: [
                        { answer: "7", isCorrect: false },
                        { answer: "25", isCorrect: true },
                        { answer: "10", isCorrect: false },
                        { answer: "30", isCorrect: false }
                    ]
                }
            ],
            quiz3: [
                {
                    question: "How do you create an empty list in Python?",
                    options: [
                        { answer: "list = []", isCorrect: true },
                        { answer: "list = {}", isCorrect: false },
                        { answer: "list = ()", isCorrect: false },
                        { answer: "list = None", isCorrect: false }
                    ]
                },
                {
                    question: "Which of the following is NOT a valid Python variable name?",
                    options: [
                        { answer: "my_var", isCorrect: false },
                        { answer: "2ndVar", isCorrect: true },
                        { answer: "_var", isCorrect: false },
                        { answer: "VarName", isCorrect: false }
                    ]
                },
                {
                    question: "What is the result of `len('Hello')`?",
                    options: [
                        { answer: "6", isCorrect: false },
                        { answer: "5", isCorrect: true },
                        { answer: "4", isCorrect: false },
                        { answer: "7", isCorrect: false }
                    ]
                },
                {
                    question: "Which of the following is used to import a module in Python?",
                    options: [
                        { answer: "import module_name", isCorrect: true },
                        { answer: "use module_name", isCorrect: false },
                        { answer: "include module_name", isCorrect: false },
                        { answer: "module module_name", isCorrect: false }
                    ]
                },
                {
                    question: "What does the `range(5)` function return in Python?",
                    options: [
                        { answer: "An iterator of numbers 0 to 4", isCorrect: true },
                        { answer: "A list of numbers 0 to 5", isCorrect: false },
                        { answer: "A set of numbers 0 to 5", isCorrect: false },
                        { answer: "An iterator of numbers 1 to 5", isCorrect: false }
                    ]
                }
            ]
        }
    ],
    chapter2: [
        {
            quiz1: [
                {
                    question: "How do you create a class in Python?",
                    options: [
                        { answer: "class MyClass:", isCorrect: true },
                        { answer: "def MyClass:", isCorrect: false },
                        { answer: "function MyClass:", isCorrect: false },
                        { answer: "MyClass create:", isCorrect: false }
                    ]
                },
                {
                    question: "What is the special method in Python that is called when an object is initialized?",
                    options: [
                        { answer: "__init__", isCorrect: true },
                        { answer: "__start__", isCorrect: false },
                        { answer: "__create__", isCorrect: false },
                        { answer: "__new__", isCorrect: false }
                    ]
                },
                {
                    question: "How do you access an object's attribute in Python?",
                    options: [
                        { answer: "object.attribute", isCorrect: true },
                        { answer: "object->attribute", isCorrect: false },
                        { answer: "object:attribute", isCorrect: false },
                        { answer: "object(attribute)", isCorrect: false }
                    ]
                },
                {
                    question: "What will be the output of `print(type([]))`?",
                    options: [
                        { answer: "<class 'list'>", isCorrect: true },
                        { answer: "<class 'array'>", isCorrect: false },
                        { answer: "<type 'list'>", isCorrect: false },
                        { answer: "<list>", isCorrect: false }
                    ]
                },
                {
                    question: "Which of the following is a mutable data type in Python?",
                    options: [
                        { answer: "List", isCorrect: true },
                        { answer: "Tuple", isCorrect: false },
                        { answer: "String", isCorrect: false },
                        { answer: "Integer", isCorrect: false }
                    ]
                }
            ],
            quiz2: [
                {
                    question: "Which Python keyword is used for inheritance?",
                    options: [
                        { answer: "extends", isCorrect: false },
                        { answer: "inherits", isCorrect: false },
                        { answer: "super", isCorrect: false },
                        { answer: "class Parent:", isCorrect: true }
                    ]
                },
                {
                    question: "What method must be defined in a subclass to override a method from the parent class?",
                    options: [
                        { answer: "A method with the same name", isCorrect: true },
                        { answer: "A method with a different name", isCorrect: false },
                        { answer: "A constructor method", isCorrect: false },
                        { answer: "The `__super__` method", isCorrect: false }
                    ]
                },
                {
                    question: "Which function is used to add an element to a list?",
                    options: [
                        { answer: "list.add()", isCorrect: false },
                        { answer: "list.append()", isCorrect: true },
                        { answer: "list.insert()", isCorrect: false },
                        { answer: "list.push()", isCorrect: false }
                    ]
                },
                {
                    question: "What will the following code return: `len(['a', 'b', 'c'])`?",
                    options: [
                        { answer: "3", isCorrect: true },
                        { answer: "2", isCorrect: false },
                        { answer: "1", isCorrect: false },
                        { answer: "0", isCorrect: false }
                    ]
                },
                {
                    question: "Which of the following is an immutable data type in Python?",
                    options: [
                        { answer: "Tuple", isCorrect: true },
                        { answer: "List", isCorrect: false },
                        { answer: "Dictionary", isCorrect: false },
                        { answer: "Set", isCorrect: false }
                    ]
                }
            ],
            quiz3: [
                {
                    question: "How do you inherit a class in Python?",
                    options: [
                        { answer: "class Subclass(ParentClass):", isCorrect: true },
                        { answer: "class Subclass inherits ParentClass:", isCorrect: false },
                        { answer: "class Subclass extends ParentClass:", isCorrect: false },
                        { answer: "class Subclass.ParentClass:", isCorrect: false }
                    ]
                },
                {
                    question: "What is the purpose of the `self` parameter in class methods?",
                    options: [
                        { answer: "To reference the instance of the class", isCorrect: true },
                        { answer: "To reference the superclass", isCorrect: false },
                        { answer: "To initialize attributes", isCorrect: false },
                        { answer: "To define a static method", isCorrect: false }
                    ]
                },
                {
                    question: "How do you remove an item from a list in Python?",
                    options: [
                        { answer: "list.pop()", isCorrect: true },
                        { answer: "list.delete()", isCorrect: false },
                        { answer: "list.remove()", isCorrect: false },
                        { answer: "list.drop()", isCorrect: false }
                    ]
                },
                {
                    question: "Which of the following is a key principle of object-oriented programming?",
                    options: [
                        { answer: "Inheritance", isCorrect: true },
                        { answer: "Recursion", isCorrect: false },
                        { answer: "Concurrency", isCorrect: false },
                        { answer: "Asynchronous execution", isCorrect: false }
                    ]
                },
                {
                    question: "Which method is used to initialize attributes of a class?",
                    options: [
                        { answer: "__init__", isCorrect: true },
                        { answer: "__str__", isCorrect: false },
                        { answer: "__class__", isCorrect: false },
                        { answer: "__new__", isCorrect: false }
                    ]
                }
            ]
        }
    ],
    chapter3: [
        {
            quiz1: [
                {
                    question: "Which module is used for asynchronous programming in Python?",
                    options: [
                        { answer: "asyncio", isCorrect: true },
                        { answer: "threading", isCorrect: false },
                        { answer: "multiprocessing", isCorrect: false },
                        { answer: "queue", isCorrect: false }
                    ]
                },
                {
                    question: "What is the purpose of the 'try-except' block in Python?",
                    options: [
                        { answer: "To handle exceptions", isCorrect: true },
                        { answer: "To manage loops", isCorrect: false },
                        { answer: "To optimize performance", isCorrect: false },
                        { answer: "To create functions", isCorrect: false }
                    ]
                },
                {
                    question: "What does the `await` keyword do in Python?",
                    options: [
                        { answer: "Pauses the execution until the awaited function completes", isCorrect: true },
                        { answer: "Starts a new thread", isCorrect: false },
                        { answer: "Runs the function asynchronously", isCorrect: false },
                        { answer: "Waits for user input", isCorrect: false }
                    ]
                },
                {
                    question: "Which function is used to measure the time taken by a block of code in Python?",
                    options: [
                        { answer: "time.time()", isCorrect: true },
                        { answer: "time.sleep()", isCorrect: false },
                        { answer: "time.measure()", isCorrect: false },
                        { answer: "time.delay()", isCorrect: false }
                    ]
                },
                {
                    question: "What is a generator in Python?",
                    options: [
                        { answer: "A function that yields values one at a time", isCorrect: true },
                        { answer: "A function that returns a list", isCorrect: false },
                        { answer: "A function that creates threads", isCorrect: false },
                        { answer: "A function that creates loops", isCorrect: false }
                    ]
                }
            ],
            quiz2: [
                {
                    question: "What is the purpose of the `yield` keyword in Python?",
                    options: [
                        { answer: "To create a generator", isCorrect: true },
                        { answer: "To raise an exception", isCorrect: false },
                        { answer: "To return multiple values", isCorrect: false },
                        { answer: "To declare a constant", isCorrect: false }
                    ]
                },
                {
                    question: "How do you handle exceptions in Python?",
                    options: [
                        { answer: "Using try-except blocks", isCorrect: true },
                        { answer: "Using throw-catch blocks", isCorrect: false },
                        { answer: "Using if-else statements", isCorrect: false },
                        { answer: "Using error-checking functions", isCorrect: false }
                    ]
                },
                {
                    question: "Which of the following improves performance by reducing memory usage?",
                    options: [
                        { answer: "Generators", isCorrect: true },
                        { answer: "Lists", isCorrect: false },
                        { answer: "Dictionaries", isCorrect: false },
                        { answer: "Tuples", isCorrect: false }
                    ]
                },
                {
                    question: "What is the main benefit of using context managers?",
                    options: [
                        { answer: "Efficiently manage resources like files", isCorrect: true },
                        { answer: "Handle exceptions", isCorrect: false },
                        { answer: "Execute asynchronous code", isCorrect: false },
                        { answer: "Optimize performance", isCorrect: false }
                    ]
                },
                {
                    question: "How do you create a context manager in Python?",
                    options: [
                        { answer: "By using the `with` statement", isCorrect: true },
                        { answer: "By using the `use` statement", isCorrect: false },
                        { answer: "By using the `manage` keyword", isCorrect: false },
                        { answer: "By using the `for` loop", isCorrect: false }
                    ]
                }
            ],
            quiz3: [
                {
                    question: "Which method is always called before exiting a context manager?",
                    options: [
                        { answer: "__exit__", isCorrect: true },
                        { answer: "__init__", isCorrect: false },
                        { answer: "__enter__", isCorrect: false },
                        { answer: "__close__", isCorrect: false }
                    ]
                },
                {
                    question: "How can you profile a Python program's performance?",
                    options: [
                        { answer: "Using the `cProfile` module", isCorrect: true },
                        { answer: "Using the `timeit` module", isCorrect: false },
                        { answer: "Using the `time` module", isCorrect: false },
                        { answer: "Using the `os` module", isCorrect: false }
                    ]
                },
                {
                    question: "What does the `time.sleep()` function do?",
                    options: [
                        { answer: "Pauses the program for a specified number of seconds", isCorrect: true },
                        { answer: "Shuts down the system", isCorrect: false },
                        { answer: "Returns the current time", isCorrect: false },
                        { answer: "Performs a busy wait", isCorrect: false }
                    ]
                },
                {
                    question: "What does `async` keyword indicate in Python?",
                    options: [
                        { answer: "That a function is asynchronous", isCorrect: true },
                        { answer: "That a function is a generator", isCorrect: false },
                        { answer: "That a function is running on a separate thread", isCorrect: false },
                        { answer: "That a function will automatically retry on failure", isCorrect: false }
                    ]
                },
                {
                    question: "What is the main use of the `asyncio` module in Python?",
                    options: [
                        { answer: "To write asynchronous programs", isCorrect: true },
                        { answer: "To create multiple threads", isCorrect: false },
                        { answer: "To optimize memory usage", isCorrect: false },
                        { answer: "To handle exceptions", isCorrect: false }
                    ]
                }
            ]
        }
    ]
};
