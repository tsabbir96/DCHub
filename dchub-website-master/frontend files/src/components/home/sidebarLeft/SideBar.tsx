import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from 'react';
import SidebarDown from "./SidebarDown";
import SidebarUp from './SidebarUp';



const useStyles = makeStyles((theme: Theme) =>createStyles({
    root: {
        top: '80px',
        position: 'sticky',

    },

}));


interface propsType {
className?: string
}

const Sidebar: React.FC<propsType> = (props) => {

    const classes = useStyles();



    return (
        <div className={props.className}>
            <SidebarUp/>
            <SidebarDown/>

        </div>
    )
}

export default Sidebar
