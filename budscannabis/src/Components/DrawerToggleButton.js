import React from 'react';
import ReorderIcon from "@material-ui/icons/Reorder";

const drawerToggleButton = props => (
    <button >
    {" "}
    <ReorderIcon onClick={props.drawerClickHandler}/>
</button>
);

export default drawerToggleButton