<script setup>

</script>
<template>
    <div class="page join-now-page router-view">
        <div data-v-d3915418="" data-v-c8939ea6="" class="tabs square with-top-border auth-tabs">
            <ul data-v-d3915418="" class="tabs-menu align-center">
                <li data-v-d3915418="" class="first tabs-selector" data-test-id="tabs-login">
                    <div data-v-d3915418="" class="tab-item">
                        <div data-v-d3915418="" class="tab-item-border">
                            <div data-v-d3915418="" class="tab-icon"><svg data-v-02f45589="" data-v-d3915418=""
                                    class="svg-icon icon icon-size-medium" style="vertical-align: middle;"><!---->
                                    <use data-v-02f45589="" xlink:href="#icon-logIn-menu"></use>
                                </svg></div> <span data-v-d3915418="" class="tab-text">Log In</span> <!---->
                        </div>
                    </div>
                </li>
                <li data-v-d3915418="" class="active last tabs-selector" data-test-id="tabs-join-now">
                    <div data-v-d3915418="" class="tab-item">
                        <div data-v-d3915418="" class="tab-item-border">
                            <div data-v-d3915418="" class="tab-icon"><svg data-v-02f45589="" data-v-d3915418=""
                                    class="svg-icon icon icon-size-medium" style="vertical-align: middle;"><!---->
                                    <use data-v-02f45589="" xlink:href="#icon-join-now"></use>
                                </svg></div> <span data-v-d3915418="" class="tab-text">Join Now</span> <!---->
                        </div>
                    </div>
                </li>
            </ul> <!---->
            <section data-v-c8939ea6="" aria-hidden="false" class="tab-section">
                <div data-v-4122dab3="" data-v-c8939ea6=""><!---->
                    <form data-v-4122dab3="" class="join-now"><!----> <!---->
                        <div data-v-71294695="" data-v-4122dab3="" class="country-code-container"
                            data-test-id="joinNowPhoneNumber" placeholder="">
                            <div data-v-1a892a33="" data-v-71294695="" class="input-field phone-number-input"><label
                                    data-v-1a892a33="" for="registration-form-phoneNumber" class="form">Mobile number
                                    <span data-v-1a892a33="" data-test-id="optional-slot-button"
                                        class="optional optional-slot"></span></label>
                                <div data-v-1a892a33="" class="input-field-wrapper input-icon-undefined"> <span
                                        data-v-81261974="" data-v-71294695="" class="fi fi-tz flag" title="TZ"></span>
                                    <span data-v-71294695="" class="country-code">+255</span> <!----> <!----> <input
                                        data-v-1a892a33="" data-test-id="joinNowPhoneNumber" placeholder=""
                                        id="registration-form-phoneNumber" class="valid" name="phoneNumber" type="tel"
                                        step="1" value="778483660"></div>
                                <div data-v-1a892a33="" class="help-text">Enter your phone number without the country
                                    code (e.g., 123456789).</div> <!---->
                            </div>
                        </div> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----><!---->
                        <div data-v-1a892a33="" data-v-4122dab3="" class="input-field" autocomplete="new-password">
                            <label data-v-1a892a33="" for="registration-form-password" class="form">Password <span
                                    data-v-1a892a33="" data-test-id="handle-show-password-button"
                                    class="optional underline">Show</span></label>
                            <div data-v-1a892a33="" class="input-field-wrapper input-icon-undefined"> <!----> <!---->
                                <input data-v-1a892a33="" placeholder="" autocomplete="new-password"
                                    id="registration-form-password" class="" name="password" type="password" step="1"
                                    value=""></div>
                            <div data-v-1a892a33="" class="help-text">Min. 4 Characters</div> <!---->
                        </div> <!----> <!----> <!----> <!----> <!----> <!----> <!---->
                        <div data-v-4122dab3="" class="column-wrapper"><!----> <input data-v-4122dab3=""
                                data-test-id="register-button" type="submit" class="button button-submit button-full"
                                disabled="" value="JOIN NOW">
                            <div data-v-4122dab3="" class="terms terms-horizontal-center"><span data-v-0ff80101=""
                                    data-v-4122dab3="" class="checkbox terms-checkbox"><input data-v-0ff80101=""
                                        id="checkbox" data-test-id="on-input-button" class="checkbox-input"
                                        type="checkbox" checked="" disabled=""> <label data-v-0ff80101=""
                                        class="checkbox-label checkbox-label-disabled" for="checkbox"><span
                                            data-v-0ff80101="" class="checkbox-label-extra-space"><span
                                                data-v-0ff80101="" class="checkbox-input-custom with-border">
                                                <div data-v-0ff80101="" class="icon-checkbox"><svg data-v-02f45589=""
                                                        data-v-0ff80101="" class="svg-icon"
                                                        style="vertical-align: text-top;"><!---->
                                                        <use data-v-02f45589="" xlink:href="#icon-checkbox"></use>
                                                    </svg></div>
                                            </span></span> <span data-v-0ff80101="" class="checkbox-label-wrapper">
                                            <div data-v-4122dab3="" class="terms-text">
                                                <div data-v-e5847ff3="" data-v-4122dab3="" class="rich-text-components">
                                                    <p data-v-e5847ff3="" style="text-align: left;"><span
                                                            style="color: rgb(37, 42, 45);">By creating an account you
                                                            accept the </span><span style="color: rgb(0, 0, 0);"><a
                                                                href="/terms" target="_self" external="false"
                                                                style="text-decoration: underline;">Terms and
                                                                Conditions</a></span></p>
                                                </div>
                                            </div> <!---->
                                        </span></label></span></div>
                        </div> <span data-v-4122dab3="" class="login-text">Already have an account? <a
                                data-v-4122dab3="" href="/login" class="underline bold"
                                data-test-id="track-link-click-link" event="click">Log In</a></span>
                    </form>
                </div>
            </section>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .router-view {
    position: relative;
    color: #252a2d;
}
.page {
    flex-flow: column;
    padding: 18px 20px;
    display: flex;
}
.tabs[data-v-d3915418] {
    position: relative;
    // background-color: #9ce800;
    border: 1px solid #e6e7e2;

}
.tabs .tabs-menu[data-v-d3915418] {
    user-select: none;
    list-style: none;
    display: flex;
}
.auth-tabs[data-v-c8939ea6] .tabs-menu .tabs-selector.active.first {
    border: none;
}
// .tabs.with-top-border.square>.tabs-menu>.tabs-selector[data-v-d3915418] {
//     border-top: 1px solid #e6e7e2;
// }
// .tabs.square .tabs-selector.active.first[data-v-d3915418] {
//     border-left: none;
// }
.tabs.square .tabs-selector.active[data-v-d3915418] {
    background: #fff;
    border-bottom: none;
}
.tabs.square .tabs-selector.active[data-v-d3915418] {
    background: #fff;
    border-bottom: none;
}
.tabs.square .tabs-selector[data-v-d3915418]:not(.last) {
    border-right: none;
}
.tabs.square .tabs-selector[data-v-d3915418] {
    background: #f4f5f0;
    
    padding: 10px 16px;
}
.tabs.square .tabs-selector[data-v-d3915418], .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
    font-weight: 400;
}
.tabs.square .tabs-selector.active .tab-text[data-v-d3915418], .tabs.text .tabs-selector .tab-text[data-v-d3915418], .tabs.text .tabs-selector.active .tab-text[data-v-d3915418], .tabs.dark .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418], .tabs.square .tabs-selector[data-v-d3915418], .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
    font-size: 14px;
    line-height: 18px;
}
.tabs .tabs-selector[data-v-d3915418] {
    cursor: pointer;
    width: 100%;
}
.tabs .tabs-selector .tab-item[data-v-d3915418] {
    height: 100%;
}
.tabs .tabs-selector .tab-item-border[data-v-d3915418] {
    justify-content: center;
    align-items: center;
    height: 100%;
    display: flex;
}
.tabs .tabs-selector .tab-item-border .tab-icon[data-v-d3915418] {
    align-items: center;
    display: flex;
}
svg.icon-size-medium[data-v-02f45589], img.icon-size-medium[data-v-02f45589] {
    width: 16px;
    height: 16px;
}
.tabs .tabs-selector .tab-item-border .tab-icon+.tab-text[data-v-d3915418] {
    margin-left: 8px;
}
.tabs.square .tabs-selector.active .tab-text[data-v-d3915418], .tabs.text .tabs-selector .tab-text[data-v-d3915418], .tabs.text .tabs-selector.active .tab-text[data-v-d3915418], .tabs.dark .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
    font-weight: 700;
}
.tabs.square .tabs-selector.active .tab-text[data-v-d3915418], .tabs.text .tabs-selector .tab-text[data-v-d3915418], .tabs.text .tabs-selector.active .tab-text[data-v-d3915418], .tabs.dark .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418], .tabs.square .tabs-selector[data-v-d3915418], .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
    font-size: 14px;
    line-height: 18px;
}
.tabs.with-top-border.square>.tabs-menu>.tabs-selector[data-v-d3915418] {
    border-top: 1px solid #e6e7e2;
}
.tabs.square .tabs-selector[data-v-d3915418] {
    background: #f4f5f0;
    border: 1px solid #e6e7e2;
    border-top: none;
    padding: 10px 16px;
}
.tabs.square .tabs-selector[data-v-d3915418], .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
    font-weight: 400;
}
.tabs.square .tabs-selector.active .tab-text[data-v-d3915418], .tabs.text .tabs-selector .tab-text[data-v-d3915418], .tabs.text .tabs-selector.active .tab-text[data-v-d3915418], .tabs.dark .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418], .tabs.square .tabs-selector[data-v-d3915418], .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
    font-size: 14px;
    line-height: 18px;
}
.tabs .tabs-selector[data-v-d3915418] {
    cursor: pointer;
    width: 100%;
}
.tabs .tabs-selector .tab-item[data-v-d3915418] {
    height: 100%;
}
.tabs .tabs-selector .tab-item-border[data-v-d3915418] {
    justify-content: center;
    align-items: center;
    height: 100%;
    display: flex;
}
.tabs .tabs-selector .tab-item-border .tab-icon[data-v-d3915418] {
    align-items: center;
    display: flex;
}
svg.icon-size-medium[data-v-02f45589], img.icon-size-medium[data-v-02f45589] {
    width: 16px;
    height: 16px;
}
.tabs .tabs-selector .tab-item-border .tab-icon+.tab-text[data-v-d3915418] {
    margin-left: 8px;
}
.auth-tabs .tab-section[data-v-c8939ea6] {
    // border-bottom: 1px solid #e7e4e2;
    // border-right: 1px solid #e7e4e2;
    padding: 16px;
    position: relative;
}
.login-form[data-v-4d77962b] {
    flex-flow: column;
    display: flex;
}
.country-code-container[data-v-71294695], .phone-number-input[data-v-71294695] {
    width: 100%;
}
.input-field[data-v-1a892a33] {
    margin-bottom: 16px;
}
.input-field label[data-v-1a892a33] {
    width: 100%;
}
label.form {
    color: #252a2d;
    margin: 0 0 6px;
}
label {
    color: #252a2d;
    margin: 5px 0;
    display: inline-block;
}
p, .page-error, .notify, label, .info {
    font-weight: 400;
}
.button-text.medium, .notify, label, .info {
    font-size: 14px;
    line-height: 18px;
}
p, .page-error, .notify, label, .info {
    font-weight: 400;
}
.input-field .optional[data-v-1a892a33] {
    float: right;
    color: #8e9398;
    font-size: 14px;
}
.phone-number-input[data-v-71294695] .input-field-wrapper {
    background-color: #e6e7e2;
    border-radius: 2px 5px 5px 2px;
    align-items: center;
    width: 100%;
}
.input-field-wrapper[data-v-1a892a33] {
    display: flex;
    position: relative;
}
.phone-number-input .flag[data-v-71294695] {
    flex: 0 0 24px;
    width: 24px;
    height: 16px;
    margin: 0 7px;
}
.fi-tz {
    background-image: url(/src/assets/img/flags/tz-BjLtHeil.svg);
}
.fi {
    width: 1.33333em;
    line-height: 1em;
    display: inline-block;
    position: relative;
}
.fib, .fi {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
.phone-number-input .country-code[data-v-71294695] {
    color: #252a2d;
    font-size: 14px;
    line-height: 1.1rem;
    position: absolute;
    left: 44px;
}
.input-field-wrapper input.valid[data-v-1a892a33] {
    border-width: 1px;
    border-color: #9ce800;
}
.phone-number-input[data-v-71294695] input {
    padding-left: 40px;
}
.input-field-wrapper input[data-v-1a892a33] {
    width: 100%;
    max-width: 100%;
}
input[type=text], input[type=password], input[type=email], input[type=url], input[type=number], input[type=date], input[type=tel], input[type=search] {
    border: 1px solid #e6e7e2;
    border-radius: 0;
    outline: 0;
    padding: 7px 10px;
    font: 14px / 1.1rem Roboto-flex, Helvetica, Arial, sans-serif;
}
.input-field .help-text[data-v-1a892a33] {
    color: #8e9398;
    margin-top: 6px;
}
.input-field .currency-symbol[data-v-1a892a33], .input-field .help-text[data-v-1a892a33] {
    font-weight: 400;
}
.input-field .help-text[data-v-1a892a33] {
    font-size: 12px;
    line-height: 16px;
}
.input-field[data-v-1a892a33] {
    margin-bottom: 16px;
}
.input-field label[data-v-1a892a33] {
    width: 100%;
}
label.form {
    color: #252a2d;
    margin: 0 0 6px;
}
label {
    color: #252a2d;
    margin: 5px 0;
    display: inline-block;
}
p, .page-error, .notify, label, .info {
    font-weight: 400;
}
.button-text.medium, .notify, label, .info {
    font-size: 14px;
    /* line-height: 18px; */
}
p, .page-error, .notify, label, .info {
    font-weight: 400;
}
.input-field .optional[data-v-1a892a33] {
    float: right;
    color: #8e9398;
    font-size: 14px;
}
.underline:not([class*=button]) {
    text-decoration: underline;
}
.input-field-wrapper[data-v-1a892a33] {
    display: flex;
    position: relative;
}
input[type=text], input[type=password], input[type=email], input[type=url], input[type=number], input[type=date], input[type=tel], input[type=search] {
    border: 1px solid #e6e7e2;
    border-radius: 0;
    outline: 0;
    padding: 7px 10px;
    font: 14px / 1.1rem Roboto-flex, Helvetica, Arial, sans-serif;
}
.input-field .help-text[data-v-1a892a33] {
    color: #8e9398;
    margin-top: 6px;
}
.input-field .currency-symbol[data-v-1a892a33], .input-field .help-text[data-v-1a892a33] {
    font-weight: 400;
}
.input-field .help-text[data-v-1a892a33] {
    font-size: 12px;
    line-height: 16px;
}
.checkbox[data-v-0ff80101] {
    color: #252a2d;
    cursor: pointer;
    margin: 0 0 20px;
    font-size: 14px;
    font-weight: 400;
}
.checkbox-input[data-v-0ff80101] {
    display: none;
}
.checkbox-label[data-v-0ff80101] {
    align-items: flex-start;
    margin: 0;
    display: flex;
}
label {
    color: #252a2d;
    margin: 5px 0;
    display: inline-block;
}
p, .page-error, .notify, label, .info {
    font-weight: 400;
}
.button-text.medium, .notify, label, .info {
    font-size: 14px;
    /* line-height: 18px; */
}
p, .page-error, .notify, label, .info {
    font-weight: 400;
}
.checkbox-label-extra-space[data-v-0ff80101] {
    margin: -8px 0 -8px -8px;
    padding: 8px;
}
.checkbox-input:checked+.checkbox-label .checkbox-input-custom[data-v-0ff80101] {
    background: #8dc63f;
    border-color: #8dc63f;
}
.checkbox-input-custom.with-border[data-v-0ff80101] {
    border: 1px solid #aaaeb0;
}
.checkbox-input-custom[data-v-0ff80101] {
    background: #fff;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    display: flex;
}
.checkbox-input-custom .icon-checkbox[data-v-0ff80101] {
    width: 10px;
    height: 10px;
    line-height: 18px;
}
.checkbox-input-custom .icon-checkbox svg[data-v-0ff80101] {
    fill: #fff;
    width: 100%;
    height: 100%;
}
.checkbox-label-wrapper[data-v-0ff80101] {
    width: 100%;
}
.button-full {
    width: 100%;
    max-width: none;
}
.button-submit {
    color: #252a2d;
    fill: #252a2d;
    background-color: #9ce800;
}
.button {
    cursor: pointer;
    max-width: 300px;
    font-family: inherit;
}
.button, .button-yellow, .button-green, .button-grey, .button-orange, .button-yellow-full, .button-green-full, .button-grey-full, .button-orange-full, .item-yellow, .item-grey {
    font-weight: 700;
}
.button, .button-yellow, .button-green, .button-grey, .button-orange, .button-yellow-full, .button-green-full, .button-grey-full, .button-orange-full, .item-yellow, .item-grey {
    font-size: 14px;
}
.login-form .info[data-v-4d77962b] {
    margin: 16px 0 8px;
}
a.underline:not([class*=button]) {
    text-decoration: underline;
}
.underline:not([class*=button]) {
    text-decoration: underline;
}
.info {
    color: #252a2d;
    margin: 1rem 0;
}
.text-mid {
    text-align: center;
}
.bold {
    font-weight: 700;
}
.login-form .join-now-text[data-v-4d77962b] {
    text-align: center;
}
.login-form .join-now-text[data-v-4d77962b] {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
}
a.underline:not([class*=button]) {
    text-decoration: underline;
}
.underline:not([class*=button]) {
    text-decoration: underline;
}
.bold {
    font-weight: 700;
}
a {
    cursor: pointer;
    user-select: none;
    color: inherit;
    text-decoration: none;
}
.button:disabled
    {
    cursor: default;
    color: #8e9398;
    fill: #8e9398;
    background: #e6e7e2;
}
.button-full {
    width: 100%;
    max-width: none;
}
.button-submit {
    color: #252a2d;
    fill: #252a2d;
    background-color: #9ce800;
}
.login-form .info[data-v-4d77962b] {
    margin: 16px 0 8px;
}
a.underline:not([class*=button]) {
    text-decoration: underline;
}

.button{
    -webkit-appearance: none;
    box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-background-origin: border-box;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    background-origin: border-box;
    -webkit-background-clip: border-box;
    background-clip: border-box;
    border: 0;
    border-radius: 0;
    padding: 10px 20px;
    display: inline-block;
}


.terms-horizontal-center[data-v-4122dab3] {
    order: 2;
    margin: 16px auto 0;
}
.terms[data-v-4122dab3] {
    color: #252a2d;
    order: 0;
    align-items: flex-start;
    margin: 0 0 16px;
    display: flex;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
}
.terms-checkbox[data-v-4122dab3] {
    margin-top: 10px;
}
.checkbox[data-v-0ff80101] {
    color: #252a2d;
    cursor: pointer;
    margin: 0 0 20px;
    font-size: 14px;
    font-weight: 400;
}
.checkbox-input[data-v-0ff80101] {
    display: none;
}
.checkbox-input:checked+.checkbox-label-disabled[data-v-0ff80101] {
    cursor: not-allowed;
}
.checkbox-label[data-v-0ff80101] {
    align-items: flex-start;
    margin: 0;
    display: flex;
}
label {
    color: #252a2d;
    margin: 5px 0;
    display: inline-block;
}
.checkbox-label-extra-space[data-v-0ff80101] {
    margin: -8px 0 -8px -8px;
    padding: 8px;
}
.checkbox-input:checked+.checkbox-label-disabled .checkbox-input-custom[data-v-0ff80101] {
    background: #d9edb2;
    border-color: #d9edb2;
}
.checkbox-input:checked+.checkbox-label .checkbox-input-custom[data-v-0ff80101] {
    background: #8dc63f;
    border-color: #8dc63f;
}
.checkbox-input-custom.with-border[data-v-0ff80101] {
    border: 1px solid #aaaeb0;
}
.checkbox-input-custom[data-v-0ff80101] {
    background: #fff;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    display: flex;
}
.checkbox-input-custom .icon-checkbox[data-v-0ff80101] {
    width: 10px;
    height: 10px;
    line-height: 18px;
}
.checkbox-input:checked+.checkbox-label-disabled .checkbox-input-custom .icon-checkbox svg[data-v-0ff80101] {
    fill: #aaaeb0;
}
.checkbox-input-custom .icon-checkbox svg[data-v-0ff80101] {
    fill: #fff;
    width: 100%;
    height: 100%;
}
.checkbox-label-wrapper[data-v-0ff80101] {
    width: 100%;
}
.terms-text[data-v-4122dab3]{
    font-size: 12px;
    line-height: 16px;
}
.terms-text[data-v-4122dab3], .terms-text[data-v-4122dab3] .rich-text-components *, .join-now .login-text[data-v-4122dab3], .terms[data-v-4122dab3] {
    font-size: 12px;
    line-height: 16px;
}
.rich-text-components p[data-v-e5847ff3] {
    line-height: 1.4;
}
.join-now .login-text[data-v-4122dab3] {
    text-align: center;
    margin-top: 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-self: center;
    justify-self: center;
}
label {
    color: #252a2d;
    margin: 5px 0;
    display: inline-block;
}
.checkbox-input:checked+.checkbox-label-disabled .checkbox-input-custom .icon-checkbox svg[data-v-0ff80101] {
    fill: #aaaeb0;
}
input-custom .icon-checkbox svg[data-v-0ff80101] {
    fill: #aaaeb0;
}
.checkbox-label-extra-space[data-v-0ff80101] {
    margin: -8px 0 -8px -8px;
    padding: 8px;
}
.checkbox-label[data-v-0ff80101] {
    align-items: center;
    margin: 0;
    display: flex;
    justify-content: center;
    text-align: center;
}
.column-wrapper[data-v-4122dab3] {
    flex-direction: column;
    width: 100%;
    display: flex;
}
.terms-horizontal-center[data-v-4122dab3] {
    order: 2;
    // background-color: red;
    display: flex;
    justify-content: center;
    padding-top: 25px;


}
.terms[data-v-4122dab3] {
    color: #252a2d;
    order: 0;
    align-items: flex-start;
    margin: 0 0 16px;
    display: flex;
}

</style>