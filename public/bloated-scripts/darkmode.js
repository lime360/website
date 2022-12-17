// stolen from a random javascript telegram channel and then i modified it for no reason
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (isDarkMode) {
    console.log("black chocolate");
}
else {
    console.log("white chocolate");
}