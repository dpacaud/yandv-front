var express = require("express"),
    app     = express(express.logger());
    port    = process.env.PORT || 3000;
    
app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/app/'));
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});
 
app.listen(port);