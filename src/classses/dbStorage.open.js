var dbStorage = dbStorage || {};

(function(namespace) {
    'use strict';
    
    
    /**
     * 
     * @param {string} dbName
     * @returns {Q@call;defer.promise}
     */
    namespace.open = function(dbName) {
        this.dbEngine = {};
        this.dbEngine = new namespace.storages.webSQL(dbName);
    };
    
    
  
    /**
     * 
     * @returns {undefined}
     */
    namespace.open.prototype.init = function(){
        return this.dbEngine.init();
    };
    
    /**
     * Create new table if not exsist
     * @param {dbStorage.table} table
     * @returns {Q@call;defer.promise}
     */
    namespace.open.prototype.createTable = function(table){
        return this.dbEngine.createTable(table);
    };
    
    
    
    /**
     * 
     * @param {dbStorage.table} table
     * @param {object} data
     * @returns {Q@call;defer.promise}
     */
    namespace.open.prototype.insert = function(table, data){
        return this.dbEngine.insert(table, data);
    };
    
    /**
     * 
     * @param {dbStorage.table} table
     * @param {object} where
     * @returns {Q@call;defer.promise}
     */
    namespace.open.select = function(table, query){
        var deferred = Q.defer();
        
        return deferred.promise;
    };
    
    /**
     * 
     * @param {dbStorage.table} table
     * @param {dbStorage.query@call} where
     * @returns {undefined}
     */
    namespace.open.delete = function(table, query){
        
    };
    
    
})(dbStorage);


