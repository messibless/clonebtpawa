<script setup>
import AfricanLeague from '../../../assets/media/noun_europe_188772_1_de866e5d6c.svg';
import EuropeanLeague from '../../../assets/media/Europe_43bd11c816.svg';
</script>

<template>
    <div class="league-shortcut-container">
    <div class="league-shortcut">
        <!-- Live -->
        <a href="/events/live" class="league-shortcut-box-wrapper" data-test-class="ShortcutType-Live">
            <div class="league-shortcut-box">
                <div class="league-shortcut-box-top">
                    <svg class="svg-icon icon icon-size-medium icon-live">
                        <use xlink:href="#icon-live"></use>
                    </svg>
                    <div class="box-count">19</div>
                </div>
                <div class="league-shortcut-box-name">Live</div>
            </div>
        </a>
        
        <!-- Tournaments -->
        <div class="tournaments-shortcuts">
            <!-- Africa Cup of Nations -->
            <a href="/events/group/15598" class="league-shortcut-box-wrapper" data-test-class="ShortcutType-Group">
                <div class="league-shortcut-box">
                    <div class="league-shortcut-box-top">
                        <img class="image-icon rounded-flag icon-size-medium" :src="AfricanLeague" alt="Africa">
                        <div class="box-count">20</div>
                    </div>
                    <div class="league-shortcut-box-name">Africa Cup of Nations</div>
                </div>
            </a>
            
            <!-- Premier League -->
            <a href="/events/group/11965" class="league-shortcut-box-wrapper" data-test-class="ShortcutType-Group">
                <div class="league-shortcut-box">
                    <div class="league-shortcut-box-top">
                        <span class="fi fi-gb-eng fis rounded-flag icon-size-medium" title="GB-ENG"></span>
                        <div class="box-count">19</div>
                    </div>
                    <div class="league-shortcut-box-name">Premier League</div>
                </div>
            </a>
            
            <!-- EFL Cup -->
            <a href="/events/group/12348" class="league-shortcut-box-wrapper" data-test-class="ShortcutType-Group">
                <div class="league-shortcut-box">
                    <div class="league-shortcut-box-top">
                        <span class="fi fi-gb-eng fis rounded-flag icon-size-medium" title="GB-ENG"></span>
                        <div class="box-count">2</div>
                    </div>
                    <div class="league-shortcut-box-name">EFL Cup</div>
                </div>
            </a>
            
            <!-- Serie A -->
            <a href="/events/group/12097" class="league-shortcut-box-wrapper" data-test-class="ShortcutType-Group">
                <div class="league-shortcut-box">
                    <div class="league-shortcut-box-top">
                        <span class="fi fi-it fis rounded-flag icon-size-medium" title="IT"></span>
                        <div class="box-count">20</div>
                    </div>
                    <div class="league-shortcut-box-name">Serie A</div>
                </div>
            </a>
            
            <!-- Bundesliga -->
            <a href="/events/group/12110" class="league-shortcut-box-wrapper" data-test-class="ShortcutType-Group">
                <div class="league-shortcut-box">
                    <div class="league-shortcut-box-top">
                        <span class="fi fi-de fis rounded-flag icon-size-medium" title="DE"></span>
                        <div class="box-count">18</div>
                    </div>
                    <div class="league-shortcut-box-name">Bundesliga</div>
                </div>
            </a>
            
            <!-- LaLiga -->
            <a href="/events/group/12039" class="league-shortcut-box-wrapper" data-test-class="ShortcutType-Group">
                <div class="league-shortcut-box">
                    <div class="league-shortcut-box-top">
                        <span class="fi fi-es fis rounded-flag icon-size-medium" title="ES"></span>
                        <div class="box-count">18</div>
                    </div>
                    <div class="league-shortcut-box-name">LaLiga</div>
                </div>
            </a>
            
            <!-- Ligue 1 -->
            <a href="/events/group/12127" class="league-shortcut-box-wrapper" data-test-class="ShortcutType-Group">
                <div class="league-shortcut-box">
                    <div class="league-shortcut-box-top">
                        <span class="fi fi-fr fis rounded-flag icon-size-medium" title="FR"></span>
                        <div class="box-count">18</div>
                    </div>
                    <div class="league-shortcut-box-name">Ligue 1</div>
                </div>
            </a>
            
            <!-- UEFA Champions League -->
            <a href="/events/group/12541" class="league-shortcut-box-wrapper" data-test-class="ShortcutType-Group">
                <div class="league-shortcut-box">
                    <div class="league-shortcut-box-top">
                        <img class="image-icon rounded-flag icon-size-medium" :src="EuropeanLeague" alt="UEFA">
                        <div class="box-count">18</div>
                    </div>
                    <div class="league-shortcut-box-name">UEFA Champions League</div>
                </div>
            </a>
            
            <!-- UEFA Europa League -->
            <a href="/events/group/12546" class="league-shortcut-box-wrapper" data-test-class="ShortcutType-Group">
                <div class="league-shortcut-box">
                    <div class="league-shortcut-box-top">
                        <img class="image-icon rounded-flag icon-size-medium" :src="EuropeanLeague" alt="UEFA">
                        <div class="box-count">18</div>
                    </div>
                    <div class="league-shortcut-box-name">UEFA Europa League</div>
                </div>
            </a>
        </div>
        
        <!-- Upcoming -->
        <a href="/events" class="league-shortcut-box-wrapper" data-test-class="ShortcutType-Upcoming">
            <div class="league-shortcut-box">
                <div class="league-shortcut-box-top">
                    <svg class="svg-icon icon icon-size-medium icon-clock">
                        <use xlink:href="#icon-clock"></use>
                    </svg>
                    <div class="box-count">662</div>
                </div>
                <div class="league-shortcut-box-name">Upcoming</div>
            </div>
        </a>
    </div>
