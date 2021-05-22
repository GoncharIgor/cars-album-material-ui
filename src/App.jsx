import React from 'react';

import {
    AppBar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    CssBaseline,
    Grid,
    Toolbar,
    Typography
} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons'

import useStyles from "./styles";

const App = () => {
    const classes = useStyles();

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            {/*CssBaseline - immediately provides styling to the App*/}
            <CssBaseline/>

            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <div className={classes.container}>
                    {/*Adding inline styles: style={{marginTop: '100px'}}*/}
                    <Container maxWidth="sm">
                        {/*gutterBottom - adds margin to this specific Typography*/}
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone. This is a photo album that contains a list of different cars with their
                            hotos. You are welcome to suggest any new car to the list and it will be added
                        </Typography>

                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    {/*variant="contained" - it will be colored. contained - a style of the button*/}
                                    <Button variant="contained" color="primary">
                                        See My Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    {/*variant="contained" - it will be colored. contained - a style of the button*/}
                                    <Button variant="outlined" color="primary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>

                        {/* Not "{}" brackets returned, but "()" - wraps a returned object in arrow f() */}
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random"
                                               title="Image title"/>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. This section is used to describe the content
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                        ))}

                    </Grid>
                </Container>
            </main>

            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Copyright small text
                </Typography>
            </footer>
        </>
    )
}

export default App;
