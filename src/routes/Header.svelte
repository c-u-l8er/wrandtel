<script lang="ts">
    import { page } from "$app/state";
    import logo from "$lib/images/WRANDTEL.png";
</script>

<header class="cloud-header">
    <div class="domain-nav">
        <div class="domain-container">
            <a href="https://c-u-l8er.link">IDEATION</a> (<a
                href="https://wrand.cc">R&D</a
            >
            &#x2022; <a href="https://webtracks.click">TRACK</a>
            &#x2022; <a href="https://webhost.systems">HOST</a> &#x2022;
            <a href="https://bendscript.com">SCRIPT</a>)
            <div style="float: right;">
                &#123; <a href="https://istrav.com">WEB SOLUTIONS</a> &#x2022;
                <a href="https://subvind.com">COMMUNITY SOLUTIONS</a> &#125;
                <a
                    href="https://ticktickclock.com"
                    style="font-family: Helvetica, sans-serif; line-height: 0.85em;"
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

    /* Add these new styles */
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
        max-width: 1000px; /* Increased to accommodate logo */
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
    }

    /* Add a new container for the left side elements */
    .nav-left {
        display: flex;
        align-items: center;
    }

    .nav-logo {
        height: 40px; /* Adjust this value to match your logo's desired height */
        margin-right: 0px;
    }

    .nav-links {
        display: flex;
        gap: 40px;
        margin-left: auto; /* This pushes the nav-links to the right */
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
        left: -350px;
        width: calc(100% + 350px);
        height: 20px;
        background: transparent;
    }

    .cloud-layer-1::after {
        content: "";
        position: absolute;
        top: 0; /* Changed from bottom to top */
        left: 0;
        width: 100%;
        height: 20px;
        background: white;
        clip-path: path(
            "M0,20 C150,20 200,0 300,0 C400,0 450,20 600,20 C750,20 800,0 900,0 C1000,0 1050,20 1200,20 C1350,20 1400,0 1500,0 C1600,0 1650,20 1800,20 C1950,20 2000,0 2100,0 C2200,0 2250,20 2400,20 V0 H0 Z"
        );
    }

    .cloud-layer-2::after {
        content: "";
        position: absolute;
        top: 0; /* Changed from bottom to top */
        left: 0;
        width: 100%;
        height: 20px;
        background: rgba(255, 255, 255, 0.5);
        clip-path: path(
            "M0,20 C200,20 250,0 350,0 C450,0 500,20 650,20 C800,20 850,0 950,0 C1050,0 1100,20 1250,20 C1400,20 1450,0 1550,0 C1650,0 1700,20 1850,20 C2000,20 2050,0 2150,0 C2250,0 2300,20 2450,20 V0 H0 Z"
        );
    }
</style>
