export const chapters = [
    {
        "title": "Chapter 1: The Fundamentals",
        "sections": [
            {
                "title": "Section 1: Introduction",
                "content": "In this chapter, we will explore the basic building blocks of Python programming. Python is a versatile and easy-to-read language, which makes it an excellent choice for beginners and experienced developers alike.",
                "code": "print('Hello, world!')"
            },
            {
                "title": "Section 2: Variables",
                "content": "Variables in Python are used to store data. They can hold different data types such as integers, floats, strings, and more. In Python, variables are dynamically typed, meaning you don't need to declare the data type explicitly.",
                "code": "x = 5\n\ny = 10\n\nz = x + y\n\nprint(z)"
            },
            {
                "title": "Section 3: Functions",
                "content": "Functions allow you to encapsulate code into reusable blocks. Python functions are defined using the `def` keyword followed by the function name and parameters. Functions help in organizing and managing code effectively.",
                "code": "def add(a, b):\n    return a + b\n\nresult = add(5, 10)\nprint(result)"
            },
            {
                "title": "Section 4: Loops",
                "content": "Loops allow you to repeat a block of code multiple times. In Python, the `for` loop is commonly used to iterate over sequences such as lists, tuples, and strings. The `while` loop repeats as long as a condition is true.",
                "code": "for i in range(10):\n    print(i)"
            },
            {
                "title": "Section 5: Conditionals",
                "content": "Conditionals allow you to execute certain blocks of code based on whether a condition is true or false. In Python, the `if`, `elif`, and `else` statements are used to create conditional logic.",
                "code": "x = 5\n\nif x > 0:\n    print('Positive')\nelse:\n    print('Negative')"
            }
        ]
    },    
    {
        "title": "Chapter 2: Advanced Topics",
        "sections": [
            {
                "title": "Section 1: Objects",
                "content": "In Python, everything is an object. Objects are instances of classes, and they can hold both data (attributes) and functionality (methods). Understanding objects is essential for working with object-oriented programming (OOP) in Python.",
                "code": "class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def bark(self):\n        print(f'{self.name} says woof!')\n\nmy_dog = Dog('Buddy', 5)\nmy_dog.bark()"
            },
            {
                "title": "Section 2: Lists (Arrays)",
                "content": "In Python, lists are used to store multiple items in a single variable. Lists are dynamic, meaning their size can change as needed. They can hold items of different data types.",
                "code": "fruits = ['apple', 'banana', 'cherry']\nfruits.append('orange')\nprint(fruits)"
            },
            {
                "title": "Section 3: Classes",
                "content": "Classes in Python provide a blueprint for creating objects. A class defines attributes (data) and methods (functions) that the objects created from the class will have. Python supports inheritance, polymorphism, and encapsulation, which are key principles of OOP.",
                "code": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        raise NotImplementedError('Subclasses must implement this method')\n\nclass Cat(Animal):\n    def speak(self):\n        return f'{self.name} says meow!'\n\nmy_cat = Cat('Whiskers')\nprint(my_cat.speak())"
            },
            {
                "title": "Section 4: Functions",
                "content": "Advanced Python functions can include default arguments, *args and **kwargs for variable-length arguments, and lambda expressions for creating anonymous functions on the fly. These concepts enable more flexible and concise function definitions.",
                "code": "def multiply(a, b=2):\n    return a * b\n\nresult = multiply(5)\nprint(result)"
            },
            {
                "title": "Section 5: Loops",
                "content": "In addition to basic loops, Python offers advanced control with features like `break`, `continue`, and `else` with loops. Python's `for` loops also work seamlessly with sequences such as lists, tuples, and dictionaries, and can be used with list comprehensions for concise loops.",
                "code": "for i in range(10):\n    if i % 2 == 0:\n        continue\n    print(i)"
            },
            {
                "title": "Section 6: Conditionals",
                "content": "Python conditionals can be used for complex decisions using `if-elif-else` statements. Python also supports ternary expressions for more concise conditional logic.",
                "code": "x = 5\nresult = 'Positive' if x > 0 else 'Negative'\nprint(result)"
            }
        ]
    },    
    {
        "title": "Chapter 3: Expert Techniques",
        "sections": [
            {
                "title": "Section 1: Asynchronous Programming",
                "content": "Asynchronous programming allows Python to perform tasks without waiting for others to finish, improving performance in I/O-bound applications. This is achieved with `asyncio`, which provides support for asynchronous coroutines. `async` and `await` keywords are used to define asynchronous functions.",
                "code": "import asyncio\n\nasync def fetch_data():\n    print('Start fetching')\n    await asyncio.sleep(2)\n    print('Done fetching')\n\nasyncio.run(fetch_data())"
            },
            {
                "title": "Section 2: Error Handling",
                "content": "Error handling in Python is managed using `try`, `except`, `else`, and `finally` blocks. These allow you to gracefully catch and handle exceptions. You can raise custom exceptions using the `raise` keyword.",
                "code": "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Error: Division by zero')\nfinally:\n    print('This will always run')"
            },
            {
                "title": "Section 3: Performance Optimization",
                "content": "Performance optimization techniques in Python include using efficient data structures (e.g., lists vs. sets), reducing unnecessary computations, leveraging built-in functions, and profiling code using modules like `cProfile`. Using compiled extensions like Cython can also dramatically improve performance.",
                "code": "import time\n\n# Simple example of performance measurement\nstart_time = time.time()\n\n# Code block\nresult = sum(range(1000000))\n\nend_time = time.time()\nprint(f'Time taken: {end_time - start_time} seconds')"
            },
            {
                "title": "Section 4: Advanced Functions",
                "content": "Advanced functions include the use of decorators, which allow the modification of function behavior, and higher-order functions that take other functions as arguments. Closures and lambdas are also useful techniques for managing function scope and creating short, inline functions.",
                "code": "def decorator(func):\n    def wrapper():\n        print('Before the function runs')\n        func()\n        print('After the function runs')\n    return wrapper\n\n@decorator\ndef say_hello():\n    print('Hello!')\n\nsay_hello()"
            },
            {
                "title": "Section 5: Iterators and Generators",
                "content": "Python provides built-in support for iterators, which are objects that allow you to traverse through all the elements of a collection. Generators, created using `yield`, are a simple way to create iterators that produce values lazily, which can save memory when dealing with large datasets.",
                "code": "def my_generator():\n    yield 1\n    yield 2\n    yield 3\n\nfor value in my_generator():\n    print(value)"
            },
            {
                "title": "Section 6: Context Managers",
                "content": "Context managers are used to manage resources such as files and network connections. The `with` statement simplifies resource management by ensuring proper acquisition and release of resources.",
                "code": "with open('example.txt', 'w') as file:\n    file.write('Hello, World!')"
            }
        ]
    }    
];