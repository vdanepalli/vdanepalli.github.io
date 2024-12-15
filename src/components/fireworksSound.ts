export function playFireworksSound() {
    const audio = new Audio('/sounds/fireworks.mp3'); // Ensure this file exists in the public folder
    audio.volume = 0.5; // Adjust volume as needed
    audio.play();
}
