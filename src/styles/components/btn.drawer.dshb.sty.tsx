import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    btn: {
        color: '#fff',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawer: {
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: theme.height.header,
        color: '#fff',
        overflow: 'hidden',
        flexShrink: 0,
        position: 'relative',
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: theme.width.drawer,
    },
    drawerClose: {
        overflowX: 'hidden',
        width: theme.spacing(7),
        [theme.breakpoints.down('xs')]: {
            height: theme.height.header,
            transition: 'transform 500ms ease',
        },
    },
}));

export default useStyles;