import React from 'react';
import {Avatar, Box, Container, Grid, List, ListItem, ListItemText, Paper, Typography} from "@material-ui/core";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {LocalOffer, Star, StarHalf} from "@mui/icons-material";

const STRAINS = [
    {
        bread: 'Hybrid',
        name: 'Wedding Cake',
        description: 'aka Triangle Mints #23',
        rating: 4.6,
        ratingCount: 1746,
        organicDetails: {
            THC: 24,
            CBG: 1,
        },
        tags: ['Relaxed', 'Limonene']
    },
    {
        bread: 'Hybrid',
        name: 'GC4',
        description: 'aka Gorilla Glue, Original Glue',
        rating: 4.6,
        ratingCount: 4778,
        organicDetails: {
            THC: 19,
            CBD: 0,
        },
        tags: ['Relaxed', 'Limonene']
    },
    {
        bread: 'Hybrid',
        name: 'Wedding Cake',
        description: 'aka Triangle Mints #23',
        rating: 4.6,
        ratingCount: 1746,
        organicDetails: {
            THC: 24,
            CBG: 1,
        },
        tags: ['Relaxed', 'Limonene']
    }
]

function App() {
    const renderStar = (rating: number): JSX.Element => {
        const full = Math.floor(rating)
        let stars: JSX.Element[] = new Array(full).fill(<Star fontSize={"small"}/>)
        const hasHalf = full === rating
        !hasHalf && stars.push(<StarHalf fontSize={"small"}/>)
        return (
            <Box display={"flex"}>
                {stars}
            </Box>
        )
    }
    return (
        <Container maxWidth={"lg"} className="App">
            <Grid container direction={"column"}>
                <Grid item>
                    <Typography variant="h3" gutterBottom>Popular weed strains near you</Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={2} justifyContent="space-between" style={{gap: '1rem'}}>
                        {STRAINS.map(({bread, name, description, rating, ratingCount, organicDetails, tags}, i) => (
                            <Box style={{flexGrow: 1}} key={i}>
                                <Paper elevation={1} style={{padding: '1.5rem'}}>
                                    <Grid container spacing={2} style={{gap: '1rem'}}>
                                        <Grid item className={"imgContainer"}>
                                            <Avatar
                                                src="https://via.placeholder.com/150\n\nC/O https://placeholder.com/"
                                                variant="square"
                                                alt={name}/>
                                        </Grid>
                                        <Box style={{flexGrow: 1, gap: '1.2rem'}}>
                                            <Box display={"flex"}
                                                 justifyContent={"space-between"} style={{marginBottom: '.8rem'}}>
                                                <Typography variant={"subtitle2"} style={{
                                                    backgroundColor: '#e8e6dc',
                                                    borderRadius: '.2rem',
                                                    padding: '0 .4rem'
                                                }}>{bread}</Typography>
                                                <FavoriteBorderIcon/>
                                            </Box>
                                            <Box>
                                                <Typography variant={'h5'}
                                                >{name}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography>{description}</Typography>
                                            </Box>
                                            <Box>
                                                <Box display={"flex"} alignItems={"center"}>
                                                    <Typography variant={"subtitle2"}
                                                                style={{paddingTop: '.15rem'}}>{rating}</Typography>
                                                    <Typography>
                                                        {renderStar(rating)}
                                                    </Typography>
                                                    <Typography>({ratingCount})</Typography>
                                                </Box>
                                            </Box>
                                            <Box display={"flex"} style={{gap: '1rem'}}>
                                                {Object.entries(organicDetails).map(([key, item]) => <Typography
                                                    variant={"subtitle2"}>{`${key} ${item > 0 ? `${item}%` : '-'}`}</Typography>)}
                                            </Box>
                                            <List disablePadding>
                                                <Box display={"flex"}>
                                                    {tags.map(tag => <ListItem><LocalOffer
                                                        fontSize={"small"}/><ListItemText>{tag}</ListItemText></ListItem>)}
                                                </Box>
                                            </List>
                                        </Box>
                                    </Grid>
                                </Paper>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
                {/*<NavbarMobile/>*/}
            </Grid>
        </Container>
    );
}

export default App;
