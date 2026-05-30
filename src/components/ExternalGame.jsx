import React from 'react';

function ExternalGame() {
  // --- Replace this URL with the game you want to host ---
  // You can find great HTML5 games on sites like crazygames.com or itch.io
  // Look for the "Embed" option to get the correct URL.
  // This is a placeholder URL for a classic web game (2048).
  const gameUrl = "https://play2048.co/"; 

  return (
    <section className="external-game-section">
      <div className="external-game-wrapper">
        <div className="game-hud-header">
          <span className="hud-text">Uplink Established: Initializing Simulation</span>
          <div className="hud-status"></div>
        </div>
        
        {/* The iframe is the window to the external game */}
        <iframe 
          src={gameUrl} 
          title="Embedded Game"
          className="game-iframe"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default ExternalGame;