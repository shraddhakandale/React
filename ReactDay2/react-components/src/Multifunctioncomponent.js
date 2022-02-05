import React from "react";

const variableExportNum = 76;

function mulitplyNum(){
    return variableExportNum*2;
}

function divideNum(){
    return variableExportNum/2;
}

export default variableExportNum;
export {mulitplyNum,divideNum}; // this way is used when we have multiple exports

// this is wrong because we can have only one default export per module
// export default mulitplyNum;