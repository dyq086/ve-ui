<template>
    <div class="etc-tab-panel-item" :class="classes">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'etc-tab-panel',
        props: {
            label: String,
            active: Boolean,
            tabkey: [String, Number]
        },
        computed: {
            classes() {
                return this.$parent.activeIndex == this._uid ? 'etc-tab-active' : '';
            }
        },
        watch: {
            active() {
                this.$parent.init(true);
            },
            label() {
               this.$parent.init(false, 'label');
            }
        },
         mounted() {
            this.$nextTick(() => {
                this.$parent.init(false);
            });

            
        }
    }
</script>
<style lang="scss">

</style>
