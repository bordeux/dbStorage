var dbStorage = dbStorage || {};

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


