document.getElementById('start-test').addEventListener('click', function() {
    // Show the loader and hide the results initially
    document.getElementById('loader').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    
    // Simulate speed test for 30 seconds
    simulateSpeedTest(30);
});

function simulateSpeedTest(durationInSeconds) {
    const startTime = Date.now();
    let topSpeed = 0;
    
    const interval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        
        if (elapsed >= durationInSeconds) {
            clearInterval(interval);
            // Hide the loader and show the results
            document.getElementById('loader').style.display = 'none';
            document.getElementById('results').style.display = 'block';
            document.getElementById('top-speed').innerText = `Top Speed: ${topSpeed.toFixed(2)} Mbps`;
            return;
        }
        
        // Simulate observing speed (replace with actual speed test logic)
        const currentSpeed = getMockSpeed();
        topSpeed = Math.max(topSpeed, currentSpeed);
    }, 1000); // Check speed every second
}

function getMockSpeed() {
    // Simulate speed test result in Mbps (replace with actual logic)
    return 5 + Math.random() * 20; // Example range: 5 to 25 Mbps
}
