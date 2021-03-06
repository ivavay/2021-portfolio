import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="35.000000pt" height="35.000000pt" viewBox="0 0 90.000000 90.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M253 872 c-64 -23 -114 -61 -145 -109 -22 -37 -23 -45 -26 -297 -4
        -301 0 -320 75 -386 67 -58 117 -70 303 -70 183 0 235 12 299 67 77 65 81 82
        81 371 0 275 -4 298 -58 355 -15 16 -49 41 -77 55 -48 25 -58 27 -225 29 -149
        3 -183 1 -227 -15z m462 -213 c15 -67 -14 -141 -124 -318 -14 -24 -31 -2 -31
        41 0 39 -1 40 -18 25 -24 -22 -32 -21 -32 1 -1 15 -2 14 -12 -3 -6 -11 -15
        -22 -19 -25 -5 -3 -22 -53 -39 -110 -38 -127 -55 -160 -80 -160 -35 0 -52 42
        -53 132 -1 46 3 94 7 107 6 18 -6 12 -60 -33 -37 -31 -77 -56 -87 -56 -17 0
        -19 5 -13 48 4 26 10 56 13 67 4 15 -3 12 -31 -14 -55 -53 -53 -30 3 30 27 30
        52 51 56 47 4 -4 0 -39 -9 -79 -9 -39 -15 -73 -13 -76 5 -4 53 33 103 79 l31
        29 -15 57 c-16 62 -6 138 24 180 44 63 97 -36 71 -133 -7 -27 -1 -23 62 40 81
        79 100 79 76 0 -16 -55 -11 -106 9 -82 6 8 19 17 29 20 15 6 17 -1 17 -51 l0
        -57 32 50 c17 28 45 78 61 113 25 53 29 72 24 113 -7 54 7 68 18 18z"/>
        <path d="M332 617 c-22 -26 -34 -112 -22 -156 6 -23 13 -41 15 -41 13 0 47 89
        47 124 1 72 -16 102 -40 73z"/>
        <path d="M442 497 c-34 -34 -62 -67 -62 -72 0 -5 5 -4 12 3 14 14 45 16 50 3
        7 -22 40 21 53 70 8 29 13 54 12 56 -2 1 -31 -26 -65 -60z"/>
        <path d="M406 393 c-4 -4 -17 -8 -29 -8 -14 0 -27 -11 -36 -30 -26 -53 -16
        -225 13 -225 19 0 32 34 93 244 3 13 1 16 -7 11 -7 -4 -15 -2 -19 4 -4 6 -11
        8 -15 4z"/>
        </g>
</svg>
  );
}