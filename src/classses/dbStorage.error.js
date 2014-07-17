var dbStorage = dbStorage || {};

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
