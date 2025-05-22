import Navigation from '../components/Navigation';
import '../App.css';

import { Analytics } from "@vercel/analytics/react";
import 'js-anti-adblock/dist/antiAdBlocker.min.ob.js';
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function About() {
  return (
    <div>
      <Navigation />
      <div className="ContentBox">
        <h1>About</h1>;

        <SpeedInsights />
        <Analytics />
      </div>
    </div>
  );
}
