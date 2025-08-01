<script lang="ts">
    import { page } from "$app/state";
    import logo from "$lib/images/WRANDTEL.png";
</script>

<header class="cloud-header">
    <div class="domain-nav">
        <div class="domain-container">
            <a href="https://c-u-l8er.link">IDEATION</a> (<a href="https://watermark.wrand.cc">DESIGN</a>
            &#x2022; <a
                href="https://wrand.cc">R&D</a
            >
            &#x2022; <a href="https://opensentience.org">PRODUCTION</a>)
            <div style="float: right;">
                &#123; <a href="https://istrav.com">WEB SOLUTIONS</a> &#x2022;
                <a href="https://subvind.com">COMMUNITY SOLUTIONS</a> &#125;
                <a
                    href="https://ticktickclock.com"
                    style="font-family: Helvetica, sans-serif; line-height: 0.85em; font-size: 0.85em !important;"
                    >!!</a
                >
            </div>
        </div>
    </div>
    <nav>
        <div class="nav-left">
            <img src={logo} alt="WRANDTEL" class="nav-logo" />
            <a href="/" class="nav-home"> WRANDTEL</a>
        </div>
        <div class="nav-links">
            <a href="/portfolio">Portfolio</a>
            <a href="/history">History</a>
            <a href="/values">Values</a>
            <a href="/laboratory">Lab #33</a>
        </div>
    </nav>
    <div class="cloud-bottom">
        <div class="cloud-layer-1"></div>
        <div class="cloud-layer-2"></div>
    </div>
</header>

<style>
    .domain-nav {
        background: #000;
        color: #ccc;
        margin-bottom: 1em;
    }

    .domain-container {
        width: 1000px;
        margin: 0 auto;
        padding: 0.25em;
    }

    .domain-nav a {
        color: #ccc !important;
        font-size: 1em !important;
        font-weight: normal !important;
        margin: 0 !important;
    }

    .domain-nav a:hover {
        color: #fff !important;
        text-decoration: underline;
    }

    .cloud-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: white;
        padding: 0 0 1em;
        z-index: 1000;
    }

    .cloud-header nav {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
    }

    .nav-left {
        display: flex;
        align-items: center;
    }

    .nav-logo {
        height: 40px;
        margin-right: 0px;
    }

    .nav-links {
        display: flex;
        gap: 40px;
        margin-left: auto;
    }

    .nav-links a {
        color: #2c3e50;
        text-decoration: none;
        font-size: 1.2em;
        font-weight: bold;
        transition: color 0.3s;
    }

    .nav-links a:hover {
        color: #8b4513;
    }

    .cloud-header a {
        color: #2c3e50;
        text-decoration: none;
        margin: 0 10px;
        font-size: 1.2em;
        font-weight: bold;
        transition: color 0.3s;
    }

    .cloud-header a:hover {
        color: #8b4513;
    }

    .nav-home {
        margin: 0 5px !important;
        font-size: 2em !important;
        margin-top: 8px !important;
        color: #000 !important;
    }

    .nav-home:hover {
        color: #8b4513 !important;
    }

    .cloud-bottom {
        position: absolute;
        bottom: -40px;
        left: 0;
        width: 100%;
        height: 40px;
        background: transparent;
        pointer-events: none;
        overflow: hidden;
    }

    .cloud-layer-1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20px;
        background: transparent;
    }

    .cloud-layer-2 {
        position: absolute;
        top: 0px;
        left: -20%; /* Changed from -350px for better responsive behavior */
        width: 140%; /* Increased width for better coverage */
        height: 20px;
        background: transparent;
    }

    .cloud-layer-1::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20px;
        background: white;
        clip-path: path(
            "M0,20 C120,20 160,0 240,0 C320,0 360,20 480,20 C600,20 640,0 720,0 C800,0 840,20 960,20 C1080,20 1120,0 1200,0 C1280,0 1320,20 1440,20 C1560,20 1600,0 1680,0 C1760,0 1800,20 1920,20 V0 H0 Z"
        );
    }

    .cloud-layer-2::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20px;
        background: rgba(255, 255, 255, 0.5);
        clip-path: path(
            "M0,20 C100,20 140,0 220,0 C300,0 340,20 460,20 C580,20 620,0 700,0 C780,0 820,20 940,20 C1060,20 1100,0 1180,0 C1260,0 1300,20 1420,20 C1540,20 1580,0 1660,0 C1740,0 1780,20 1900,20 V0 H0 Z"
        );
    }

    /* Responsive adjustments for wider screens */
    @media (min-width: 1200px) {
        .domain-container {
            width: 1200px; /* Expand domain container for wider screens */
        }

        .cloud-header nav {
            max-width: 1200px;
        }

        .cloud-layer-1::after {
            clip-path: path(
                "M0,20 C150,20 200,0 300,0 C400,0 450,20 600,20 C750,20 800,0 900,0 C1000,0 1050,20 1200,20 C1350,20 1400,0 1500,0 C1600,0 1650,20 1800,20 C1950,20 2000,0 2100,0 C2200,0 2250,20 2400,20 C2550,20 2600,0 2700,0 C2800,0 2850,20 3000,20 V0 H0 Z"
            );
        }

        .cloud-layer-2::after {
            clip-path: path(
                "M0,20 C130,20 180,0 280,0 C380,0 430,20 580,20 C730,20 780,0 880,0 C980,0 1030,20 1180,20 C1330,20 1380,0 1480,0 C1580,0 1630,20 1780,20 C1930,20 1980,0 2080,0 C2180,0 2230,20 2380,20 C2530,20 2580,0 2680,0 C2780,0 2830,20 2980,20 V0 H0 Z"
            );
        }
    }

    @media (min-width: 1600px) {
        .domain-container {
            width: 1400px; /* Further expand for ultra-wide screens */
        }

        .cloud-header nav {
            max-width: 1400px;
        }

        .cloud-layer-2 {
            left: -10%; /* Adjust for ultra-wide screens */
            width: 120%;
        }
    }

    /* Handle mobile responsiveness */
    @media (max-width: 768px) {
        .domain-container {
            width: 100%;
            padding: 0.25em 10px;
        }

        .cloud-header nav {
            max-width: 100%;
            padding: 0 10px;
        }

        .nav-links {
            gap: 20px;
        }

        .nav-links a {
            font-size: 1em;
        }

        .nav-home {
            font-size: 1.5em !important;
        }
    }
</style>