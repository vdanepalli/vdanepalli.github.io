import { launchFireworks } from './fireworks';
import { playFireworksSound } from './fireworksSound';

export function launchFireworksWithSound() {
    playFireworksSound();
    launchFireworks();
}
