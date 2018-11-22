"use strict";

require(["config"], function () {
  require(["jquery", "header", "footer", "jquerycookie"], function ($, header, footer, jquerycookie) {
    new Promise(function (resolve, reject) {
      $("header").load("/html/component/header.html", function () {
        header.init();
        header.list();
        header.welcome();
      });
      $("footer").load("/html/component/footer.html", function () {
        resolve();
      });
    }).then(function () {
      var products = $.cookie("cart");
      var html = ""; //console.log(products);
      //判断购物车中是否有数据

      if (products) {
        products = JSON.parse(products);
        $(".cart-area").show();
      } else {
        products = [];
        $(".cart-area").hide();
        html += "\n\t\t\t\t\t<tr class=\"empty\">\n\t\t\t\t\t\t<td>\u60A8\u7684\u8D2D\u7269\u8F66\u91CC\u8FD8\u6CA1\u6709\u5546\u54C1\uFF0C\u53BB<a href=\"http://localhost:1000/html/detail.html?id=2\">\u9009\u8D2D\u5546\u54C1</a></td>\n\t\t\t\t\t</tr>\n\t\t \t\t"; //console.log(html);

        $("#cart_body").html(html);
      } //购物车不为空的时候。渲染所有商品


      products.forEach(function (pro) {
        html += "\n\t\t\t\t\t<tr class=\"tr\">\n\t\t\t\t\t<td class=\"num\">".concat(pro.id, "</td>\n\t\t\t\t\t<td class=\"goods-img\"><a href=\"javascript:;\"><img src=\"").concat(pro.img, "\"></a></td>\n\t\t\t\t\t<td class=\"goods-cake\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h4>").concat(pro.title, "</h4>\n\t\t\t\t\t\t\t<span class=\"goods-spec\">\u89C4\u683C<span>&nbsp;2.0\u78C5</span></span>\n\t\t\t\t\t\t\t<span><i></i>\u8D60\u900110\u5957\u9910\u5177</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"select-birthday\">\n\t\t\t\t\t\t<div class=\"select-birthday-list\">\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" placeholder=\"\u8BF7\u9009\u62E9\u751F\u65E5\u724C\" class=\"choose-card\"/>\n\t\t\t\t\t\t\t<i class=\"huaguo\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"birthday-options\">\n\t\t\t\t\t\t\t<li>\u751F\u65E5\u5FEB\u4E50</li>\n\t\t\t\t\t\t\t<li>Happy Birthd</li>\n\t\t\t\t\t\t\t<li>\u8282\u65E5\u5FEB\u4E50</li>\n\t\t\t\t\t\t\t<li>\u81EA\u5B9A\u4E49</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"cart-price\">").concat(pro.price, "</td>\n\t\t\t\t\t<td class=\"amount\">\n\t\t\t\t\t\t<div class=\"number\">\n\t\t\t\t\t\t\t<input type=\"button\" name=\"\" class=\"reduce\" id=\"reduce\">\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"txt\" id=\"txt\" value=\"").concat(pro.amount, "\"/>\n\t\t\t\t\t\t\t<input type=\"button\" name=\"\" class=\"add\" id=\"add\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"money\" id=\"money\">").concat(pro.price * pro.amount, "</td>\n\t\t\t\t\t<td class=\"del\"><i class=\"i\"></i></td>\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t \t\t");
      });
      $("#cart_body").html(html);
    }).then(function () {
      var products = $.cookie("cart");
      var arr = JSON.parse(products);
      console.log(arr); //删除单行的商品，事件委派

      $("#cart_body").on("click", ".i", function (event) {
        //console.log(target);
        var _tr = $("#cart_body"); //console.log(_tr);


        var _id = _tr.find(".num"); //console.log(_id);
        //从cookie中移除商品


        $(this).parents(".tr").remove();
        $.cookie("cart", "", {
          expires: -1,
          path: "/"
        });
        window.location.reload(); //从DOM中删除节点
        //console.log($("#cart_body").children(":first"));
      });
    }).then(function () {
      var _tr = $("#cart_body").children(":first");

      var _amount = $(".amount");

      var _price = $(".cart-price").text(); //console.log(_price);


      var allPrice = $(".money"); //console.log(allPrice);
      //修改商品对象的数量

      _amount = 1;
      $(".add").click(function () {
        _amount = parseInt($("#txt").val());
        _amount++; //console.log(amount);

        $("#txt").val(_amount);
        allPrice.text(_amount * _price);
      });
      $(".reduce").click(function () {
        _amount = parseInt($("#txt").val());

        if (_amount > 1) {
          _amount--;
        }

        $("#txt").val(_amount);
        allPrice.text(_amount * _price);
      });
    }).then(function () {
      $(".huaguo").mousemove(function () {
        $(".birthday-options").show();
      });
      $(".huoguo").mouseleave(function () {
        $(".birthday-options").hide();
      });
    });
  });
});