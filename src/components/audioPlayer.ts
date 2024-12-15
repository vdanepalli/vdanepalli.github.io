export function playAudio(audioPath: string) {
    const audio = new Audio(audioPath);
    audio.volume = 0.8; // Adjust volume (0.0 to 1.0)
    audio.play().catch((error) => {
        console.error("Error playing audio:", error);
    });
}
