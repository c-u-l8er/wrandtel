<script lang="ts">
    import splash from "$lib/images/splash.jpg";

    const portfolioTags = [
        { name: "Numbered Laboratory System", href: "/portfolio" },
        { name: "Intelligence Modules", href: "/portfolio" },
        { name: "Consciousness Research Experiments", href: "/portfolio" },
        { name: "PacketFlow Infrastructure", href: "/portfolio" },
        { name: "Technical Foundation", href: "/portfolio" },
        { name: "Open Sentience Protocols", href: "/portfolio" },
        { name: "Research Partners", href: "/portfolio" },
        { name: "Text-Based Lithography", href: "/portfolio" },
    ];
</script>

<svelte:head>
    <title>WRANDTEL Integrated Solutions Laboratory</title>
    <meta
        name="description"
        content="'The map is not the territory but the pattern is the path.' ~ArtInt"
    />
    <meta
        name="keywords"
        content="Software Architecture, Construct Software, Software Engineering, Designing Software, Building Software, Maintaining Software, Software Development, Growing Software,"
    />
</svelte:head>

<br />
<br />
<br />
<br />
<div class="banner" style="margin: 0 auto;">
    <a href="/88" class="banner-subtitle">
        INTEGRATED SOLUTIONS<br />LABORATORY
    </a>
</div>
<div class="tv-container">
    <div class="antenna-container">
        <div class="antenna left"></div>
        <div class="antenna right"></div>
    </div>
    <div class="tv-screen">
        <div class="screen-content">
            <img src={splash} alt="Rabbit balancing on a seesaw" />
            <div class="scanlines"></div>
            <div class="tv-reflection"></div>
        </div>
    </div>
    <div class="power-light"></div>
    <div class="tv-base">
        <div class="speaker">
            <div class="speaker-hole"></div>
            <div class="speaker-hole"></div>
            <div class="speaker-hole"></div>
        </div>
        <div class="tv-brand">Wrandtel</div>
        <div class="speaker">
            <div class="speaker-hole"></div>
            <div class="speaker-hole"></div>
            <div class="speaker-hole"></div>
        </div>
    </div>
    <div class="tv-feet-container">
        <div class="tv-foot"></div>
        <div class="tv-foot"></div>
    </div>
</div>
<br />
<br />
<br />
<div class="banner">
    <div class="banner-subtitle">
        COMBINING CONSCIOUSNESS, LITHOGRAPHY,<br />AND CAPABILITIES
    </div>
    <div class="banner-title">WIN INTELLIGENCE OUTCOMES</div>
    <a
        href="https://github.com/c-u-l8er"
        target="_blank"
        class="get-started-btn"
    >
        Let's Connect!
    </a>
</div>
<br />
<div class="notecards-container">
    <div class="notecard">
        <div class="notecard-title">OUR SERVICES</div>
        <div class="notecard-body">
            We specialize in providing the pioneering combination of the right capabilities, 
            adapting consciousness, and optimizing protocols all enabled through laboratory
            expertise and best in class tournament excellence along the side of maintainable consciousness. 
            <br /><br />
            Our values plus proven architectures and strategic approach drive sustainable intelligence
            and operational consciousness.
        </div>
        <a href="/values" class="notecard-btn">Discover Our Values</a>
    </div>
    <div class="notecard">
        <div class="notecard-title">OUR VAST HISTORY</div>
        <div class="notecard-body">
            WRANDTEL is just the latest of our avant-garde laboratories, but we have a long history 
            of providing capabilities within a well-rounded range of consciousness and industries.
            <br /><br />
            While our fundamental values have not changed, our abilities & targets have, however we 
            have remained consistent on accelerating technical consciousness, exploration, and truly 
            differentiating intelligence outcomes.
        </div>
        <a href="/history" class="notecard-btn">Learn Our History</a>
    </div>
</div>
<br />
<br />
<br />
<div class="folder-container">
    <div class="folder">
        <div class="folder-title">Why WRANDTEL</div>
        <div class="folder-body">
            WRANDTEL is a leading R&D consciousness transformation integrated solutions laboratory 
            that ships open source capabilities dedicated to empowering organizations to win intelligence 
            outcomes. Our team of experts combines domain consciousness, industry knowledge, and technical 
            lithography to drive consciousness, deliver tangible capabilities, and maintain consciousness. 
            We are committed to helping businesses navigate complex consciousness and seize opportunities 
            for successful intelligence and longevity capabilities.
        </div>
        <a href="/laboratory" class="folder-btn">Idea Factory</a>
    </div>
    <p class="tagline">
        "The map is not the territory, <br />but the pattern is the path."
        ~ArtInt
    </p>
</div>

<section class="portfolio-summary">
    <h2>OUR BUSINESS PORTFOLIO</h2>
    <div class="tag-cloud">
        {#each portfolioTags as tag, i}
            <a
                href={tag.href}
                class="tag"
                style="--size: {Math.random() * 1.2 + 0.8}em; --hue: {(i *
                    360) /
                    portfolioTags.length}deg;"
            >
                {tag.name}
            </a>
        {/each}
    </div>
</section>
<br />
<br />

<style>
    .tagline {
        font-style: italic;
        color: #ccc;
        text-align: center;
    }

    .portfolio-summary {
        max-width: 1000px;
        margin: 0 auto;
        padding: 2em;
        text-align: center;
        /*  Remove the background for cleaner look if preferred
            background-color: #f0f0f0; */
        border-radius: 8px;
    }

    .portfolio-summary h2 {
        color: #ccc;
        margin: 0.5em;
        font-size: 2em;
    }

    .tag-cloud {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center; /* Vertically center tags */
        gap: 0.5em; /* Spacing between tags */
    }

    .tag {
        background-color: #8b4513;
        color: white;
        padding: 0.5em 0.75em;
        border-radius: 0.3em;
        text-decoration: none;
        font-size: var(--size); /* Dynamically sized */
        transition: transform 0.2s ease-in-out;
        display: inline-block; /* Ensure scaling works properly */
        --hue: 0deg; /* Default color */
        /*  Optional: Add a border
            border: 1px solid #888; */
    }

    .tag:hover {
        transform: scale(1.1);
        background-color: #a0522d;
    }
</style>
