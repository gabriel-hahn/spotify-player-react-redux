import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
    <Container>
        <Title>Home</Title>

        <List>
            <Playlist to="/playlists/1">
                <img
                    src="https://pt.wikipedia.org/wiki/Concrete_and_Gold#/media/File:Foo_Fighters_-_Concrete_and_Gold_-_2017.jpg"
                    alt="Playlist"
                />
                <strong>Rock dos bons</strong>
                <p>
                    Relaxe enquanto você programa ouvindo apenas as melhores do
                    rock mundial!
                </p>
            </Playlist>
        </List>
    </Container>
);

export default Browse;
