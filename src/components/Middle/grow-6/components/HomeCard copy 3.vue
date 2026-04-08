<script setup>
import IconArrow from '../assets/chevron_right_24dp_000_FILL0_wght400_GRAD0_opsz24.png'
import IconKidStar from '../assets/kid_star_24dp_000_FILL0_wght400_GRAD0_opsz24.png'
import IconLicense from '../assets/license_24dp_000_FILL0_wght400_GRAD0_opsz24.png'
import IconRocket from '../assets/rocket_launch_24dp_000_FILL0_wght400_GRAD0_opsz24.png'


</script>
<template>
    <div class="StrapiWidgetUsp_container__jTM3W">
        <h1 class="StrapiWidgetUsp_title__Ae27_">Africa's #1 betting brand</h1>
        <h3 class="StrapiWidgetUsp_description__gMqJx">Great Odds • Biggest Wins • Exciting Games</h3>
        <div class="StrapiWidgetUsp_itemsContainer__NXAki">
            <a data-test-id="usp-item-139"
                class="StrapiWidgetUsp_item__JEfux StrapiWidgetUsp_withLink__gqKjf" href="/1000-win-bonus">

                <div class="StrapiWidgetUsp_icon__UECIm"><img :src="IconLicense" alt="" srcset=""></div>
                
                <div class="StrapiWidgetUsp_content__3Td_D">
                    <div class="StrapiWidgetUsp_itemTitle__F_Bn2">1000% Win Bonus</div>
                    <div class="StrapiWidgetUsp_itemDescription__xyhQ_">Win up to 1000% with no minimum stake!</div>
                </div>
                <div class="StrapiWidgetUsp_arrow__TZss4"><img :src="IconArrow" alt="" srcset=""></div>
            </a><a data-test-id="usp-item-140" class="StrapiWidgetUsp_item__JEfux StrapiWidgetUsp_withLink__gqKjf"
                href="/aviator-winners-hall-of-fame">
                <div class="StrapiWidgetUsp_icon__UECIm"><img :src="IconRocket" alt="" srcset=""></div>
                <div class="StrapiWidgetUsp_content__3Td_D">
                    <div class="StrapiWidgetUsp_itemTitle__F_Bn2">Biggest Aviator Wins</div>
                    <div class="StrapiWidgetUsp_itemDescription__xyhQ_">Play from TSh1 for Tanzania's biggest max win.
                    </div>
                </div>
                <div class="StrapiWidgetUsp_arrow__TZss4"><img :src="IconArrow" alt="" srcset=""></div>
            </a><a data-test-id="usp-item-141" class="StrapiWidgetUsp_item__JEfux StrapiWidgetUsp_withLink__gqKjf"
                href="/2up">
                <div class="StrapiWidgetUsp_icon__UECIm"><img :src="IconKidStar" alt="" srcset=""></div>
                <div class="StrapiWidgetUsp_content__3Td_D">
                    <div class="StrapiWidgetUsp_itemTitle__F_Bn2">2UP: Live &amp; Full Odds</div>
                    <div class="StrapiWidgetUsp_itemDescription__xyhQ_">Bet at 1-0, get paid instantly at 2 goals up.
                    </div>
                </div>
                <div class="StrapiWidgetUsp_arrow__TZss4"><img :src="IconArrow" alt="" srcset=""></div>
            </a></div>
    </div>
    

</template>



<style lang="scss" scoped>
.StrapiWidgetUsp_container__jTM3W {
    background: #f7f8f9;
    padding: 12px;
    color: #252a2d;
}

.StrapiWidgetUsp_title__Ae27_ {
    margin: 0;
    text-align: center;
    white-space: pre-wrap;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
}

.StrapiWidgetUsp_description__gMqJx {
    font-weight: 700;
    text-align: center;
    margin-bottom: 16px;
}

/* Grid layout - 1 column kwenye simu, 3 columns kwenye screen kubwa */
.StrapiWidgetUsp_itemsContainer__NXAki {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    align-items: stretch;
}

@media screen and (min-width: 768px) {
    .StrapiWidgetUsp_title__Ae27_ {
        text-align: left;
    }
    
    .StrapiWidgetUsp_description__gMqJx {
        text-align: left;
    }
    
    .StrapiWidgetUsp_itemsContainer__NXAki {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Card styles */
.StrapiWidgetUsp_item__JEfux {
    background: #fff;
    border: 1px solid #e2e4e8;
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 12px;
    width: 100%;
    min-height: 60px;
    position: relative;
}

.StrapiWidgetUsp_withLink__gqKjf {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}

/* Icon container */
.StrapiWidgetUsp_icon__UECIm {
    background: #f7f8f9;
    border-radius: 6px;
    flex-shrink: 0;
    height: 28px;
    width: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
}

.StrapiWidgetUsp_icon__UECIm i {
    font-size: 20px;
}

/* Content area */
.StrapiWidgetUsp_content__3Td_D {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-right: 2px;
    min-width: 0;
}

.StrapiWidgetUsp_itemTitle__F_Bn2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    margin: 0;
    word-break: break-word;
}

.StrapiWidgetUsp_itemDescription__xyhQ_ {
    color: #5b5b5b;
    font-size: 11px;
    font-weight: 400;
    word-break: break-word;
}

/* Arrow icon */
.StrapiWidgetUsp_arrow__TZss4 {
    color: #aaaeb0;
    display: flex;
    font-size: 12px;
    justify-content: flex-end;
    margin-left: auto;
}

.StrapiWidgetUsp_item__JEfux {
        align-items: flex-start;
        flex-direction: column;
        height: 100%;
        padding: 12px 12px 12px 12px;
    }

/* Desktop adjustments */
@media screen and (min-width: 768px) {
    .StrapiWidgetUsp_item__JEfux {
        align-items: flex-start;
        flex-direction: column;
        height: 100%;
        padding: 12px 12px 12px 12px;
    }
    
    .StrapiWidgetUsp_icon__UECIm {
        margin-bottom: 10px;
        margin-right: 0;
    }
    
    .StrapiWidgetUsp_content__3Td_D {
        margin-top: 0;
        margin-right: 0;
        width: 100%;
    }
    
    .StrapiWidgetUsp_arrow__TZss4 {
        position: absolute;
        right: 11px;
        top: 17px;
        margin-left: 0;
    }
}

/* Font Awesome icons */
.fa-kit {
    font-family: Font Awesome Kit, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-align: center;
    text-rendering: auto;
    width: 1.25em;
}

.fa-kit.fa-award {
    --fa: "\e084";
}

.fa-kit.fa-usp-rocket {
    --fa: "\e085"; /* Adjust based on your actual icon code */
}

.fa-kit.fa-usp-star {
    --fa: "\e086"; /* Adjust based on your actual icon code */
}

.fa-kit.fa-arrow-right {
    --fa: "\e007";
}

a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
}
</style>