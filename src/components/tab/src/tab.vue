<template>
    <div class="etc-tab">
        <ul class="etc-tab-nav">
            <li class="etc-tab-nav-item" v-for="(item,index) in navList" :style="item._uid == activeIndex ? 'color:'+activeColor+'' : ''" :class="item._uid == activeIndex ? 'etc-tab-active' : ''" @click="changeHandler(item._uid, item.label, index)">
                <a href="javascript:;">{{item.label}}</a>
            </li>
        </ul>
        <div class="etc-tab-panel">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    import {
        isColor
    } from '../../../plug-in/utils'
    export default {
        name: 'etc-tab',
        data() {
            return {
                navList: [],
                activeIndex: 0,
                tmpIndex: 0
            }
        },
        props: {
            change: Function,
            callback: Function,
            activeColor: {
                validator(value) {
                    if (!value) return true;
                    return isColor(value);
                },
                default: '#d27e00'
            }
        },
        methods: {
            init(update) {
                const tabPanels = this.$children.filter(item => item.$options.name === 'etc-tab-panel');
                let num = 0;
                tabPanels.forEach((panel, index) => {
                    if (update === 'label') {
                        return this.navList[index] = panel;
                    }
                    if (!update) {
                        this.navList.push({
                            label: panel.label,
                            _uid: panel._uid
                        });
                    }
                    if (panel.active) {
                        this.activeIndex = this.tmpIndex = panel._uid;
                    } else {
                        ++num;
                        if (num >= tabPanels.length) {
                            this.activeIndex = this.tmpIndex = tabPanels[0]._uid;
                            this.emitChange(tabPanels[0].label, 0);
                        }
                    }
                });
            },
            emitChange(label, index) {
                this.$emit("tabclick", label, index)
            },
            changeHandler(uid, label, index) {
                if (this.tmpIndex != uid) {
                    this.activeIndex = this.tmpIndex = uid;
                    this.emitChange(label, index);
                }
            }
        },
        mounted() {
            this.init(false);
        }
    }
</script>

<style lang="scss">
    @import '../../../style/necessary.scss';
    @import './tab.scss';
</style>
