var dbStorage = dbStorage || {};

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


