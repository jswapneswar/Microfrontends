import React from 'react'

export default function Music() {
  return (
    <div><div className="container">
    <div className="column add-bottom">
      <div id="mainwrap">
        <div id="nowPlay">
          <span id="npAction">Paused...</span>
          <span id="npTitle" />
        </div>
        <div id="audiowrap">
          <div id="audio0">
            <audio id="audio1" preload="" controls="">
              Your browser does not support HTML5 Audio! 😢
            </audio>
          </div>
          <div id="tracks">
            <a id="btnPrev">←</a>
            <a id="btnNext">→</a>
          </div>
        </div>
        <div id="plwrap">
          <ul id="plList" />
        </div>
      </div>
    </div>
    <div className="column add-bottom center">
      <p>
        Music by <a href="http://www.mythium.net/">Mythium</a>
      </p>
      <p>
        Download:{" "}
        <a href="https://archive.org/download/mythium/mythium_vbr_mp3.zip">zip</a>{" "}
        /{" "}
        <a href="https://archive.org/download/mythium/mythium_archive.torrent">
          torrent
        </a>
      </p>
    </div>
  </div>
  </div>
  )
}
