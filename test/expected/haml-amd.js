(function() {
  define(['hamlcoffee'], function(hc) {
    return function(context) {
      var render;
      render = function() {
        var $o;
        $o = [];
        $o.push("\n<html lang='en'>\n  <head>\n    <title>Page title</title>\n    <link href='//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css' rel='stylesheet'>\n    <script src='//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js'></script>\n  </head>\n  <body>\n    <h1>CSS and Javascript include tests</h1>\n  </body>\n</html>");
        return $o.join("\n");
      };
      return render.call(context);
    };
  });

}).call(this);
