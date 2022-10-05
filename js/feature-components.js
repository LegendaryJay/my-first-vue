app.component('FeatureList', {
        data: function () {
            return {}
        },
        props: {
            features: {
                type: Array,
                required: true,

            },
            categories: {
                type: Array,
                required: true,
            },
        },
        methods: {
            onClick() {

                this.nextPage === -1 ? this.newPage() : this.changePage(this.nextPage)
            },
            newPage() {
                alert('file downloaded')
            },
            changePage(newPage) {
                this.$emit('change-page', newPage)
            },
            add() {
                alert('add')
            },

        },
        computed: {
            addS: function () {
                return this.features.length === 1 ? "" : "s"
            },
            currentPage: function () {
                return this.$parent.currentPage
            },
            currentCategory: function () {
                return this.categories[this.currentPage]
            },
            currentPageName: function () {
                return this.currentCategory.title
            },
            buttonText: function () {
                return this.nextPage === -1 ? "Download Now" : this.categories[this.nextPage].title;
            },
            nextPage: function () {
                let i = this.currentPage + 1
                return i >= this.categories.length ? -1 : i;
            }
        },

        template:
            `
              <div class="bg-opacity-10 bg-white col-9 rounded-end d-flex flex-column">
              <div class="features-header text-light">
                <h1 class="h1 col-12 text-center">{{ currentPageName }}</h1>
                <h1 class="h5 col-12 text-center">( {{ features.length }} Feature{{ addS }} )</h1>
              </div>
              <feature-list-item
                  v-for="(feature, index) in features"
                  :feature="feature"
                  :index="index"
              ></feature-list-item>

              <div class="py-3 text-center">
                <a class="col-auto text-primary"
                   @click="add"
                >
                  <i class="add-icon fa-solid fa-circle-plus fa-2x "></i>
                </a>
              </div>
              <div class="row m-4 mt-auto">
                <button @click="onClick" class="col mx-auto text-center btn btn-primary text-black">
                  {{ buttonText }}
                </button>
              </div>

              </div>`,
    }
)


app.component('FeatureListItem', {
        data: function () {
            return {}
        },
        props: {
            feature: {
                type: Object,
                required: true,
            },
            index: {
                type: Number,
                required: true,
            }
        },
        methods: {
            edit() {
                alert('edit')
            },
            switchFeatures(x, y) {
                let switchVar = x.position;
                x.position = y.position;
                y.position = switchVar;
            },
            up() {
                this.switchFeatures(this.feature, this.$parent.features[this.index - 1])

            },
            down() {
                this.switchFeatures(this.feature, this.$parent.features[this.index + 1])
            },
        },
        computed: {},
        template: `
          <div class="m-3 bg-dark rounded shadow">
          <div class="mx-0 row container bg-primary rounded-top">
            <div class="col py-2 feature-item-title ">
              <h1 class="h3">{{ feature.title }}</h1>
            </div>
            <div class="col-2 mt-2">
              <edit-icons
                  @up="up"
                  @down="down"
                  @edit="edit"
                  :item="feature"
                  :index="index"
                  :array-length="this.$parent.features.length"
                  :icon-size=3
              ></edit-icons>
            </div>


          </div>
          <div class="mx-5">
            <p class="col p-5 bg-light bg-opacity-10 text-light fw-bolder"
               style="white-space:pre-wrap; min-height:250px">
              {{ feature.description }}
            </p>

          </div>

          </div>
        `,
    }
)
