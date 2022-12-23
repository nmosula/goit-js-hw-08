import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

if (localStorage.getItem('videoplayer-current-time')) {

    const getSeconds = JSON.parse(
            localStorage.getItem('videoplayer-current-time')
    );

    if (getSeconds != 'null') {
        player.setCurrentTime(getSeconds);
    }

}

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}, 1000));
