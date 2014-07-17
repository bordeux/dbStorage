/*! dbStorage - v0.0.1 - 2014-07-17 */var dbStorage = dbStorage || {};

(function(namespace) {
    'use strict';
    
    /**
     * 
     * @param {string} dbName
     * @returns {dbStorage}
     */
    namespace.error = function(arg) {
        this.initDefaultValues();
        return this;
    };
    
    
    /**
     * Set default messages
     * @returns {_L2.namespace.error.prototype}
     */
    namespace.error.prototype.initDefaultValues = function(){
        this.setMessage("Undefined message");
        this.setCode(0);
        return this;
    };
    
    
    /**
     * Get error message
     * @returns {String}
     */
    namespace.error.prototype.getMessage = function(){
        return this.message;
    };
    
    
    /**
     * Get error code id
     * @returns {Number}
     */
    namespace.error.prototype.getCode = function(){
        return this.code;
    };

    
    /**
     * Set message to this error
     * @param {string} message
     * @returns {_L2.namespace.error.prototype}
     */
    namespace.error.prototype.setMessage = function(message){
        this.message = message;
        return this;
    };
    
    
    /**
     * Set error code to this error
     * @param {Number} code
     * @returns {_L2.namespace.error.prototype}
     */
    namespace.error.prototype.setCode = function(code){
        this.code = code;
        return this;
    };
    
    /**
     * 
     * @param {object|string} error
     * @returns {_L3.namespace.error.prototype}
     */
    namespace.error.prototype.fromException = function(error){
        if(typeof error === "string"){
            this.setMessage(error);
            return this;
        }
      
        if(typeof error === "object" && typeof error.message === "string"){
            this.setMessage(error.message);
        }
        
        if(typeof error === "object" && typeof error.code !== "undefined"){
            this.setCode(error.code);
        }
        
        this.orginalException = error;
        
        return this;
    };
    
    
    
    

    
})(dbStorage);
;var dbStorage = dbStorage || {};

(function(namespace, window) {
    'use strict';


    /**
     * Constructor
     * @param {string} dbName
     * @returns {dbStorage}
     */
    namespace.field = function(fieldName) {
        this.setDefaultOptions();
        this.fieldName = fieldName;
        return this;
    };

    /**
     * Set defaults parameters
     * @returns {_L3.namespace.field.prototype}
     */
    namespace.field.prototype.setDefaultOptions = function() {
        this.asIndex(false);
        this.asPrimiary(false);
        this.setType("text");
        this.setAutoIcrement(false);
        this.setNotNull(false);
        this.setDefaultValue(null);
        return this;
    };


    /**
     * Get name of this field
     * @returns {String}
     */
    namespace.field.prototype.getName = function() {
        return this.fieldName;
    };

    /**
     * Set index for this key
     * @param {boolean} val
     * @returns {_L3.namespace.field.prototype}
     */
    namespace.field.prototype.asIndex = function(val) {
        this.index = namespace.utils.ifsetor(val, true);
        return this;
    };

    /**
     * Set field as primary key
     * @param {boolean} val
     * @returns {_L3.namespace.field.prototype}
     */
    namespace.field.prototype.asPrimiary = function(val) {
        this.primary = namespace.utils.ifsetor(val, true);
        return this;
    };

    /**
     * Set field  autoicrement
     * @param {boolean} val
     * @returns {_L3.namespace.field.prototype}
     */
    namespace.field.prototype.setAutoIcrement = function(val) {
        this.autoIcrement = namespace.utils.ifsetor(val, true);
        return this;
    };

    /**
     * Set field as not null
     * @param {boolean} val
     * @returns {_L3.namespace.field.prototype}
     */
    namespace.field.prototype.setNotNull = function(val) {
        this.notNull = namespace.utils.ifsetor(val, true);
        return this;
    };



    /**
     * Set type of field
     * @param {string} type
     * @returns {_L3.namespace.field.prototype}
     */
    namespace.field.prototype.setType = function(type) {
        namespace.fieldTypes = namespace.fieldTypes || {};
        if (!namespace.fieldTypes[type]) {
            throw (new namespace.error()).setMessage("dbStorage::field: Field type " + type + " not found").setCode(404);
            return this;
        }

        this.type = new namespace.fieldTypes[type];
        return this;
    };

    /**
     * Get field type
     * @returns {namespace.fieldTypes}
     */
    namespace.field.prototype.getType = function() {
        return this.type;
    };

    /**
     * Set default value for this field
     * @param {mixed} val
     * @returns {_L3.namespace.field.prototype}
     */
    namespace.field.prototype.setDefaultValue = function(val) {
        this.defaultValue = val;
        return this;
    };
    
    /**
     * Get default value
     * @returns {mixed}
     */
    namespace.field.prototype.getDefaultValue = function() {
        return this.defaultValue;
    };


})(dbStorage, window);


