

document.addEventListener('DOMContentLoaded', function() {
/* nhấn xem thêm để hiện thêm văn bản*/
   {
    document.getElementById('showMore').addEventListener('click', function() {
        var hiddenParagraphs = document.querySelectorAll('.hidden');
        hiddenParagraphs.forEach(function(paragraph) {
            paragraph.classList.remove('hidden');
        });
    
        // Ẩn phần "Xem Thêm" sau khi được nhấn
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
   //------------------------------------------------------------
  
});

window.onload = function() {

    let m = document.getElementById("menu");

    let d = document.querySelector(".show-nav");
    d.addEventListener("click", function() {
        m.style.right="50%";
        m.style.left= 0;
    });
}

/*hiệu ứng hiện dần dần khi cuộn*/
{
    window.addEventListener('scroll', reveal);
    
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
    
        for(var i =0; i< reveals.length;i++)
        {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top; //thông tin kích thước 1 phần tử
            var revealpoint = 120;
    
            if(revealtop < windowheight - revealpoint) { //vị trí của phần tử so với viewport nhỏ hơn 120 thì thêm class active
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }
    }
    