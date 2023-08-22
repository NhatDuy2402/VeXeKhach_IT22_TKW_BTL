function showHide() {
    var x = document.getElementById("infomation-left");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// hiện thông báo mời nhập
document.querySelector('.send').addEventListener('click', function(event) {
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
document.querySelector('.send').addEventListener('click', function(event) {
    event.preventDefault();
    var inputs = document.querySelectorAll('input[required], textarea[required]');
    var allFilled = true;
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            allFilled = false;
            break;
        }
    }
    if (allFilled) {
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

        var closeButton = document.createElement('button');
        closeButton.innerHTML = "X";
        closeButton.style.position = "absolute";
        closeButton.style.top = "10px";
        closeButton.style.right = "10px";
        closeButton.style.color = "#fb6400";
        closeButton.style.border = "1px solid #fb6400"

        var thankYouMessageContainer = document.createElement('div');
        

        thankYouMessageContainer.style.position = "absolute";
        thankYouMessageContainer.style.top = "50%";
        thankYouMessageContainer.style.left = "50%";
        thankYouMessageContainer.style.transform = "translate(-50%, -50%)";
        
        var thankYouMessageText = document.createElement('span');
        
    
        thankYouMessageText.style.whiteSpace = "nowrap";
        thankYouMessageText.style.color = "#fb6400";
        
        thankYouMessageText.innerHTML = "Cảm ơn quý khách đã phản hồi!";
        
        thankYouMessageContainer.appendChild(thankYouMessageText);
        
        messageBox.appendChild(closeButton);
        messageBox.appendChild(thankYouMessageContainer);
        
        overlay.appendChild(messageBox);
        
        closeButton.addEventListener('click', function() {
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
    