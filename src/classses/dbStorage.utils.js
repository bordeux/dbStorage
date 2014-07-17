var dbStorage = dbStorage || {};

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


