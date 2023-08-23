function showHide() {
    var x = document.getElementById("infomation-left");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// hiện thông báo mời nhập
document.querySelector('.send').addEventListener('click', function (event) {
    event.preventDefault();
    var inputs = document.querySelectorAll('input[required], textarea[required]');
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            var message = inputs[i].parentElement.querySelector('.message');
            if (!message) {
                message = document.createElement('div');
                message.className = 'message';
                message.textContent = ' *Mời bạn nhập thông tin!';
                message.style.color = 'red';
                inputs[i].parentElement.appendChild(message);
            }
        } else {
            var message = inputs[i].parentElement.querySelector('.message');
            if (message) {
                inputs[i].parentElement.removeChild(message);
            }
        }
    }
});
//bảng phản hồi
document.querySelector('.send').addEventListener('click', function (event) {
    event.preventDefault();
    var inputs = document.querySelectorAll('input[required], textarea[required]');
    var all = true;
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            all = false;
            break;
        }
    }
    if (all) {
        var overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.right = '0';
        overlay.style.bottom = '0';
        overlay.style.left = '0';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        document.body.appendChild(overlay);

        var messageBox = document.createElement('div');
        messageBox.style.position = 'fixed';
        messageBox.style.width = '300px';
        messageBox.style.height = '100px';
        messageBox.style.backgroundColor = 'white';
        messageBox.style.border = '1px solid #fb6400';
        messageBox.style.padding = '10px';
        messageBox.style.boxSizing = 'border-box';
        messageBox.style.top = '50%';
        messageBox.style.left = '50%';
        messageBox.style.transform = 'translate(-50%, -50%)';
        messageBox.style.borderRadius = "10px";

        var close = document.createElement('button');
        close.innerHTML = "X";
        close.style.position = "absolute";
        close.style.top = "10px";
        close.style.right = "10px";
        close.style.color = "#fb6400";
        close.style.border = "1px solid #fb6400"

        var thank = document.createElement('div');


        thank.style.position = "absolute";
        thank.style.top = "50%";
        thank.style.left = "50%";
        thank.style.transform = "translate(-50%, -50%)";

        var thank2 = document.createElement('span');


        thank2.style.whiteSpace = "nowrap";
        thank2.style.color = "#fb6400";

        thank2.innerHTML = "Cảm ơn quý khách đã phản hồi!";

        thank.appendChild(thank2);

        messageBox.appendChild(close);
        messageBox.appendChild(thank);

        overlay.appendChild(messageBox);

        close.addEventListener('click', function () {
            document.body.removeChild(overlay);
        });
    }
});

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
