<script lang="ts">
    import Divider from "../Divider.svelte";
</script>

<svelte:head>
    <title>Laboratory (Innovation x Fabrication x Invention)</title>
    <meta
        name="description"
        content="Welcome to our core. Where groundbreaking ideas are meticulously crafted, rigorously tested, and transformed into impactful solutions."
    />
</svelte:head>

<div class="laboratory-container">
    <section class="hero">
        <h2>(Idea Factory)</h2>
        <h1>LABORATORY #33</h1>
        <p class="lead">
            Welcome to our core. Where groundbreaking ideas are meticulously
            crafted, rigorously tested, and transformed into impactful
            solutions.
        </p>

        <a href="https://33.wrand.cc" target="_blank" class="get-started-btn">
            Innovation, Fabrication, and Invention
        </a>
        <p class="tagline">
            "The map is not the territory, <br />but the pattern is the path."
            ~ArtInt
        </p>
    </section>
    <br />
    <br />
    <Divider />
    <br />
    <br />
    <section class="process">
        <h2>Our Innovation Process</h2>
        <p>
            At WRANDTEL, we drive creative problem-solving through a dynamic
            approach:
        </p>
        <ol>
            <li>
                <b>Discovery:</b> We identify emerging challenges and opportunities
                through market research and client collaboration.
            </li>
            <li>
                <b>Ideation:</b> We generate and evaluate multiple solution concepts
                through structured brainstorming and analysis.
            </li>
            <li>
                <b>Invention:</b> We manifest a new minimal viable product and rapidly
                itterate on it.
            </li>
            <li>
                <b>Validation:</b> We gather data and feedback to verify our approach
                meets real-world needs.
            </li>
            <li>
                <b>Refinement:</b> We iterate based on insights to optimize the solution
                concept.
            </li>
        </ol>
    </section>
    <br />
    <section class="process">
        <h2>Our Fabrication Process</h2>
        <p>
            Our fabrication process at WRANDTEL is about manufacturing validated
            prototypes into production-ready solutions that scale:
        </p>
        <ol>
            <li>
                <b>Design Optimization:</b> We refine the prototype design for manufacturability
                and scalability.
            </li>
            <li>
                <b>Component Engineering:</b> We develop and test individual system
                components to ensure reliability.
            </li>
            <li>
                <b>Integration Testing:</b> We verify all components work together
                seamlessly.
            </li>
            <li>
                <b>Quality Assurance:</b> We implement rigorous testing protocols
                to ensure consistent performance.
            </li>
            <li>
                <b>Production Planning:</b> We establish efficient processes for
                consistent, scalable manufacturing.
            </li>
        </ol>
    </section>
    <br />
    <section class="process">
        <h2>Our Invention Process</h2>
        <p>
            Our invention process at WRANDTEL is where visionary concepts are
            brought to life through a rigorous and creative methodology:
        </p>
        <ol>
            <li>
                <b>Research:</b> We explore unexplored territories and identify technological
                gaps through deep research.
            </li>
            <li>
                <b>Conceptualization:</b> We develop novel approaches and theoretical
                frameworks for solving complex problems.
            </li>
            <li>
                <b>Technical Design:</b> We create detailed technical specifications
                and architectural blueprints.
            </li>
            <li>
                <b>Prototype Development:</b> We build working prototypes to demonstrate
                feasibility.
            </li>
            <li>
                <b>Fabrication Integration:</b> We collaborate with our fabrication
                team to transition from prototype to production.
            </li>
            <li>
                <b>Patent Research:</b> We evaluate intellectual property landscape
                and protection opportunities.
            </li>
            <li>
                <b>Market Analysis:</b> We assess commercial viability and market
                positioning.
            </li>
        </ol>
    </section>
    <br />
    <section class="process">
        <h2>Our Methodologies</h2>
        <p>
            WRANDTEL employs cutting-edge methodologies that bridge theoretical
            frameworks with practical applications:
        </p>
        <ol>
            <li>
                <b>Design Thinking:</b> We embrace human-centered design principles
                to ensure our solutions address real user needs and pain points while
                maintaining technical excellence.
            </li>
            <li>
                <b>Agile Development:</b> Our iterative approach allows for rapid
                prototyping and continuous improvement through sprint-based development
                cycles and regular stakeholder feedback.
            </li>
            <li>
                <b>Systems Engineering:</b> We utilize comprehensive systems thinking
                to understand complex interactions between components and ensure
                robust, scalable solutions.
            </li>
            <li>
                <b>Data-Driven Decision Making:</b> We leverage analytics and empirical
                evidence to validate assumptions and guide strategic choices throughout
                the development process.
            </li>
            <li>
                <b>Cross-Disciplinary Integration:</b> We combine expertise from
                multiple fields to create innovative solutions that transcend traditional
                disciplinary boundaries.
            </li>
            <li>
                <b>Sustainable Development:</b> We incorporate environmental and
                social considerations into our design process to ensure long-term
                viability and positive impact.
            </li>
        </ol>
    </section>
</div>

<style>
    .laboratory-container {
        max-width: 1200px; /* Wider container for larger screens */
        margin: 3em auto;
        padding: 2em;
        text-align: center;
        background-color: transparent;
        color: #aaa;
        box-shadow: none;
    }

    .hero {
        margin-bottom: 2em;
        max-width: 600px;
        margin: 0 auto;
    }

    .hero h1 {
        color: white;
        font-size: 2.5em;
        margin: 0;
    }

    .hero .lead {
        font-size: 1.2em;
        line-height: 1.6;
        margin-bottom: 1em;
    }

    .hero .tagline {
        font-style: italic;
        color: #ccc;
    }

    .process {
        max-width: 600px;
        margin: 0 auto;
        text-align: left;
    }

    .process h2 {
        /* color: white; */
        margin-bottom: 1em;
        text-align: center;
    }

    .process ol {
        text-align: left;
        margin: 0 auto;
        max-width: 600px;
    }

    .process li {
        margin-bottom: 0.5em;
    }
</style>
