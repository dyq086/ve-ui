<template>
    <div class="etc-tab">
        <ul class="etc-tab-nav">
            <li class="etc-tab-nav-item" v-for="(item,index) in navList" :style="item._uid == activeIndex ? 'color:'+activeColor+'' : ''" :class="item._uid == activeIndex ? 'etc-tab-active' : ''" @click="changeHandler(item._uid, item.label,item.tabkey, index)">
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
            init(update, status) {
                const tabPanels = this.$children.filter(item => item.$options.name === 'etc-tab-panel');

                let num = 0;

                if (!update) {
                    this.navList = [];
                }

                tabPanels.forEach((panel, index) => {
                    if (status === 'label') {
                        return this.navList[index] = panel;
                    }

                    if (!update) {
                        this.navList.push({_uid: panel._uid, label: panel.label, tabkey: panel.tabkey});
                    }

                    if (panel.active) {
                        this.activeIndex = this.tmpIndex = panel._uid;
                    } else {
                        ++num;
                        if (num >= tabPanels.length) {
                            this.activeIndex = this.tmpIndex = tabPanels[0]._uid;
                        }
                    }
                });
            },
            emitChange(label,tabkey='',index) {
                this.$emit("tabclick", label,tabkey, index)
            },
            changeHandler(uid, label,tabkey, index) {
                if (this.tmpIndex != uid) {
                    this.activeIndex = this.tmpIndex = uid;
                    this.emitChange(label,tabkey, index);
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '../../../style/necessary.scss';
    @import './tab.scss';
</style>
