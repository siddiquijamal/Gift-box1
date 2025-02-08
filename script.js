function changeGift() {
	const giftDiv = document.getElementById("gift");
	const gifts = {
	  1: { emoji: "🌹", text:  "It's Rose Day" },
	  2: { emoji: "❤️", text: "It's Propose Day" },
	  3: { emoji: "🍫", text: "It's Chocolate Day" },
	  4: { emoji: "🧸", text: "It's Teddy Day" },
	  5: { emoji: "🤝", text: "It's Promise Day" },
	  6: { emoji: "🤗", text: "It's Hug Day" },
	  7: { emoji: "💋", text: "It's Kiss Day" },
	  8: { emoji: "💘", text: "It's Valentine’s Day"},
	};
  
	const days = Object.keys(gifts);
	const randomDay = days[Math.floor(Math.random() * days.length)];
	const { emoji, text } = gifts[randomDay];
  
	giftDiv.innerHTML = `<span>${emoji}<span><p>${text}</p>`;
  }
  
  document.getElementById("cube").addEventListener("click", function () {
	this.classList.toggle("active");
	if (!this.classList.contains("active")) {
	  changeGift();
	}
  });
  
  document.addEventListener("DOMContentLoaded", function () {
	changeGift();
  
	const cube = document.getElementById("cube");
	cube.classList.add("active");
	setTimeout(() => {
	  cube.classList.remove("active");
	}, 3000);
  });