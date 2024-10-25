import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><iframe width="100%" height="315" src="https://www.youtube.com/embed/vkFqzMju_5c?si=hTfNAVGK0tnlTxr3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <iframe
        title="Spotify Podcast"
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/episode/6pIm8wuukCUzScar6YKpWo?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      <iframe
        title="Apple Podcast"
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameBorder="0"
        height="175"
        style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.podcasts.apple.com/us/podcast/great-or-bait/id1729091213?i=1000674033400"
        loading="lazy"
      />
    </>
  )
}

export default App
