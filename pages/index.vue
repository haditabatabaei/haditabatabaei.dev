<template>
    <Box class="title">
        <Typography is="h1" type="title">Hadi Tabatabaei</Typography>
        <Typography type="description">
            Senior FrontEnd Engineer with 5+ years of experience in core web development technologies with computer science
            background. Interested in developing scalable, maintainable, responsive, and cross-platform web applications using
            javascript tools. Core web development technologies in both front-end and back-end. UX best practices for highly
            effective user experiences. I am enthusiastic to learn and looking forward to challenges and have respect for diversity.
            Team player and data-oriented with problem-solving mindset to tackle challenging soft skills and process problems.
        </Typography>
        <div class="title__links">
            <a class="title__link" href="/HadiTabatabaei-CVResume.pdf">CV/Resume</a>
            <Divider color="orange" />
            <a class="title__link" href="https://www.linkedin.com/in/haditabatabaei/" target="_blank">LinkedIn</a>
            <Divider color="orange" />
            <a class="title__link" href="https://github.com/haditabatabaei/" target="_blank">Github</a>
            <Divider color="orange" />
            <a class="title__link" href="mailto:hadi.tabatabaei.aut@gmail.com">hadi.tabatabaei.aut@gmail.com</a>
            <Divider color="orange" />
            <NuxtLink to="/experiences" class="title__link">Experiences</NuxtLink>
            <Divider color="orange" />
            <NuxtLink to="/skills" class="title__link">Skills in Details</NuxtLink>
        </div>

        <a class="title__link" href="https://github.com/haditabatabaei/haditabatabaei.dev" target="_blank">
            haditabatabaei.dev's Source Code
        </a>
    </Box>
</template>

<style lang="scss">
.title {    
    &__links {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 12px;
    }

    &__link {
        padding: 8px 16px;
        color: orange;
        font-size: 18px;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
