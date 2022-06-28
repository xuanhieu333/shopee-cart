// Modal-cart
var modal_cart = document.getElementById("myModal");
var btn_cart = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn_cart.onclick = function () {
  modal_cart.style.display = "block";
};
close.onclick = function () {
  modal_cart.style.display = "none";
};
close_footer.onclick = function () {
  modal_cart.style.display = "none";
};
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng");
};
window.onclick = function (event) {
  if (event.target == modal_cart) {
    modal_cart.style.display = "none";
  }
};


//Modal dang ki
var modal = document.getElementById("modal");
var auth_form_1 = document.getElementById('auth-form-1')
var btn_register = document.getElementById('btn-register')
var modal_close = document.getElementById('modal-close')
btn_register.onclick = function () {
  modal.style.display = "flex";
  auth_form_1.style.display = "block";
};

modal_close.onclick = function () {
  modal.style.display = "none";
  auth_form_1.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Modal dang nhap
var modal = document.getElementById("modal");
var auth_form_2 = document.getElementById('auth-form-2')
var btn_signin = document.getElementById('btn-signin')
var modal_close = document.getElementById('modal-close')
btn_signin.onclick = function () {
  modal.style.display = "flex";
  auth_form_2.style.display = "block";
  auth_form_1.style.display = "none";
};

modal_close.onclick = function () {
  modal.style.display = "none";
  auth_form_2.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



// xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
  })
}

// update sản phầm  & thêm sản phẩm