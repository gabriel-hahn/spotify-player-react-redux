# Spotify Player

A Spotify player clone using JSON Server to simulate Spotify API - ReactJS and React Native.
This project allow you to play some songs, pause and change song's progress and volume.

- ReactJS
- React Native
- Redux / Saga
- JSON Server

## Dependencies

You must have a package manager installed and [json-server](https://www.npmjs.com/package/json-server). JSON Server will simulate a API response, allow us to get songs details.

## Getting Started

To install all dependencies (Web or Mobile): 

```sh
$ yarn
```

To run JSON Server, you could do some configurations or execute the follow command if you installed json-server as global:

```sh
$ json-server server.json -p 3001 -w -d 500
```

The follow command will opens the project in your favorite browse. I recommend you to use Google Chrome:

```sh
$ yarn start
```

## Mobile

To run mobile application, inside 'mobile' folder execute the follow command. Use 'run-ios' or 'run-android':

```sh
$ react-native run-ios
```

## Tests

Inside each project, run the follow command to execute all tests:

```sh
$ yarn test
```

To run tests with coverage:

```sh
$ yarn test --coverage
```

## Layout Demo

### Web
<p align="center">
    <img src="https://media.giphy.com/media/LMoJcA5vhUMXamMKMq/giphy.gif">
</p>

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gabriel-hahn/spotify-player-react-redux/tags).

## Authors

[Gabriel Hahn Schaeffer](https://github.com/gabriel-hahn/) | [Rocketseat Course](https://github.com/Rocketseat)

See also the list of [contributors](https://github.com/gabriel-hahn/spotify-player-react-redux/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
