<template>
    <Box>
        <BoxHeader title="Skills" />
        <div>
            <Typography class="skills__title" is="h2" type="description">
                Javascript, HTML and CSS
            </Typography>
            <Typography type="text">
                I have a deep understanding of how JavaScript works behind the scenes, and I regularly follow the latest features in new ECMA versions to keep myself updated. I focus on building SEO-friendly and accessible web applications that adhere to best practices, WAI-ARIA rules, and related attributes. I ensure the correct usage of HTML outline and semantic tags like picture and headings.
                <br />
                Furthermore, I possess a deep understanding of CSS concepts and features, including BoxModel, Block Formatting Context (BFC), and various selectors. I utilize Flexbox in almost any scenario.
            </Typography>
            <Typography class="skills__title" is="h2" type="description">
                Typescript
            </Typography>
            <Typography type="text">
                Personally, I'm not a fan of Typescript due to various reasons. In most cases, writing clean Javascript is more readable and maintainable, especially for front-end web applications.
                <br />
                However, I have some limited working experience with Typescript in some of my projects, and my knowledge here is relatively shallow. Although I'm not a fan of Typescript, I respect companies and other developers' opinions, and I can familiarize myself with Typescript projects in no time.            </Typography>
            <Typography class="skills__title" is="h2" type="description">
                React, Next.js
            </Typography>
            <Typography type="text">
                I have participated in developing and maintaining a large-scale React-based web application for the past 2 years, with React, Redux, and relative toolchain. I possess a relatively deep knowledge of what React does behind the scenes and understand its concepts and caveats. During my time at Divar, I reviewed a lot of codes, and I am familiar with common pitfalls and anti-patterns involved in developing and designing components. We also built a lot of abstractions over currently available public APIs as an answer to our needs.
                <br />
Additionally, at Divar, we developed our own SSR implementation with Express.js and did various optimizations. I have experience developing and maintaining a UI component library with React and Storybook as a separate non-monorepo project. I also developed a JavaScript script that checks for the latest releases and updates our root project accordingly.
                <br />
Although I have very limited experience with Next.js in some of my projects as contracts, I can jump into a Next.js project with minimal buffer time.
            </Typography>
            <Typography class="skills__title" is="h2" type="description">
                Vue, Nuxt
            </Typography>
            <Typography type="text">
                Vue was my first choice a couple of years ago when I decided to jump onto a framework. Since then, I have developed many small and personal projects with Vue that are available on my <a class="skills__link" href="https://github.com/haditabatabaei/" target="_blank">Github Profile</a>.
                <br />
                When I was working at Sneeds and later AbroadIn, I developed a web application from scratch using Vue.js version 2 (which was the latest release at the time). I possess a deep understanding of the concepts of reactivity in Vue and the differences with React, lifecycles, and etc.
                <br />
                Additionally, we started building a UI library with Vue at the time, although unfortunately, I left later.
            </Typography>
            <Typography class="skills__title" is="h2" type="description">
                Webpack and relative toolchain
            </Typography>
            <Typography type="text">
                I possess a deep understanding of what Webpack does and can even configure it from scratch (with the help of its documentation, of course). When it comes to Webpack, I know what I am doing. I can add a new plugin or edit and update existing ones. Additionally, I can create separate builds with Webpack for various use cases like staging, development, etc.
                <br />
                I also built a very simple static site generator with page folder routing using Webpack and Handlebars.            </Typography>
            <Typography class="skills__title" is="h2" type="description">
                DevOps, Docker, K8S and ...
            </Typography>
            <Typography type="text">
                I have limited experience working with Kubernetes, specifically working with pods, monitoring, and creating and deploying service and ingress. Additionally, I possess limited academic experience with containers and their internal concepts.
However, I can configure CI/CD pipelines in GitLab and can perform various automations.
            </Typography>
        </div>
    </Box>
</template>

<script setup>
</script>

<style lang="scss">
.skills {
    &__title {
        transition: all .1s ease-in-out;
        box-shadow: inset 0 -10px orange;
        display: inline-block;

        &:hover {
            color: orange;
        }
        
        &:not(:first-of-type) {
            margin-top: 32px;
        }
    }

    &__link {
        text-decoration: underline;

        &:hover {
            color: orange;
        }
    }
}
</style>