function runBattle() {
      const code1 = document.getElementById("code1").value;
      const code2 = document.getElementById("code2").value;
      const output = document.getElementById("battle-output");

      let result1 = '', result2 = '';
      const task = document.getElementById("task-select").value;

      const input = {
        sum: [2, 3],
        palindrome: ["level"],
        reverse: ["cyber"]
      }[task];

      try {
        const log = console.log;
        console.log = (...args) => result1 += args.join(" ") + "\n";
        new Function(...input.map((_, i) => 'arg' + i), code1)(...input);
        console.log = log;
      } catch (e) {
        result1 = 'Ошибка: ' + e.message;
      }

      try {
        const log = console.log;
        console.log = (...args) => result2 += args.join(" ") + "\n";
        new Function(...input.map((_, i) => 'arg' + i), code2)(...input);
        console.log = log;
      } catch (e) {
        result2 = 'Ошибка: ' + e.message;
      }

      let verdict = "\n⚔️ Победитель: ";
      if (result1.trim() === result2.trim()) verdict += "Ничья 🤝";
      else if (result1.includes("❌")) verdict += "Player 2 🧠";
      else if (result2.includes("❌")) verdict += "Player 1 💪";
      else verdict += "Оцените вручную";

      output.textContent = `👤 Player 1:\n${result1}\n🤖 Player 2:\n${result2}${verdict}`;
}