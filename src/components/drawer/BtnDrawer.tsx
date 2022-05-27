import clsx from 'clsx';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem, ListItemIcon, ListItemText, Link, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateDrawer } from '@/contexts/reducers/dashboard/dashboard.slice.reducer';
import { RootState } from '@/contexts/context.redux';
import useStyles from '@/styles/components/btn.drawer.dshb.sty';

const BtnDrawer = () => {
    const classes = useStyles();
    const { drawer } = useSelector((state: RootState) => state.dashboard);
    const dispatch = useDispatch();
    return (
        <List
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: drawer,
                [classes.drawerClose]: !drawer,
            })}
        >
            <Link
                onClick={() => {
                    dispatch(UpdateDrawer());
                }}
                key={'menu'}
            >
                <ListItem button>
                    <ListItemIcon className={classes.btn}>
                        <MenuIcon color="inherit" />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography className={classes.btn} variant="h6" noWrap>
                                Menu
                            </Typography>
                        }
                    />
                </ListItem>
            </Link>
        </List>
    );
};

export default BtnDrawer;
