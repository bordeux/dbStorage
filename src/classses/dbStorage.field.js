var dbStorage = dbStorage || {};

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


