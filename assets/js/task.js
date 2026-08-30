const examples = [
  `console.log("Hello, world!");`,
  `let a = 3, b = 4;\nconsole.log("Sum:", a + b);`,
  `function factorial(n) {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}\nconsole.log(factorial(5));`,
  `function isPalindrome(str) {\n  return str === str.split('').reverse().join('');\n}\nconsole.log(isPalindrome("level"));`,
  `let arr = [4, 2, 7, 1];\nconsole.log("Max:", Math.max(...arr));`,
  `let nums = [5, 2, 9, 1];\nnums.sort((a, b) => a - b);\nconsole.log(nums);`,
  `let text = "hello";\nconsole.log(text.split('').reverse().join(''));`,
  `function fib(n) {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n}\nconsole.log(fib(6));`,
  `let str = "education";\nlet count = (str.match(/[aeiou]/gi) || []).length;\nconsole.log("Vowels:", count);`,
  `function isPrime(n) {\n  if (n < 2) return false;\n  for (let i = 2; i <= Math.sqrt(n); i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}\nconsole.log(isPrime(17));`
];

function selectTask(index) {
  document.getElementById("code").value = examples[index];
  document.getElementById("output").textContent = "// Output will appear here...";
}

function runCode() {
  const code = document.getElementById("code").value;
  const outputDiv = document.getElementById("output");
  try {
    const originalLog = console.log;
    let result = "";
    console.log = (...args) => result += args.join(" ") + "\\n";
    eval(code);
    outputDiv.textContent = result.trim() || "(no output)";
    console.log = originalLog;
  } catch (err) {
    outputDiv.textContent = "Error: " + err.message;
  }
}


