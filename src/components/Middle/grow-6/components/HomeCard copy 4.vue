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
                class="StrapiWidgetUsp_item__JEfux StrapiWidgetUsp_withLink__gqKjf" 
                href="/1000-win-bonus">
                <div class="StrapiWidgetUsp_icon__UECIm">
                    <img :src="IconLicense" alt="" srcset="">
                </div>
                <div class="StrapiWidgetUsp_content__3Td_D">
                    <div class="StrapiWidgetUsp_itemTitle__F_Bn2">1000% Win Bonus</div>
                    <div class="StrapiWidgetUsp_itemDescription__xyhQ_">Win up to 1000% with no minimum stake!</div>
                </div>
                <div class="StrapiWidgetUsp_arrow__TZss4">
                    <img :src="IconArrow" alt="" srcset="">
                </div>
            </a>
            
            <a data-test-id="usp-item-140" 
                class="StrapiWidgetUsp_item__JEfux StrapiWidgetUsp_withLink__gqKjf"
                href="/aviator-winners-hall-of-fame">
                <div class="StrapiWidgetUsp_icon__UECIm">
                    <img :src="IconRocket" alt="" srcset="">
                </div>
                <div class="StrapiWidgetUsp_content__3Td_D">
                    <div class="StrapiWidgetUsp_itemTitle__F_Bn2">Biggest Aviator Wins</div>
                    <div class="StrapiWidgetUsp_itemDescription__xyhQ_">Play from TSh1 for Tanzania's biggest max win.</div>
                </div>
                <div class="StrapiWidgetUsp_arrow__TZss4">
                    <img :src="IconArrow" alt="" srcset="">
                </div>
            </a>
            
            <a data-test-id="usp-item-141" 
                class="StrapiWidgetUsp_item__JEfux StrapiWidgetUsp_withLink__gqKjf"
                href="/2up">
                <div class="StrapiWidgetUsp_icon__UECIm">
                    <img :src="IconKidStar" alt="" srcset="">
                </div>
                <div class="StrapiWidgetUsp_content__3Td_D">
                    <div class="StrapiWidgetUsp_itemTitle__F_Bn2">2UP: Live &amp; Full Odds</div>
                    <div class="StrapiWidgetUsp_itemDescription__xyhQ_">Bet at 1-0, get paid instantly at 2 goals up.</div>
                </div>
                <div class="StrapiWidgetUsp_arrow__TZss4">
                    <img :src="IconArrow" alt="" srcset="">
                </div>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.StrapiWidgetUsp_container__jTM3W {
    background: #f7f8f9;
    padding: 8px;
    color: #252a2d;
}

.StrapiWidgetUsp_title__Ae27_ {
    margin: 0 0 4px 0;
    text-align: center;
    white-space: pre-wrap;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
}

.StrapiWidgetUsp_description__gMqJx {
    font-weight: 600;
    text-align: center;
    margin-bottom: 12px;
    font-size: 12px;
    color: #5b5b5b;
}

/* 1 column, 3 rows - collapsed gap */
.StrapiWidgetUsp_itemsContainer__NXAki {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

/* Card styles - uniform na collapsed */
.StrapiWidgetUsp_item__JEfux {
    background: #fff;
    border: 1px solid #e2e4e8;
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    width: 100%;
    position: relative;
    transition: all 0.2s ease;
    min-height: auto;
}

.StrapiWidgetUsp_item__JEfux:hover {
    background: #ffffff;
    border-color: #cbd5e1;
}

.StrapiWidgetUsp_withLink__gqKjf {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}

/* Icon container - collapsed */
.StrapiWidgetUsp_icon__UECIm {
    background: #f7f8f9;
    border-radius: 6px;
    flex-shrink: 0;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}

.StrapiWidgetUsp_icon__UECIm img {
    width: 18px;
    height: 18px;
    object-fit: contain;
}

/* Content area - uniform spacing */
.StrapiWidgetUsp_content__3Td_D {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    gap: 2px;
}

.StrapiWidgetUsp_itemTitle__F_Bn2 {
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    margin: 0;
    word-break: break-word;
    color: #252a2d;
}

.StrapiWidgetUsp_itemDescription__xyhQ_ {
    color: #5b5b5b;
    font-size: 10px;
    font-weight: 400;
    word-break: break-word;
    line-height: 1.3;
}

/* Arrow icon - collapsed */
.StrapiWidgetUsp_arrow__TZss4 {
    color: #aaaeb0;
    display: flex;
    justify-content: flex-end;
    margin-left: 8px;
    flex-shrink: 0;
}

.StrapiWidgetUsp_arrow__TZss4 img {
    width: 14px;
    height: 14px;
    opacity: 0.6;
}

.StrapiWidgetUsp_item__JEfux:hover .StrapiWidgetUsp_arrow__TZss4 img {
    opacity: 1;
}

/* Desktop - bado 1 column, lakini centered na compact */
@media screen and (min-width: 768px) {
    .StrapiWidgetUsp_container__jTM3W {
        max-width: 680px;
        margin: 0 auto;
        padding: 12px 16px;
    }
    
    .StrapiWidgetUsp_title__Ae27_ {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 4px;
    }
    
    .StrapiWidgetUsp_description__gMqJx {
        font-size: 14px;
        margin-bottom: 16px;
    }
    
    .StrapiWidgetUsp_itemsContainer__NXAki {
        gap: 8px;
        max-width: 100%;
        margin: 0;
    }
    
    .StrapiWidgetUsp_item__JEfux {
        padding: 10px 14px;
    }
    
    .StrapiWidgetUsp_icon__UECIm {
        height: 36px;
        width: 36px;
        margin-right: 12px;
    }
    
    .StrapiWidgetUsp_icon__UECIm img {
        width: 20px;
        height: 20px;
    }
    
    .StrapiWidgetUsp_itemTitle__F_Bn2 {
        font-size: 14px;
        line-height: 20px;
    }
    
    .StrapiWidgetUsp_itemDescription__xyhQ_ {
        font-size: 11px;
    }
    
    .StrapiWidgetUsp_arrow__TZss4 img {
        width: 16px;
        height: 16px;
    }
}

/* Simu ndogo - extra collapsed */
@media screen and (max-width: 480px) {
    .StrapiWidgetUsp_container__jTM3W {
        padding: 6px;
    }
    
    .StrapiWidgetUsp_itemsContainer__NXAki {
        gap: 5px;
    }
    
    .StrapiWidgetUsp_item__JEfux {
        padding: 6px 10px;
    }
    
    .StrapiWidgetUsp_icon__UECIm {
        height: 28px;
        width: 28px;
        margin-right: 8px;
    }
    
    .StrapiWidgetUsp_icon__UECIm img {
        width: 16px;
        height: 16px;
    }
    
    .StrapiWidgetUsp_itemTitle__F_Bn2 {
        font-size: 12px;
        line-height: 16px;
    }
    
    .StrapiWidgetUsp_itemDescription__xyhQ_ {
        font-size: 9px;
    }
    
    .StrapiWidgetUsp_arrow__TZss4 {
        margin-left: 6px;
    }
    
    .StrapiWidgetUsp_arrow__TZss4 img {
        width: 12px;
        height: 12px;
    }
}

a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
}
</style>