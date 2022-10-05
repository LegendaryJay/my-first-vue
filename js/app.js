const app = Vue.createApp({
    // data: all the data for the app, must return an object

    // ## feature ## //
    //title
    //position
    //category
    //img
    //description

    data: function () {
        return {
            currentPage: {
                id:0
            },
            categoryList: [
                {
                    id: 0,
                    title: 'Core Gameplay',
                    position: 0
                }
                ,
                {
                    id: 1,
                    title: 'Upgrades',
                    position: 1
                }
            ],
            featureList: [
                {
                    title: 'New Challenge to Minecraft!',
                    position: 0,
                    category: 0,
                    img: "",
                    description: "You are now a guardian spirit here to watch over a spirit tree! It is your job to care" +
                        " for and grow the spirit tree to becomes a monument amongst trees! \n" +
                        "\n" +
                        "This mod turns every player into a dryad who, after choosing a tree to protect, binds them to " +
                        "the tree. Wandering too far away will deplete a player's air while being close to the tree will " +
                        "fill it back up."
                },
                {
                    title: 'Choosing the tree',
                    position: 1,
                    category: 0,
                    img: "",
                    description: "When a player joins, they will start in ghost form. In order to get out of ghost form," +
                        "a player must chose a tree by punching it and accepting the chat prompt. " +
                        "\n\n" +
                        "Once chosen, a player is then given a few saplings to start and must then grow the tree by hand."
                },
                {
                    title: 'Growing Stick',
                    position: 2,
                    category: 0,
                    img: "",
                    description: "To grow the tree, the player must add only logs that are descended from the original" +
                        "tree. Saplings from the player's spirit tree will glow and be specially named. When planted, " +
                        "these trees will produce logs that glow when picked up by the guardian player. " +
                        "\n\n" +
                        "Using logs or saplings from other trees will not grow your spirit tree, though they can be used " +
                        "as decoration. Placed logs that are part of the spirit tree will pulse when holding a Log or " +
                        "sappling from the tree."
                },
                {
                    title: 'Home upgrade: Reach',
                    position: 0,
                    category: 1,
                    img: "",
                    description: "This upgrade allows a player to go farther from the tree by two blocks per level." +
                        "\n\n" +
                        "Requirements: A tree must have at least 200 blocks for this upgrade to unlock. It costs one enderpearl," +
                        "one magmablock, and 10 experience levels per upgrade with a max of 3 upgrades"
                },
            ],

            newItem: {
                name: '',
                qty: 1,
                category: 'need',
                purchased: false,
            },
            shoppingList: [
                {name: 'Hammer', qty: 1, purchased: true, category: 'need'},
                {name: 'Nails', qty: 10, purchased: false, category: 'need'},
                {name: 'Sliding Compound Miter Saw', qty: 1, purchased: false, category: 'want'},
            ],
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        //
        // switchFeatures(i, j) {
        //     let a = this.featureList[i]
        //     let b = this.featureList[j]
        //     let storeA = a.position
        //     a.position = b.position
        //     b.position = storeA.position
        // },
        // switchCategories(i, j) {
        //     let a = this.categoryList.find(x => x.position === i)
        //     console.log(a)
        //     let b = this.categoryList.find(x => x.position === j)
        //     console.log(b)
        //     let storeA = a.position
        //     a.position = b.position
        //     b.position = storeA.position
        // },


    },

    // computed: values that are updated and cached if dependencies change
    computed: {},

    //mounted:  called after the instance has been mounted,
    mounted: function () {

    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {}
});


