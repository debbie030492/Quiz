function check(){

			var question1 = document.quiz.question1.value;
			var question2 = document.quiz.question2.value;
			var question3 = document.quiz.question3.value;
			var question4 = document.quiz.question4.value;
			var question5 = document.quiz.question5.value;
			var score = 0;

			if (question1 == "TRUE"){
			score++;
			}
			if (question2 == "14/05/1948"){
			score++;
			}
			if (question3 == "8"){
			score++;
			}
			if (question4 == "Ben Gurion Airport"){
			score++;
			}
			if (question5.toLowerCase() == "lunch"){
			score++;
			}

				document.getElementById("after_submit").style.visibility="visible";
				document.getElementById("numbercorrect").innerHTML = "You got " + score + " correct.";


			if (score == 5){
				document.getElementById("message").innerHTML = "You're a real Israeli! You're probably the third generation of Sabra in your family.";
				}
			if (score == 4){
				document.getElementById("message").innerHTML = "We can see that you've been here for a while. A bit more of effort and everyone will think you've been living here forever.";
				}
			if (score == 3){
				document.getElementById("message").innerHTML = "You start to be well integrated in the Israeli society but people still notice that you're not Israeli.";
				}
			if (score == 2){
				document.getElementById("message").innerHTML = "You're trying to be Israeli but you're not fooling anyone. We can see that you're not.";
				}
			if (score == 1){
				document.getElementById("message").innerHTML = "Being a tourist in Israel does not mean you're Israeli. Come live here and try this quiz again in a couple of years.";
				}
			if (score == 0){
				document.getElementById("message").innerHTML = "Have you ever been to Israel ? You're definitely not Israeli and will never be.";
				}

			}
