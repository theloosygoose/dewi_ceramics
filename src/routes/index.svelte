<script lang="ts" context="module">
    export async function load({ fetch }) {

        const res = await fetch('/api/collections.json')
        const collections = await res.json()

        return {
            props:{
                collections: await collections.collections
            }
        }
        
    }

</script>
<script lang="ts">
    import viewport from '$lib/actions/useViewportAction';

    import { fly,fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import CollectionCard from '$lib/components/Cards/CollectionCard.svelte';

    export let collections:any 
    
    let articleView = false;
    let scroll:number;
    let ready = false;
    onMount(async () => {
        ready = true;

    })
  

 </script>

 <svelte:head>
    <meta property="og:type" content="website">
    <meta property="og:url" content="www.dewiceramics.netlify.app">
    <meta property="og:title" content="Dewi Ceramics">
    <meta property="og:description" content="Ceramics and pottery handcrafted by Dewi Henry in Philadelphia, PA. Shop for mugs, pots, teacups, and more.">
    <meta property="og:image" content="/icons/logolarge.png">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="www.dewiceramics.netlify.app">
    <meta property="twitter:title" content="Dewi Ceramics">
    <meta property="twitter:description" content="Ceramics and pottery handcrafted by Dewi Henry in Philadelphia, PA. Shop for mugs, pots, teacups, and more.">
    <meta property="twitter:image" content="/icons/logolarge.png">
 </svelte:head>


<svelte:window bind:scrollY={scroll}/>
<div class="z-[1] relative bg-mywork-mobile-img bg-[center] bg-no-repeat bg-cover w-full h-[80vh] flex items-end justify-left overflow-hidden">
    {#if ready}
        <div class="relative z-0 ml-[5%] mb-[5%] w-1/2 md:w-1/4 p-4 drop-shadow-2xl"
            style:transform={`translate3d(0, -${scroll*1.5}px, 0)`}
            in:fly="{{y:50, delay:500, duration:700}}">
            <svg viewBox="0 0 977 305" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.34 0.179991C77.436 0.179991 90.628 3.23999 101.916 9.35999C113.34 15.344 122.112 23.776 128.232 34.656C134.352 45.536 137.412 57.98 137.412 71.988C137.412 85.86 134.284 98.236 128.028 109.116C121.908 119.996 113.136 128.564 101.712 134.82C90.424 140.94 77.3 144 62.34 144H5.424V0.179991H62.34ZM59.28 108.708C70.976 108.708 80.156 105.512 86.82 99.12C93.484 92.728 96.816 83.684 96.816 71.988C96.816 60.156 93.484 51.044 86.82 44.652C80.156 38.124 70.976 34.86 59.28 34.86H45.408V108.708H59.28Z" fill="#DF2228"/>
                <path d="M181.14 32.208V55.668H227.04V86.064H181.14V111.972H233.16V144H141.156V0.179991H233.16V32.208H181.14Z" fill="#EB6424"/>
                <path d="M441.209 0.179991L405.917 144H356.753L336.965 55.872L316.769 144H267.605L232.721 0.179991H275.969L292.697 98.508L315.341 0.179991H359.201L381.233 97.692L397.961 0.179991H441.209Z" fill="#359C49"/>
                <path d="M483.881 0.179991V144H443.897V0.179991H483.881Z" fill="#3569B4"/>
                <path class="fill-tan" d="M0.528 230.784C0.528 216.64 3.452 204.06 9.3 193.044C15.284 181.892 23.716 173.256 34.596 167.136C45.476 160.88 57.988 157.752 72.132 157.752C90.084 157.752 105.18 162.58 117.42 172.236C129.66 181.756 137.548 194.744 141.084 211.2H98.04C95.456 205.76 91.852 201.612 87.228 198.756C82.74 195.9 77.504 194.472 71.52 194.472C62.272 194.472 54.86 197.804 49.284 204.468C43.844 210.996 41.124 219.768 41.124 230.784C41.124 241.936 43.844 250.844 49.284 257.508C54.86 264.036 62.272 267.3 71.52 267.3C77.504 267.3 82.74 265.872 87.228 263.016C91.852 260.16 95.456 256.012 98.04 250.572H141.084C137.548 267.028 129.66 280.084 117.42 289.74C105.18 299.26 90.084 304.02 72.132 304.02C57.988 304.02 45.476 300.96 34.596 294.84C23.716 288.584 15.284 279.948 9.3 268.932C3.452 257.78 0.528 245.064 0.528 230.784ZM185.722 191.208V214.668H231.622V245.064H185.722V270.972H237.742V303H145.738V159.18H237.742V191.208H185.722ZM316.047 303L287.487 249.96H283.203V303H243.219V159.18H306.255C317.815 159.18 327.607 161.22 335.631 165.3C343.655 169.244 349.707 174.752 353.787 181.824C357.867 188.76 359.907 196.58 359.907 205.284C359.907 215.076 357.187 223.712 351.747 231.192C346.443 238.536 338.623 243.772 328.287 246.9L360.723 303H316.047ZM283.203 222.624H302.991C308.431 222.624 312.511 221.332 315.231 218.748C317.951 216.164 319.311 212.424 319.311 207.528C319.311 202.904 317.883 199.3 315.027 196.716C312.307 193.996 308.295 192.636 302.991 192.636H283.203V222.624ZM454.795 279.54H403.795L396.043 303H354.019L406.447 159.18H452.551L504.775 303H462.547L454.795 279.54ZM444.799 248.94L429.295 202.428L413.995 248.94H444.799ZM671.419 159.18V303H631.435V223.644L604.303 303H570.847L543.511 223.032V303H503.527V159.18H551.875L587.983 252.612L623.275 159.18H671.419ZM719.883 159.18V303H679.899V159.18H719.883ZM723.477 230.784C723.477 216.64 726.401 204.06 732.249 193.044C738.233 181.892 746.665 173.256 757.545 167.136C768.425 160.88 780.937 157.752 795.081 157.752C813.033 157.752 828.129 162.58 840.369 172.236C852.609 181.756 860.497 194.744 864.033 211.2H820.989C818.405 205.76 814.801 201.612 810.177 198.756C805.689 195.9 800.453 194.472 794.469 194.472C785.221 194.472 777.809 197.804 772.233 204.468C766.793 210.996 764.073 219.768 764.073 230.784C764.073 241.936 766.793 250.844 772.233 257.508C777.809 264.036 785.221 267.3 794.469 267.3C800.453 267.3 805.689 265.872 810.177 263.016C814.801 260.16 818.405 256.012 820.989 250.572H864.033C860.497 267.028 852.609 280.084 840.369 289.74C828.129 299.26 813.033 304.02 795.081 304.02C780.937 304.02 768.425 300.96 757.545 294.84C746.665 288.584 738.233 279.948 732.249 268.932C726.401 257.78 723.477 245.064 723.477 230.784ZM922.951 304.428C906.223 304.428 892.487 300.484 881.743 292.596C870.999 284.572 865.219 273.148 864.403 258.324H907.039C907.447 263.356 908.943 267.028 911.527 269.34C914.111 271.652 917.443 272.808 921.523 272.808C925.195 272.808 928.187 271.924 930.499 270.156C932.947 268.252 934.171 265.668 934.171 262.404C934.171 258.188 932.199 254.924 928.255 252.612C924.311 250.3 917.919 247.716 909.079 244.86C899.695 241.732 892.079 238.74 886.231 235.884C880.519 232.892 875.487 228.608 871.135 223.032C866.919 217.32 864.811 209.908 864.811 200.796C864.811 191.548 867.123 183.66 871.747 177.132C876.371 170.468 882.763 165.436 890.923 162.036C899.083 158.636 908.331 156.936 918.667 156.936C935.395 156.936 948.723 160.88 958.651 168.768C968.715 176.52 974.087 187.468 974.767 201.612H931.315C931.179 197.26 929.819 193.996 927.235 191.82C924.787 189.644 921.591 188.556 917.647 188.556C914.655 188.556 912.207 189.44 910.303 191.208C908.399 192.976 907.447 195.492 907.447 198.756C907.447 201.476 908.467 203.856 910.507 205.896C912.683 207.8 915.335 209.5 918.463 210.996C921.591 212.356 926.215 214.124 932.335 216.3C941.447 219.428 948.927 222.556 954.775 225.684C960.759 228.676 965.859 232.96 970.075 238.536C974.427 243.976 976.603 250.912 976.603 259.344C976.603 267.912 974.427 275.596 970.075 282.396C965.859 289.196 959.671 294.568 951.511 298.512C943.487 302.456 933.967 304.428 922.951 304.428Z"/>
            </svg>
        </div>        

    {/if}
</div>

<div href="#store_page" class="flex gap-2 justify-center mt-8 relative">
    <img class="animate-bounce pt-2" src="/icons/arrow_down.svg" alt="See More Below">
    <p class="text-xl text-brown font-medium tracking-wide">Scroll to Learn More</p>
</div>

<div class="relative overflow-hidden">
    <article class="my-24 relative z-20 overflow-x-hidden" use:viewport on:enterViewport={() => {return articleView = true}} >
        {#if articleView }
        <h2 in:fly="{{x:-100, delay:700, duration:700}}" class="mx-[5%] z-30 relative text-5xl xs:text-6xl md:text-7xl lg:text-8xl text-brown font-bold tracking-normal leading-[1]">Buy Independent, Not Big Business</h2>
        <p  in:fly="{{x:100,delay:1200,duration:700}}" class="mx-[5%] z-30 relative text-xl text-brown font-medium tracking-wide mt-2">I'm an independent ceramist making fun mugs, bowls, teacups, teapots, vases, and more!</p>
        {:else}
            <div class="h-[40vh]"></div>
        {/if}
    </article>
</div>
    
<section class="flex-col relative z-10">
    <a sveltekit:prefetch href="/store">
        <div class="mt-5 lg:bg-store-desktop-img bg-store-mobile-img bg-no-repeat bg-cover bg-center min-h-[500px]">
            <div class="bg-orange w-fit">
                <p class="font-extrabold  py-2 px-6 text-5xl tracking-wide text-tan">Store</p>
            </div>
        </div>
    </a>
    <div class="mx-5 mt-5">
        <h2 class="mx-auto w-full bg-product text-brown font-extrabold  text-4xl md:text-5xl lg:text-7xl text-center tracking-normal leading-[1]">FEATURED <br> COLLECTIONS</h2>
        <div class="mt-5 grid w-full md:grid-cols-2 grid-cols-1 gap-4 ">
        {#each collections as collection}
            <CollectionCard {collection} />
        {/each}
        </div>
    </div>
    <div>
        <a sveltekit:prefetch href="/about">
            <div class="mt-5 lg:bg-mywork-desktop-img bg-mywork-mobile-img bg-no-repeat bg-cover bg-center min-h-[500px]">
                <div class="bg-blue w-fit">
                    <p class="font-extrabold   py-2 px-6 text-5xl tracking-wide text-tan">About Me</p>
                </div>
            </div>
        </a>
    </div>
</section>