;var dbStorage = dbStorage || {};

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


;var dbStorage = dbStorage || {};

(function(namespace) {
    'use strict';
    
    /**
     * 
     * @param {string} dbName
     * @returns {dbStorage}
     */
    namespace.query = function(dbName) {
        return this;
    };
    

    
    

    
})(dbStorage);
;var dbStorage = dbStorage || {};

(function(namespace, window) {
    'use strict';

    /**
     * Constructor
     * @param {String} tableName
     * @returns {dbStorage}
     */
    namespace.table = function(tableName) {
        this.tableName = tableName;
        this.setDefaults;
        this.fields = {};
    };


    /**
     * 
     * @returns {_L3.namespace.table.prototype}
     */
    namespace.table.prototype.setDefaults = function() {
        this.createIfNotExsist(false);
        return this;
    };
    

    /**
     * 
     * @param {type} field
     * @returns {_L3.namespace.table.prototype}
     */
    namespace.table.prototype.addField = function(field) {
        this.fields[field.getName()] = field;
        return this;
    };


    /**
     * Get all fields from this table
     * @returns {_L3.namespace.table.fields}
     */
    namespace.table.prototype.getFields = function() {
        return this.fields;
    };


    /**
     * Get name of this table
     * @returns {String}
     */
    namespace.table.prototype.getName = function() {
        return this.tableName;
    };

    /**
     * 
     * @param {boolean} val
     * @returns {_L3.namespace.table.prototype}
     */
    namespace.table.prototype.createIfNotExsist = function(val) {
        this.createIfNotExsist = namespace.utils.ifsetor(val, true);
        return this;
    };





})(dbStorage, window);


;var dbStorage = dbStorage || {};

(function(namespace, window) {
    'use strict';
    
    
    /**
     * 
     */
    namespace.utils =  {};
    
    
    /**
     * Clone object
     * @param {Object} obj
     * @returns {Object}
     */
    namespace.utils.clone = function(obj) {
            var outpurArr = new Array();
            for (var i in obj) {
                    outpurArr[i] = typeof (obj[i]) === 'object' ? this.clone(obj[i]) : obj[i];
            }
            return outpurArr;
    };
    
    
    /**
     * Extend object to new object
     * @param {object} obj
     * @param {object} obj2
     * @returns {object}
     */
    namespace.utils.extend = function(obj, obj2) {
       var obj = namespace.utils.clone(obj);
       var obj2 = namespace.utils.clone(obj2);
       
       for(i in obj2){
          obj[i] = obj2[i];
       }
       
      return clone;
    };
    
    /**
     * 
     * @param {mixed} val
     * @param {mixed} def
     * @returns {mixed}
     */
    namespace.utils.ifsetor = function(val, def) {
       if(typeof val === "undefined"){
           return def;
       }
       return val;
    };
    
    /**
     * 
     * @param {type} n
     * @returns {Boolean}
     */
    namespace.utils.isInt = function(n) {
        return n % 1 === 0;
    };



    
})(dbStorage, window);


;var dbStorage = dbStorage || {};

(function(namespace, window) {
    'use strict';

    namespace.fieldTypes = namespace.fieldTypes || {};
    
    /**
     * 
     * @param {string} dbName
     * @returns {dbStorage}
     */
    namespace.fieldTypes.text = function() {
        this.type = "text";
        return this;
    };
    

})(dbStorage, window);


;var dbStorage = dbStorage || {};

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


