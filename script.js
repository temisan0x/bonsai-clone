document.querySelectorAll(".faq-question").forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const arrow = question.querySelector(".arrow");

            if (answer.style.display === "block") {
                answer.style.display = "none";
                arrow.classList.remove("rotate");
            } else {
                document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
                document.querySelectorAll(".arrow").forEach(arr => arr.classList.remove("rotate"));

                answer.style.display = "block";
                arrow.classList.add("rotate");
            }
        });
    });
