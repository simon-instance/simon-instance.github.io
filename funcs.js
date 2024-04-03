// customFunctions.js
module.exports = {
    flex: function(value) {
      const [flexGrow, flexShrink, flexBasis] = value.split(' ');
      return {
        "flex-grow": flexGrow,
        "flex-shrink": flexShrink,
        "flex-basis": flexBasis
      };
    }
  }