function init(Survey, $) {
  $ = $ || window.$;
  var widget = {
    name: "autocomplete",
    widgetIsLoaded: function() {
      return !!$.fn.easyAutocomplete;
    },
    isFit: function(question) {
      return question.getType() === "text";
    },
    isDefaultRender: true,
    activatedByChanged: function(activatedBy) {
      if (
        Survey.JsonObject.metaData.findProperty("text", "autocomplete") !== null ||
        Survey.JsonObject.metaData.findProperty("text", "autocompleteByUrl") !== null
      ) {
        return;
      }
      Survey.JsonObject.metaData.addProperty("text", {
        name: "autocomplete",
        default: []
      });
      Survey.JsonObject.metaData.addProperty("text", {
        name: "autocompleteByUrl:restfull",
        className: "ChoicesRestfull",
        onGetValue: function(obj) {
          return obj && obj.autocompleteByUrl && obj.autocompleteByUrl.getData();
        },
        onSetValue: function(obj, value) {
          if (!obj.autocompleteByUrl) {
            obj.autocompleteByUrl = new Survey.ChoicesRestfull();
          }
          obj.autocompleteByUrl.setData(value);
        }
      });
      Survey.JsonObject.metaData.addProperty("text", {
        name: "autocompleteConfig",
        default: null
      });
    },
    afterRender: function(question, el) {
      var $el = $(el).is("input") ? $(el) : $(el).find("input");
      var options = {
        adjustWidth: false,
        placeholder: question.placeholder
      }
      if (question.autocompleteConfig) {
        Object.assign(options, question.autocompleteConfig);
      }
      if (!options.data) {
        options.data = (question.autocomplete || []);
      }
      if (!!question.autocompleteByUrl) {
        options.url = function(phrase) {
          return question.autocompleteByUrl.url;
        };
        options.getValue = question.autocompleteByUrl.valueName;
      }
      $el.easyAutocomplete(options);
    },
    willUnmount: function(question, el) {
      // var $el = $(el).find("input");
      // $el.autocomplete("destroy");
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "type");
}

if (typeof Survey !== "undefined") {
  init(Survey, window.$);
}

export default init;
