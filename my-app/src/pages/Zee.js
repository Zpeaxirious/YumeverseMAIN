import Navigation from '../components/Navigation';
import '../App.css';

import { Analytics } from "@vercel/analytics/react";
import 'js-anti-adblock/dist/antiAdBlocker.min.ob.js';
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function Zee() {
  return (
    <div>
      <Navigation />
      <div className="ContentBox">
        <h1>Zee's Dev Page</h1>
        <p>This is content specifically about Zee.</p>

        <SpeedInsights />
        <Analytics />
      </div>
    </div>
  );
}
