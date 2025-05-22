import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import '../App.css';

import { Analytics } from "@vercel/analytics/react";
import 'js-anti-adblock/dist/antiAdBlocker.min.ob.js';
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function Dev() {
  return (
    <div>
      <Navigation />
      <div className="ContentBox">
        <h1>Dev Overview Page</h1>;
        <Link to="/dev/zee">Zee</Link>
        <Link to="/dev/dea">Dea</Link>
        <Link to="/dev/alie">Alie</Link>

        <SpeedInsights />
        <Analytics />
      </div>
    </div>
  );
}
