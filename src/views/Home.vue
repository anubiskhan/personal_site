<template lang="">
    <div class="homeContainer">
        <div class="aside">
            <div class="asideInner">
                    <div class="nameWithLogo">
                        <h1>Kelly Schroeder</h1>
                        <a target="_blank" href="https://icons8.com/icon/x-DEqbbpNxV8/national-park"><img :src="require('../assets/fav.png')"/></a>
                    </div>
                <p>
                    Hello, I'm a software developer living in the Pacific Northwest. 
                    I like to make new things, fix broken things, and optimize existing things. 
                    Big fan of automation, integrations, scalability, modular design, and maintainability. 
                </p>
                <div> 
                   <a href="mailto: kellyrschroeder@gmail.com" target=”_blank” rel=”noopener”>Email</a>   
                </div>
                <div> 
                   <a href="https://www.linkedin.com/in/kelly-schroeder/" target=”_blank” rel=”noopener”>LinkedIn</a>   
                </div>
                <div> 
                   <a href="https://github.com/anubiskhan" target=”_blank” rel=”noopener”>Github</a>
                </div>
            </div>
        </div>
        <div class="body">
                <div class="colorBlockWrapper">
                    <div class="colorBlockGreen">

                    </div>
                    <div class="colorBlockOrange">

                    </div>
                    <div class="colorBlockGray">

                    </div>
                    <div class="colorBlockBrown">
                        
                    </div>
                </div>
            <div class="bodyInner">
                <p>
                    For the last three and a half years I have been working extensively with Ruby on Rails, PostgreSQL, Vue.js, AWS, CSS, and HTML.
                </p>
                <p>
                    <a href="https://github.com/anubiskhan/personal_site" target=”_blank” rel=”noopener”>This site</a> is built using Vue.js. Hosted in a secure S3 and distributed via Cloudfront.
                    
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home'
}
</script>
<style lang="scss">
    // a {
    //     color: $blue;
    //     text-decoration: none;
    // }
    .homeContainer {
        color: $white;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(16, 1fr);
        height: 100vh;
    }
    .aside {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 14;
        text-align: left;
        .asideInner {
            width: 80%;
            margin: auto;
        }
        .nameWithLogo {
            display: flex;
            justify-content: space-between;
            a {
                margin: auto;
            }
            img {
                height: 64px;
                width: 64px;
                // margin: auto;
            }
        }
    }
    .body {
        grid-column-start: 4;
        grid-column-end: 7;
        grid-row-start: 2;
        grid-row-end: 14;
        text-align: left;
        .bodyInner {
            width: 80%;
            margin: auto;
        }
    }
    .colorBlockWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 5% 10%;
    }
    .colorBlockGreen, .colorBlockBrown, .colorBlockOrange, .colorBlockGray {
        height: .75em;
        width: .75em;
    }
    .colorBlockGreen {
        background: $green;
    }
    .colorBlockBrown {
        background: $brown;
    }
    .colorBlockOrange {
        background: $orange;
    }
    .colorBlockGray {
        background: $gray;
    }
    @media only screen and (max-width: 768px) {
        .homeContainer {
            display: grid;
            grid-template-columns: 1fr;
        }
          .aside, .body {
            grid-column: auto;
            grid-row: auto;
        }
        .colorBlockGreen, .colorBlockBrown, .colorBlockOrange, .colorBlockGray {
            height: .5em;
            width: .5em;
        }
    }
</style>