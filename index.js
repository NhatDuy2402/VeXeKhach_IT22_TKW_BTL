{
    const toTop = document.querySelector(" .totop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

//Doc file json tuyen duong pho bien
function loadIndex() {
    fetch("index.json").then(res => res.json()).then(data => {
        let d = document.getElementById("routes");
        let re = "";
        for (let c of data)
            re += `<div class="route">
            <a href="trang1.html">
                <div><img class="img-route  fixed-size-img" src="./imgs/ND1.jpg" alt="img 4"></div>
                <div class="route-name">Sài Gòn - Đà Nẵng </div>
                <div class="route-price">Từ 400.000đ</div>
            </a>
        </div>`
        d.innerHTML += re;
    })
}
window.onload = () => {
    loadIndex();
}
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

/*hàm chuyển ảnh qua lại quảng cáo*/
{
    var arr_hinh = [
        "./imgs/endow1.jpg",
        "./imgs/endow2.png",
        "./imgs/endow3.jpg",
        "./imgs/endow4.png",
        "./imgs/endow5.png",
        "./imgs/endow6.png",
        "./imgs/endow7.png",
];
var index = 0; // Chỉ số bắt đầu từ 0

function next() {
    index = (index + 3) % arr_hinh.length;
    updateImages();
}

function prev() {
    index = (index - 3 + arr_hinh.length) % arr_hinh.length;
    updateImages();
}

function updateImages() {
    var hinhElements = document.getElementsByClassName("img-location");
    for (var i = 0; i < 3; i++) {
        var d = (index + i) % arr_hinh.length;
        hinhElements[i].src = arr_hinh[d];
    }
}

setInterval(next, 5000); // tự dộng chuyển hình sau 5s
}
/* Hàm chuyển qua lại các tuyến đường phổ biến */
{
    var arr_hinh2 = [
        "./imgs/ND1.jpg",
        "./imgs/ND2.jpg",
        "./imgs/ND3.jpg",
        "./imgs/ND4.jpg",
        "./imgs/ND6.jpg",
        "./imgs/ND7.jpg",
        "./imgs/ND8.png",
        "./imgs/ND9.jpg",
        "./imgs/ND10.jpg",
        "./imgs/ND11.jpg",
        "./imgs/ND12.png",
        "./imgs/ND13.jpg",
        "./imgs/ND14.jpg",
      
    ];

    var arr_place = [
        "Đà Nẵng",
        "Tiền Giang",
        "Vĩnh Long",
        "Đồng Tháp",
        "Sóc Trăng",
        "Phú Quốc",
        "Long An",
        "Bạc Liêu",
        "Bến tre",
        "Cà Mau",
        "Hậu Giang",
        "An Giang",
        "Trà Vinh",
    ]

    var arr_money = [
        "400.000",
        "100.000",
        "300.000",
        "350.000",
        "340.000",
        "120.000",
        "470.000",
        "330.000",
        "290.000",
        "190.000",
        "180.000",
        "280.000",
        "460.000",
    ]
    var index = 0; // Chỉ số bắt đầu từ 0
    
    function next2() {
        index = (index + 1) % arr_hinh2.length;
        updateImages();
    }
    
    function prev2() {
        index = (index - 1 + arr_hinh2.length) % arr_hinh2.length;
        updateImages();
    }
    
    function updateImages() {
        var route = document.querySelectorAll(".route");
    
        for (var i = 0; i < route.length; i++) {
            var d = (index + i) % arr_hinh2.length;
            var e = route[i].querySelector(".img-route");
            e.src = arr_hinh2[d];
    
            var name = route[i].querySelector(".route-name");
            var p = route[i].querySelector(".route-price");
    
            // Update route information as needed
            if (d === 3) {
                name.textContent = "Sài Gòn - Đồng Tháp";
                p.textContent = "Từ 350.000đ";
            } else {
                name.textContent = `Sài Gòn - ${arr_place[d]}`;
                p.textContent = `Từ ${arr_money[d]}đ`;   
            }
                      
        }
    }
    
    // Hàm kiểm tra kích thước màn hình
function isMobile() {
    return window.innerWidth <= 740;
}

// Hàm cập nhật hình ảnh theo số lượng mong muốn (2 hoặc 4)
function updateImagesByCount(count) {
    var route = document.querySelectorAll(".route");

    for (var i = 0; i < route.length; i++) {
        var d = (index + i) % arr_hinh2.length;
        var e = route[i].querySelector(".img-route");
        e.src = arr_hinh2[d];

        var name = route[i].querySelector(".route-name");
        var p = route[i].querySelector(".route-price");

        if (d === 3) {
            name.textContent = "Sài Gòn - Đồng Tháp";
            p.textContent = "Từ 350.000đ";
        } else {
            name.textContent = `Sài Gòn - ${arr_place[d]}`;
            p.textContent = `Từ ${arr_money[d]}đ`;   
        }

        // Ẩn hoặc hiển thị hình ảnh tùy theo số lượng mong muốn
        if (i >= count) {
            e.style.display = "none";
            name.style.display = "none";
            p.style.display = "none";
        } else {
            e.style.display = "block";
            name.style.display = "block";
            p.style.display = "block";
        }
    }
}

// Gọi hàm updateImages() hoặc updateImagesByCount() sau khi tải trang
if (isMobile()) {
    updateImagesByCount(2); // Nếu là mobile, chỉ hiển thị 2 hình
} else {
    updateImages(); // Ngược lại, hiển thị 4 hình
}

// Thêm sự kiện resize để kiểm tra và cập nhật khi thay đổi kích thước màn hình
window.addEventListener("resize", function() {
    if (isMobile()) {
        updateImagesByCount(2);
    } else {
        updateImages();
    }
});
}
/*chuyển trang khi nhấn nút tìm kiếm*/
{
    document.addEventListener("DOMContentLoaded", function () {
        var s = document.querySelector(".search");
        var d = document.getElementById("destination");
    
        s.addEventListener("click", function () {
            var selec = d.value;
            if (selec === "ag") {
                window.location.href = "trang1.html";
            } else {
                // Hiển thị bảng thông báo cho các điểm đến chưa hỗ trợ
                notification.style.display = "block";
            }
        });
    });
}

// hiện biểu tượng tuyến đường không hỗ trợ
{
     // Lấy phần tử biểu tượng "close"
    const close = document.querySelector('.close2');

     // Lấy phần tử thông báo
    const tb = document.getElementById('notification');

    // Hàm để ẩn thông báo
    function hideNotification() {
        tb.style.display = 'none';
    }

      // Gắn sự kiện nhấp chuột vào biểu tượng "close"
    close.addEventListener('click', hideNotification);

}
/*hiệu ứng hiện dần dần khi cuộn*/
{
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i =0; i< reveals.length;i++)
    {
        var c1 = window.innerHeight;
        var c2 = reveals[i].getBoundingClientRect().top; //thông tin kích thước 1 phần tử
        var c3 = 120;

        if(c2 < c1 - c3) { //vị trí của phần tử so với viewport nhỏ hơn 120 thì thêm class active
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
}

// hiện và ẩn cửa sổ đăng nhập 
document.addEventListener('DOMContentLoaded', function () {
    const show = document.getElementById("showLogin");
    const popup = document.getElementById("popup");
    const close = document.getElementById("closePopup");

    show.addEventListener("click", function () {
        popup.style.display = "block";
    });

    close.addEventListener("click", function () {
        popup.style.display = "none";
    });
});