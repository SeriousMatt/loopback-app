// var loopback = require('loopback');
// var ds = loopback.createDataSource('mssql', {
//       "url": "mssql://TSCSWebApps:t20_W23-a1@sqldev.tsco.org:1433/FieldData_Staging?schema=dbo.TSC_Projects"

// });
//  List database tables and/or views
// ds.discoverModelDefinitions({views: true, limit: 20});
//  List primary keys for a given table
// ds.discoverPrimaryKeys('dbo.TSC_Projects');
// Discover and build models from INVENTORY table
// ds.discoverAndBuildModels('dbo.TSC_Projects', {visited: {}, associations: true},
// function (err, models) {
//   // Now we have a list of models keyed by the model name
//   // Find the first record from the inventory


// console.log(ds);

//   // models.ProjectName.findOne({}, function (err, inv) {
//   //   if(err) {
//   //     console.error(err);
//   //     return;
//   //   }
//   //   console.log("\nProjectNames: ", inv);
//   //   // Navigate to the product model
//   //   inv.product(function (err, prod) {
//   //     console.log("\nProduct: ", prod);
//   //     console.log("\n ------------- ");
//   //   });
//   // });
// });



 
// // List database columns for a given table/view
// ds.discoverModelProperties('PRODUCT', cb);
// ds.discoverModelProperties('INVENTORY_VIEW', {owner: 'STRONGLOOP'}, cb);
 
// // List primary keys for a given table
// ds.discoverPrimaryKeys('INVENTORY',  cb);
 
// // // List foreign keys for a given table
// // ds.discoverForeignKeys('INVENTORY',  cb);
 
// // // List foreign keys that reference the primary key of the given table
// // ds.discoverExportedForeignKeys('PRODUCT',  cb);
 
// // Create a model definition by discovering the given table
// ds.discoverSchema(table, {owner: 'STRONGLOOP'}, cb);



var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
