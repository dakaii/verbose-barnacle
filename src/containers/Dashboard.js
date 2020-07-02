import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    mainContent: {
        padding: theme.spacing(10),
    },
    mainGrid: {
        margin: theme.spacing(0, 2),
    },
}));

const featuredPosts = [
    {
        title: 'Organization Info',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        url: '#/organization-info',
    },
    {
        title: 'Product Info',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        url: '#/product-info',
    },
];

export const Dashboard = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Navbar title="Legendary Tacos" />
                <main className={classes.mainContent}>
                    <Typography variant="h4" component="h4">
                        {t('account-info')}
                    </Typography>
                    <Grid container spacing={1} className={classes.mainGrid}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
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
