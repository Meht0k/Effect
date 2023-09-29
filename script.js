        // const btn = document.querySelector("#throttle");

        // Throttling Function
        const throttleFunction = (func, delay) => {

            // Previously called time of the function
            let prev = 0;
            return (...args) => {
                // Current called time of the function
                let now = new Date().getTime();

                // Logging the difference between previously
                // called and current called timings
                console.log(now - prev, delay);

                // If difference is greater than delay call
                // the function again.
                if (now - prev > delay) {
                    prev = now;

                    // "..." is the spread operator here
                    // returning the function with the
                    // array of arguments
                    return func(...args);
                }
            }
        }
        document.querySelector("#rectangle").addEventListener("mousemove", throttleFunction((dets) => {

            // var array = ["https://source.unsplash.com/random"]
            // array.forEach( arr => {
            //     return arr
            // });

            var div = document.createElement("div")
            div.classList.add("box")
            div.style.left = dets.clientX + "px"
            div.style.top = dets.clientY + "px"
            var img = document.createElement("img")
            img.setAttribute("src", "https://source.unsplash.com/random/nature")
            div.appendChild(img);
            document.body.appendChild(div)

            gsap.to(img, {
                y: "0",
                duration: .2
            })
            gsap.to(img, {
                y: "100%",
                delay: .4
            })

            setTimeout(function () {
                div.remove()
            }, 800)

        }, 150));