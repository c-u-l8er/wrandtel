<script lang="ts">
    import history from "$lib/images/history.png";
</script>

<svelte:head>
    <title>Our History</title>
    <meta
        name="description"
        content="We are the innovative combination of domain experience, industry
    excellence, technical acumen, and proven excellence; the simple &
    sophisticated combination of people, process, and technology."
    />
</svelte:head>

<div class="history-container">
    <div class="text-column">
        <h1>Our History</h1>
        <p>
            We are the innovative combination of domain experience, industry
            excellence, technical acumen, and proven excellence; the simple &
            sophisticated combination of people, process, and technology.
        </p>
        <p>
            Founded in 2025 from the purchased assets of isTrav & subvind, we
            provide open source integrated solutions that are founded in proven
            methodologies and technologies which drive true innovation and
            superior business outcomes.
        </p>
        <p>
            <b>Decades of History:</b>
        </p>
        <p>
            <b
                ><a href="https://halotracks.org" target="_blank">c u l8er</a> (2007-2012)</b
            ><br />
            Map Maker Architecture / Engineering<br />
            Community Architecture / Engineering<br />
            Video Game Transformation
        </p>
        <p>
            <b>dark ages (2013-2020)</b><br />
            Mobile Application Architecture / Engineering<br />
            Frontend Application Architecture / Engineering<br />
            Backend Application Architecture / Engineering<br />
            Digital R&D
        </p>
        <p>
            <b
                ><a href="https://istrav.com" target="_blank">isTrav</a> (2020-2023)</b
            ><br />
            Project Architecture / Engineering<br />
            Cloud Architecture / Engineering<br />
            Data Architecture / Engineering<br />
            Web Solutions
        </p>
        <p>
            <b
                ><a href="https://subvind.com" target="_blank">subvind</a> (2023
                - 2025)</b
            ><br />
            Storefront Architecture / Engineering<br />
            Video Platform Architecture / Engineering<br />
            Message Board Architecture / Engineering<br />
            Community Solutions
        </p>
        <p>
            <b
                ><a href="https://wrand.cc" target="_blank">WRANDTEL</a> (2025 -
                current)</b
            ><br />
            Innovation Architecture / Engineering<br />
            Fabrication Architecture / Engineering<br />
            Invention Architecture / Engineering<br />
            Integrated Solutions Laboratory
        </p>
        <p class="tagline">
            "The map is not the territory, <br />but the pattern is the path."
            ~ArtInt
        </p>
    </div>
    <div class="image-column">
        <img src={history} alt="History Image" />
    </div>
</div>

<style>
    .history-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        max-width: 1000px;
        margin: 3em auto;
        padding: 1em;
        background-color: transparent;
        color: #aaa;
        box-shadow: none;
    }

    .text-column {
        text-align: left;
    }

    .text-column h1 {
        color: white;
        margin-bottom: 1em;
    }

    .text-column p {
        line-height: 1.6;
        margin-bottom: 1em;
    }

    .image-column {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image-column img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .tagline {
        font-style: italic;
        color: #ccc;
    }

    @media (max-width: 768px) {
        .history-container {
            grid-template-columns: 1fr;
        }

        .image-column {
            order: -1; /* Moves the image above the text on smaller screens */
        }
    }
</style>
