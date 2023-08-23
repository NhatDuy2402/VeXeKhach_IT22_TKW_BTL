// Hàm chạy sau khi DOM đã load xong
document.addEventListener('DOMContentLoaded', function () {
  //------------------------------------------------------
  console.log('DOM content loaded.');

  //----------------------------------------------------
  // 1. Hàm chuyển đổi thông tin và điểm đón xe
  {
    // Lắng nghe sự kiện click cho các tab
    $('.tab-switch li').click(function () {
      // Lấy data-tab attribute của tab được click
      var a = $(this).attr('data-tab');
      // Xóa active class khỏi tất cả các tab
      $('.tab-switch li').removeClass('active');
      // Ẩn tất cả các tab pane
      $('.tab-pane').removeClass('active');
      // Thêm active class vào tab được click
      $(this).addClass('active');
      // Hiển thị tab pane tương ứng với tab được click
      $("#" + a).addClass('active');
    });
  }
  //--------------------------------------------------------
  // 2.  Hàm đếm ngược sale
  {
    var cars = [
      { countdownElement: document.querySelector('.reverse-time1'), countDownTime: 28800000 },
      { countdownElement: document.querySelector('.reverse-time2'), countDownTime: 18000000 },
      { countdownElement: document.querySelector('.reverse-time3'), countDownTime: 3600000 },
      { countdownElement: document.querySelector('.reverse-time4'), countDownTime: 10800000 },
      { countdownElement: document.querySelector('.reverse-time5'), countDownTime: 8280000 },
      // Thêm thông tin về các xe khác tại đây
    ];

    function update(car) {
      var s = car.countDownTime / 1000;
      s = Math.floor(s);
      var h = Math.floor(s / 3600);
      s -= h * 3600;
      var m = Math.floor(s / 60);
      s -= m * 60;

      car.countdownElement.innerHTML = "Kết thúc trong: " + h + ":" + m + ":" + s;

      car.countDownTime -= 1000;

      if (car.countDownTime < 0) {
        clearInterval(car.t);
        car.countdownElement.innerHTML = "Hết giờ";
      }
    }

    for (var i = 0; i < cars.length; i++) {
      cars[i].t = setInterval(update.bind(null, cars[i]), 1000);
    };
  }
  //----------------------------------------------------
  //3.  hàm nhấn chọn ghế để mở, dấu x để đóng
  {
    const cars = [
      {
        id: 'car1',
        sectionId: 'reservationSection1',
        chooseBtnClass: 'choose-seat-btn',
        closeBtnId: 'hide-section-btn1',
      },
      {
        id: 'car2',
        sectionId: 'reservationSection2',
        chooseBtnClass: 'choose-seat-btn',
        closeBtnId: 'hide-section-btn2',
      },
      {
        id: 'car3',
        sectionId: 'reservationSection3',
        chooseBtnClass: 'choose-seat-btn',
        closeBtnId: 'hide-section-btn3',
      },
      {
        id: 'car4',
        sectionId: 'reservationSection4',
        chooseBtnClass: 'choose-seat-btn',
        closeBtnId: 'hide-section-btn4',
      },
      {
        id: 'car5',
        sectionId: 'reservationSection5',
        chooseBtnClass: 'choose-seat-btn',
        closeBtnId: 'hide-section-btn5',
      },
      // Thêm thông tin về các xe khác
    ];

    function setupAndClose(car) {
      const c = document.querySelectorAll(`#${car.id} .${car.chooseBtnClass}`);
      const close = document.getElementById(car.closeBtnId);
      const sectionId = car.sectionId;

      c.forEach(function (chooseBtn) {
        chooseBtn.addEventListener('click', function () {
          const a = document.querySelectorAll('.Reservations');

          a.forEach(function (section) {
            section.classList.add('hidden');
          });

          const s = document.getElementById(sectionId);
          s.classList.remove('hidden');
        });
      });

      close.addEventListener('click', function () {
        const r = document.getElementById(sectionId);
        r.classList.add('hidden');
      });
    }

    cars.forEach(function (car) {
      setupAndClose(car);
    });
  }
  //------------------------------------------------------
  //4.  Hàm tô màu để đặt chỗ
  {
    function color(carId) {
      // Lấy tất cả các phần tử ghế có lớp color-seat của xe cụ thể
      const c = document.querySelectorAll(`#${carId} .color-seat`);

      // Hàm cập nhật màu của ghế khi được click
      function color2(seatElement) {
        if (seatElement.classList.contains('selected-seat')) {
          seatElement.style.color = '#ebe6e6';
          seatElement.classList.remove('selected-seat');
        } else {
          seatElement.style.color = '#19d259';
          seatElement.classList.add('selected-seat');
        }
      }

      // Lắng nghe sự kiện click trên từng phần tử ghế
      c.forEach(function (seatElement) {
        seatElement.addEventListener('click', function () {
          color2(seatElement);
        });
      });
    }
  }
  //5.  Hàm hiển thị tên ghế đã chọn và tổng số tiền
  {
    function Money(carId) {
      const c = document.querySelectorAll(`#${carId} .fa-mattress-pillow[data-name]`);
      const selectedSeatDisplay = document.querySelector(`#${carId} #selectedSeat`);
      const totalAmountDisplay = document.querySelector(`#${carId} #totalAmount`);

      const selectedSeats = [];
      let totalAmount = 0;

      c.forEach(seat => {
        seat.addEventListener('click', function () {
          // Kiểm tra nếu biểu tượng không có class no-select
          if (!seat.classList.contains('no-select')) {
            const d = seat.dataset.name;

            if (selectedSeats.includes(d)) {
              const n = selectedSeats.indexOf(d);
              selectedSeats.splice(n, 1);
              totalAmount -= 250000;
            } else {
              selectedSeats.push(d);
              totalAmount += 250000;
            }

            selectedSeatDisplay.textContent = `Số Ghế: ${selectedSeats.join(', ')}`;
            totalAmountDisplay.textContent = `Tổng Cộng: ${totalAmount} đ`;
          }
        });
      });
    }

  }
  // Áp dụng hàm cho từng xe và tô màu ghế
  {
    color('car1');
    Money('car1');

    color('car2');
    Money('car2');

    color('car3');
    Money('car3');

    color('car4');
    Money('car4');

    color('car5');
    Money('car5');
  }
  //--------------------------------------------------------
  // 6. thay đổi ảnh bên trái và phải phần quảng cáo
  {
    const images = [
      "./imgs/ads1.jpeg",
      "./imgs/ads2.jpeg",
      "./imgs/ads3.jpeg",
      "./imgs/ads4.jpeg",
      "./imgs/ads5.jpeg",
      "./imgs/ads6.jpeg",
      "./imgs/ads7.jpeg",
      "./imgs/ads8.jpeg",
      "./imgs/ads9.jpeg",
      "./imgs/ads10.jpeg",
      "./imgs/ads11.jpeg",
      "./imgs/ads12.jpeg",
      "./imgs/ads13.jpeg",
      "./imgs/ads14.jpeg",
    ];

    let index = 0;
    const l = document.getElementById("image1");
    const r = document.getElementById("image2");

    function change() {
      l.src = images[index];
      index = (index + 1) % images.length;
    }

    setInterval(change, 3000); // Thay đổi hình ảnh mỗi 3 giây

    // Đảm bảo rằng chữ không bị nhảy vào thay thế
    l.addEventListener('load', function () {
      r.src = images[index];
    });
  }
  //----------------------------------------------------------
  /* 7. hàm ẩn hiện menu của header*/
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
      });
    };
  }
  //-----------------------------------------------------------
  /* 8. Go to top */
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
  // 9. bảng thông báo khi nhấn tiếp tục
  {
    const c = document.querySelectorAll(".continueBtn");
    const popup = document.getElementById("popup");
    const close = document.getElementById("closePopup");

    c.forEach(function (btn) {
      btn.addEventListener("click", function () {
        popup.style.display = "block";
      });
    });

    close.addEventListener("click", function () {
      popup.style.display = "none";
    });
  }
  //----------------------------------------------------------
});
/*hiệu ứng hiện dần dần khi cuộn*/
{
  window.addEventListener('scroll', reveal);

  function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
      var c1 = window.innerHeight;
      var c2 = reveals[i].getBoundingClientRect().top; //thông tin kích thước 1 phần tử
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


