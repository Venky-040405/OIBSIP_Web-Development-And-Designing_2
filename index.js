document.addEventListener("DOMContentLoaded", function () {
                const navitem = document.querySelector(".navitem");
                const navlist = document.querySelector(".navlist ul");
                navitem.addEventListener("click", () => {
                    navlist.classList.toggle("mobile");
                });
            });


            function tictaelink() {
                window.location.href = "https://venky-040405.github.io/tic-tak-tac-sample-games/";
            }

            function pygame() {
                window.location.href = "https://github.com/Venky-040405/space-game.pygame/";
            }

            function multiplayer() {
                window.location.href = "https://venky-040405.github.io/tic-tak-toc-multiplayer/";
            }

            function weathersite() {
                window.location.href = "https://venky-040405.github.io/weather-website/";
            }

            function landingpage() {
                window.location.href = "https://venky-040405.github.io/landingpage-p1/";
            }

            const btn = document.getElementById('btn');
            btn.addEventListener('click', () => {
                window.open("Venkatesh.E_Resume-2.pdf")
            })