</div>
</template>

<style lang="scss" scoped>
// Ongeza container ya nje
.league-shortcut-container {
    max-width: inherit; // Itarithi max-width kutoka parent
}
.league-shortcut {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin: 8px 0;
    padding: 0 12px;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    max-width: 100%;
    /* Hide scrollbar but keep functionality */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari and Opera */
    }
}

.tournaments-shortcuts {
    display: flex;
    gap: 8px;
}

.league-shortcut-box-wrapper {
    flex-shrink: 0;
    text-decoration: none;
    
    &:last-child {
        margin-right: 0;
    }
    
    &:hover .league-shortcut-box {
        border-color: #9ce800;
        background-color: #f9ffed;
    }
}

.league-shortcut-box {
    border: 1px solid #e6e7e2;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 88px;
    min-width: 88px;
    padding: 8px 8px 4px;
    background: white;
    transition: all 0.2s ease;
}

.league-shortcut-box-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 4px;
}

/* Icons */
.svg-icon.icon-live {
    fill: #ff7a00;
    color: #ff7a00;
}

.svg-icon.icon-clock {
    fill: #252a2d;
}

.icon-size-medium {
    width: 16px;
    height: 16px;
}

/* Flag icons */
.image-icon.rounded-flag,
.fi.rounded-flag {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    object-fit: cover;
}

/* Flag backgrounds */
.fi {
    background-size: cover;
    background-position: center;
    display: inline-block;
    
    &.fi-gb-eng {
        background-color: #012169;
        background-image: linear-gradient(to bottom, #012169 0%, #002395 100%);
    }
    
    &.fi-it {
        background: linear-gradient(to right, #008C45 33%, #F4F5F0 33%, #F4F5F0 66%, #CD212A 66%);
    }
    
    &.fi-de {
        background: linear-gradient(to bottom, #000 33%, #DD0000 33%, #DD0000 66%, #FFCE00 66%);
    }
    
    &.fi-es {
        background: linear-gradient(to bottom, #AD1519 50%, #FABD00 50%);
    }
    
    &.fi-fr {
        background: linear-gradient(to right, #002395 33%, #fff 33%, #fff 66%, #ED2939 66%);
    }
}

/* Count badge */
.box-count {
    color: #252a2d;
    background-color: #d9edb2;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    min-width: 16px;
    height: 14px;
    padding: 0 3px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* League name */
.league-shortcut-box-name {
    font-size: 11px;
    font-weight: 500;
    line-height: 1.2;
    color: #252a2d;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Active state */
.league-shortcut-box-wrapper.active .league-shortcut-box {
    border-color: #9ce800;
    background-color: #f9ffed;
    
    .league-shortcut-box-name {
        font-weight: 600;
    }
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .league-shortcut {
        padding: 0 8px;
        gap: 6px;
    }
    
    .league-shortcut-box {
        width: 80px;
        min-width: 80px;
        padding: 6px 6px 3px;
    }
    
    .league-shortcut-box-name {
        font-size: 10px;
    }
}
</style>