var dbStorage = dbStorage || {};

(function(namespace, window) {
    'use strict';

    namespace.storages = namespace.storages || {};


    /**
     * Constuctor
     * @param {string} dbName
     * @returns {dbStorage}
     */
    namespace.storages.webSQL = function(dbName) {
        this.dbName = dbName;
        this.dbVersion = 1;
        this.dbSize = 100 * 1024 * 1024;
        return this;
    };

    /**
     * Initialize database
     * @returns {Q@call;defer.promise}
     */
    namespace.storages.webSQL.prototype.init = function() {
        var deferred = Q.defer();

        try {
            this.db = window.openDatabase(this.dbName, this.dbVersion, this.dbName, this.dbSize);
            deferred.resolve(this);
        }
        catch (error) {
            deferred.reject((new namespace.error()).fromException(error));
        }

        return deferred.promise;
    };


    /**
     * Create table in database
     * @param {dbStorage.table} table
     * @returns {Q@call;defer.promise}
     */
    namespace.storages.webSQL.prototype.createTable = function(table) {
        var deferred = Q.defer();
        var tableFields = table.getFields();
        var fields = [];
        
        for(var i in tableFields){
            fields.push(this.__createFieldSQLDefinition(tableFields[i]));
        }
        var SQL = [];
        
        SQL.push("CREATE TABLE");
        if(table.createIfNotExsist){
             SQL.push("IF NOT EXISTS");
        }
        SQL.push(this.escapeKey(table.getName()));
        SQL.push("(");
        SQL.push(fields.join(" , "));
        SQL.push(")");
        
        console.log(SQL.join(" "));
        return this.query(SQL.join(" "));
    };
    
    /**
     * 
     * @param {type} field
     * @returns {String}
     */
    namespace.storages.webSQL.prototype.__createFieldSQLDefinition = function(field) {
        
        var fieldDefinition = [];
        fieldDefinition.push(this.escapeKey(field.getName()));
        fieldDefinition.push(this.__convertFieldType(field));
        
        if(field.notNull){
            fieldDefinition.push("NOT NULL");
        }
        
        if(field.primary){
            fieldDefinition.push("PRIMARY KEY");
        }
        
        if(field.autoIcrement){
            fieldDefinition.push("AUTOINCREMENT");
        }
        
        
        return fieldDefinition.join(" ");
    };
    
    
    /**
     * 
     * @param {type} field
     * @returns {String}
     */
    namespace.storages.webSQL.prototype.__convertFieldType = function(field) {
        
        switch(field.getType().type){
            case "text":
                return "TEXT";
        }
        
        
        return "TEXT";
    };
    
    
    
    

    /**
     * Execute query on the table
     * @param {String|object} sql
     * @returns {Q@call;defer.promise}
     */
    namespace.storages.webSQL.prototype.query = function(sql) {
        var deferred = Q.defer();
        this.db.transaction(function(tx) {
            if (typeof sql === "object") {
                for (var i in sql) {
                    tx.executeSql(sql[i]);
                }
            } else {
                tx.executeSql(sql);
            }
        }, function(error) {
            deferred.reject((new namespace.error()).fromException(error));
        }, function() {
            deferred.resolve(arguments);
        });

        return deferred.promise;
    };
    
    /**
     * 
     * @param {string} string
     * @returns {String}
     */
    namespace.storages.webSQL.prototype.escapeKey = function(key) {
        return ['`',key,'`'].join("");
    };
    
    
    
    /**
     * 
     * @param {dbStorage.table} table
     * @param {object} data
     * @returns {Array}
     */
    namespace.storages.webSQL.prototype.insert = function(table, data) {
        var deferred = Q.defer();
        var tableFields = table.getFields();
        var values = [];
        var keys = [];
        for(var i in tableFields){
            var field = tableFields[i];
            var fieldName = field.getName();
            var value = namespace.utils.ifsetor(data[fieldName], field.getDefaultValue());
            values.push(this.escape(value));
            keys.push(this.escapeKey(fieldName));
        }
        
        var SQL = [];
        SQL.push("INSERT INTO");
        SQL.push(this.escapeKey(table.getName()));
        SQL.push("(");
        SQL.push(keys.join(" , "));
        SQL.push(")");
        SQL.push("VALUES (");
        SQL.push(values.join(" , "));
        SQL.push(")");
        
        var sqlQuery = SQL.join(" ");
        console.log(sqlQuery);

        return this.query(sqlQuery);
    };
    
    
    /**
     * Escape string to SQL
     * @param {string|Number} value
     * @returns {string}
     */
    namespace.storages.webSQL.prototype.escape = function(value) {
        if(value === null){
            return "null";
        }
        
        if(namespace.utils.isInt(value)){
            return parseInt(value);
        }
        
        return '"' + value.replace(/(["'])/g, "'") + '"';
    };
    
    
    
    
    
    

})(dbStorage, window);


