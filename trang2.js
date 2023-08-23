

document.addEventListener('DOMContentLoaded', function () {
    /* nhấn "xem thêm" để hiện thêm thêm trang ẩn*/
    {
        document.getElementById('showMore').addEventListener('click', function () {
            var hidden = document.querySelectorAll('.hidden');
            hidden.forEach(function (p) {
                p.classList.remove('hidden');
            });

            this.style.display = 'none';
        });
    }
    /*hàm ân ẩn hiện menu của header*/
    {
        window.onload = function () {
            let m = document.getElementById("selec-header");
            let d = document.querySelector(".show-nav");
            d.addEventListener("click", function () {
                m.style.right = "50%";
                m.style.left = 0;
            });

            let c = document.querySelector(".close");
            c.addEventListener("click", function () {
                m.style.right = "unset";
                m.style.left = "-100%";
            })
        }
    }
    //-----------------------------------------------------------
    /* 9. Go to top */
    {
        const toTop = document.querySelector(" .totop");

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                toTop.classList.add("active");
            } else {
                toTop.classList.remove("active");
            }
        })
    }
});

//hàm ẩn hiện menu của reponsive
window.onload = function () {

    window.onload = function () {
        let m = document.getElementById("selec-header");
        let d = document.querySelector(".show-nav");
        d.addEventListener("click", function () {
            m.style.right = "50%";
            m.style.left = 0;
        });

        let c = document.querySelector(".close");
        c.addEventListener("click", function () {
            m.style.right = "unset";
            m.style.left = "-100%";
        })
    }
}

/*hiệu ứng hiện dần dần khi cuộn*/
{
    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {
            var c1 = window.innerHeight;
            var c2 = reveals[i].getBoundingClientRect().top; 
            var c3 = 120;

            if (c2 < c1 - c3) { 
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }
}
