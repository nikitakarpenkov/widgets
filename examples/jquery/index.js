function init() {
  //$.material.init();

  var json = {
    questions: [
    {
        "type": "matrixdynamic",
        "rowCount": 1,
        "columns": [{
          "name": "question1",
          "title": "Question 1",
          "cellType": "text",
          "autocomplete": ["foo", "bar", "hello", "world", "apple", "orange"],
          "autocompleteConfig": {
            "list": {
              "sort": {
                "enabled": false
              },
              "match": {
                "enabled": true
              }
            },
            "placeholder": "Skill"
          }
        }, {
          "name": "question2",
          "title": "Question2",
          "cellType": "dropdown",
          "choices": [{
            "value": 1,
            "text": "1"
          }, {
            "value": 2,
            "text": "2"
          }, {
            "value": 3,
            "text": "3"
          }, {
            "value": 4,
            "text": "4"
          }, {
            "value": 5,
            "text": "5"
          }, {
            "value": 6,
            "text": "6"
          }, {
            "value": 7,
            "text": "7"
          }, {
            "value": 8,
            "text": "8"
          }, {
            "value": 9,
            "text": "9"
          }, {
            "value": 10,
            "text": "10+"
          }],
          "isRequired": true
        }, {
          "name": "question3",
          "title": "Question3",
          "cellType": "dropdown",
          "choices": [{
            "value": 1,
            "text": "Some"
          }, {
            "value": 2,
            "text": "Value"
          }, {
            "value": 3,
            "text": "Foo"
          }, {
            "value": 4,
            "text": "Bar"
          }, {
            "value": 5,
            "text": "FooBar"
          }],
          "isRequired": true
        }],
        "name": "matrix",
        "title": "Matrix Dynamic Question"
      },
      {
        type: "dropdown",
        renderAs: "select2",
        choicesByUrl: { url: "https://restcountries.eu/rest/v1/all" },
        name: "countries",
        title: "Please select the country you have arrived from:"
      },
      {
        name: "date",
        type: "datepicker",
        inputType: "date",
        title: "Your favorite date:",
        dateFormat: "mm/dd/yy",
        isRequired: true
      },
      {
        name: "autocomplete1",
        title: "Easy-autocomplete:",
        type: "text",
        autocomplete: [
          "fontawesome-stars",
          "css-stars",
          "bars-pill",
          "bars-1to10",
          "bars-movie",
          "bars-square",
          "bars-reversed",
          "bars-horizontal",
          "bootstrap-stars",
          "fontawesome-stars-o"
        ]
      }
      ]
  };

  Survey.JsonObject.metaData.addProperty("matrixdropdowncolumn", {
    name: "autocomplete",
    default: []
  });
  Survey.JsonObject.metaData.addProperty("matrixdropdowncolumn", {
    name: "autocompleteConfig",
    default: null
  });

  Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
  //Survey.Survey.cssType = "bootstrapmaterial";
  Survey.Survey.cssType = "bootstrap";

  var model = new Survey.Model(json);
  window.survey = model;

  $("#surveyElement").Survey({
    model: survey
  });
}

if (!window["%hammerhead%"]) {
  init();
}
