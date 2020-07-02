import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { default as React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { getOrganizationRequest } from '../actions/OrganizationAction';

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(3),
    },
    mainGrid: {
        margin: theme.spacing(0, 12),
    },
}));

export const OrganizationInfo = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrganizationRequest());
    }, [dispatch]);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Navbar className={classes.title} title="Legendary Tacos" />
                <main>
                    <div className={classes.title}>
                        <Typography variant="h4" component="h4">
                            Account Settings
                        </Typography>
                    </div>
                    <Grid container spacing={1} className={classes.mainGrid}>
                        {/* {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))} */}
                    </Grid>
                </main>
            </Container>
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </React.Fragment>
    );
};
