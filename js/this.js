  //匿名函数定时器由于没有默认的宿主对象,所以默认this指向window
  var obj = {
    say: function () {
      setTimeout(function() {
        console.log(this)
      });
    }
  }
  obj.say();    // window{postMessage: ƒ, blur: ƒ, focus: ƒ, …}

   //箭头函数在obj的作用域中，所以this指向obj
  var obj1 = {
    say: function () {
      setTimeout(() => {
        console.log(this)
      });
    }
  }
  obj1.say(); // obj1

  var obj2 = {
    say: function () {
      var f1 = () => {
        console.log(this); // obj2
        setTimeout(() => {
          console.log(this); // obj2
        })
      }
      f1();
    }
  }
  obj2.say()

  var obj3 = {
    say: function () {
      var f1 = function () {
        console.log(this);    // window, f1调用时,没有宿主对象,默认是window
        setTimeout(() => {
          console.log(this); // window， 继承父级的this,父级的this指代的是window.
        })
      };
      f1();
    }
  }
  obj3.say()