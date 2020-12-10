/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel', 'ojs/ojmodel', 'ojs/ojknockout-model',
     'ojs/ojformlayout', 'ojs/ojbutton', 'ojs/ojrouter', 'ojs/ojdialog'
  ],
  function (oj, ko, $) {
    function AddViewModel() {
      //var serviceUrl = "http://localhost:3001/reviews";
      var self = this;
      self.router = oj.Router.rootInstance;
      var state = self.router.currentState();
      var parameters = state.parameters;
      self.root = self.router.root;
        self.title = ko.observable("Discount");
      self.submitHandler = function () {
 var reviews = self.root.reviews;
          var model = reviews.get();
           model.discount();
       
            document.getElementById('successDialog').open();
      }

      self.close = function (event) {
        document.getElementById('successDialog').close();
        self.router.go('table');
      }
    }
    return AddViewModel;
  }
);
