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
      var tab_id = $(this).attr('data-tab');
      // Xóa active class khỏi tất cả các tab
      $('.tab-switch li').removeClass('active');
      // Ẩn tất cả các tab pane
      $('.tab-pane').removeClass('active');
      // Thêm active class vào tab được click
      $(this).addClass('active');
      // Hiển thị tab pane tương ứng với tab được click
      $("#" + tab_id).addClass('active');
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

    function updateCountdown(car) {
      var seconds = car.countDownTime / 1000;
      seconds = Math.floor(seconds);
      var hours = Math.floor(seconds / 3600);
      seconds -= hours * 3600;
      var minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;

      car.countdownElement.innerHTML = "Kết thúc trong: " + hours + ":" + minutes + ":" + seconds;

      car.countDownTime -= 1000;

      if (car.countDownTime < 0) {
        clearInterval(car.timerId);
        car.countdownElement.innerHTML = "Hết giờ";
      }
    }

    for (var i = 0; i < cars.length; i++) {
      cars[i].timerId = setInterval(updateCountdown.bind(null, cars[i]), 1000);
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

    function setupChooseAndCloseButtons(car) {
      const chooseBtns = document.querySelectorAll(`#${car.id} .${car.chooseBtnClass}`);
      const closeBtn = document.getElementById(car.closeBtnId);
      const sectionId = car.sectionId;

      chooseBtns.forEach(function (chooseBtn) {
        chooseBtn.addEventListener('click', function () {
          const allSections = document.querySelectorAll('.Reservations');

          allSections.forEach(function (section) {
            section.classList.add('hidden');
          });

          const sectionToShow = document.getElementById(sectionId);
          sectionToShow.classList.remove('hidden');
        });
      });

      closeBtn.addEventListener('click', function () {
        const reservationSection = document.getElementById(sectionId);
        reservationSection.classList.add('hidden');
      });
    }

    cars.forEach(function (car) {
      setupChooseAndCloseButtons(car);
    });
  }
  //------------------------------------------------------
  //4.  Hàm tô màu để đặt chỗ
  {
    function setupSeatColoring(carId) {
      // Lấy tất cả các phần tử ghế có lớp color-seat của xe cụ thể
      const seatElements = document.querySelectorAll(`#${carId} .color-seat`);

      // Hàm cập nhật màu của ghế khi được click
      function updateSeatColor(seatElement) {
        if (seatElement.classList.contains('selected-seat')) {
          seatElement.style.color = '#ebe6e6';
          seatElement.classList.remove('selected-seat');
        } else {
          seatElement.style.color = '#19d259';
          seatElement.classList.add('selected-seat');
        }
      }

      // Lắng nghe sự kiện click trên từng phần tử ghế
      seatElements.forEach(function (seatElement) {
        seatElement.addEventListener('click', function () {
          updateSeatColor(seatElement);
        });
      });
    }
  }
  //5.  Hàm hiển thị tên ghế đã chọn và tổng số tiền
  {
    function displaySelectedSeatsAndTotal(carId) {
      const seats = document.querySelectorAll(`#${carId} .fa-mattress-pillow[data-name]`);
      const selectedSeatDisplay = document.querySelector(`#${carId} #selectedSeat`);
      const totalAmountDisplay = document.querySelector(`#${carId} #totalAmount`);
    
      const selectedSeats = [];
      let totalAmount = 0;
    
      seats.forEach(seat => {
        seat.addEventListener('click', function () {
          // Kiểm tra nếu biểu tượng không có class no-select
          if (!seat.classList.contains('no-select')) {
            const seatName = seat.dataset.name;
    
            if (selectedSeats.includes(seatName)) {
              const index = selectedSeats.indexOf(seatName);
              selectedSeats.splice(index, 1);
              totalAmount -= 250000;
            } else {
              selectedSeats.push(seatName);
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
    setupSeatColoring('car1');
    displaySelectedSeatsAndTotal('car1');

    setupSeatColoring('car2');
    displaySelectedSeatsAndTotal('car2');

    setupSeatColoring('car3');
    displaySelectedSeatsAndTotal('car3');

    setupSeatColoring('car4');
    displaySelectedSeatsAndTotal('car4');

    setupSeatColoring('car5');
    displaySelectedSeatsAndTotal('car5');
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

    let currentIndex = 0;
    const leftImage = document.getElementById("image1");
    const rightImage = document.getElementById("image2");

    function changeImage() {
      leftImage.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 3000); // Thay đổi hình ảnh mỗi 3 giây

    // Đảm bảo rằng chữ không bị nhảy vào thay thế
    leftImage.addEventListener('load', function () {
      rightImage.src = images[currentIndex];
    });
  }
  //----------------------------------------------------------
  // 7. nút load khi chuyển trang, lỗi chưa fix
  {
  }
  //----------------------------------------------------------
  /*8. hàm ẩn hiện menu của header*/
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
  // bảng thông báo khi nhấn tiếp tục
  {
    const continueBtns = document.querySelectorAll(".continueBtn");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");  // Thay đổi tên ID thành "closePopup"

    continueBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        popup.style.display = "block";
      });
    });

    closePopup.addEventListener("click", function () {
      popup.style.display = "none";
    });
  }
  //----------------------------------------------------------
  {
    // Lấy tất cả các biểu tượng
    const icons = document.querySelectorAll('.no-select');

    // Lặp qua từng biểu tượng và thêm sự kiện
    icons.forEach(icon => {
      icon.addEventListener('mouseover', () => {
        document.body.style.cursor = 'not-allowed';
      });

      icon.addEventListener('mouseout', () => {
        document.body.style.cursor = 'default';
      });
    });
  }

});
/*hiệu ứng hiện dần dần khi cuộn*/
{
  window.addEventListener('scroll', reveal);

  function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top; //thông tin kích thước 1 phần tử
      var revealpoint = 120;

      if (revealtop < windowheight - revealpoint) { //vị trí của phần tử so với viewport nhỏ hơn 120 thì thêm class active
        reveals[i].classList.add('active');
      }
      else {
        reveals[i].classList.remove('active');
      }
    }
  }
}


