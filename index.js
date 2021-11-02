module.exports = {

   capitalizeText (input) {
      if (typeof input !== "string"){
        throw new TypeError("parameter should be string")
      };
      return input.toUpperCase();
    },

    createArray (number) {
      const myArray = Array.from(Array(number).keys());
      return myArray;
    }
    
};