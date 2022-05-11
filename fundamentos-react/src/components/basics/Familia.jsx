import React from "react";
import FamiliaMembro from "./FamiliaMembro"

export default props => {

    return (
        <div>
            <FamiliaMembro nome="Bruno" sobrenome="Silva" />
           <FamiliaMembro nome="Joao" {...props} />
           <FamiliaMembro nome="Ana" {...props} />
        </div>
           )
}