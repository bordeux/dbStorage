$(function() {

    var db = new dbStorage.open("db_test");
    
    var table1 = new dbStorage.table("table1");
    table1.createIfNotExsist();
    table1.addField((new dbStorage.field("id")).asPrimiary());
    table1.addField((new dbStorage.field("key")).asIndex());
    table1.addField((new dbStorage.field("value")));
    
    
    db.init().then(function() {
        return db.createTable(table1);
    }).then(function(){
        console.log("table created!");
        
        return db.insert(table1, {
            id : 5,
            key : "dupa",
            value : "sadasdas"
        });
        
        
    }).then(function(){
        console.log("Record inserted!");
        
    }).fail(function (error) {
        console.error("Db error ", error);
    });


});