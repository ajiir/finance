// Дэлгэцтэй ажиллах контроллер
var uiController = (function() {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    GetDOMstring: function() {
      return DOMstrings;
    }
  };
})();

// Санхүүтэй ажиллах контроллер
var financeController = (function() {
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      inc: [],
      exp: []
    },
    totals: {
      inc: 0,
      exp: 0
    }
  };
})();

// Пршграмм холбогч контроллер
var appController = (function(uiController, fnController) {
  var ctrlAdditem = function() {
    // 1. Оруулах өгөгдөлийг дэлгэцнээс олж авна.
    console.log(uiController.getInput());
    // 2. Олж авсан өгөдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3. Олж авсан өгөгдлүүдийг веб дээрээ тохирох хэсэгт нь гаргана.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };
  var setupEventListeners = function() {
    var DOM = uiController.GetDOMstring();

    document.querySelector(DOM.addBtn).addEventListener("click", function() {
      ctrlAdditem();
    });
    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAdditem();
      }
    });
  };

  return {
    init: function() {
      console.log("Программ эхэллээ...");
      setupEventListeners();
    }
  };
})(uiController, financeController);

appController.init();
