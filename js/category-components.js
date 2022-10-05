app.component('CategoryList', {
        data: function () {
            return {}
        },
        props: {
            title: {
                type: String,
                default: "Feature Types"
            },
            categories: {
                type: Array,
                required: true,
            }
        },
        methods: {
            changePage(newPage) {
                this.$emit('change-page', newPage)
            },
            addCategory() {
                alert('add')
            },
            remove(item){
                this.$emit('remove', item)
            }
        },
        computed: {},
        template: `
          <div class="col-3 bg-dark text-light p-2 align-middle rounded-start">
          <h1 class="h2 col-12 text-center">Features</h1>
          <category-list-item
              v-for="(category, index) in categories"
              :category="category"
              :index="index"
              @change-page="changePage"
              @remove="remove"
          ></category-list-item>
          <div class="py-3 text-center">
            <a class="col-auto text-primary ">
              <i class="add-icon fa-solid fa-circle-plus fa-2x"
                 @click="addCategory()"></i>
            </a>
          </div>

          </div>
        `
    },
)


app.component('CategoryListItem', {
        data: function () {
            return {}
        },
        props: {
            category: {
                type: Object,
                required: true,
            },
            index: {
                type: Number,
                required: true
            },
        },
        methods: {
            changePage(newPage) {
                this.$emit('change-page', newPage)
            },
            switchCategories(x, y) {
                let switchVar = x.position;
                x.position = y.position;
                y.position = switchVar;
            },
            up() {
                this.switchCategories(this.category, this.$parent.categories[this.index - 1])

            },
            down() {
                this.switchCategories(this.category, this.$parent.categories[this.index + 1])
            },
            edit() {
                alert('edit')
            },
            remove(){
                this.$emit('remove', this.category)
            }
        },
        computed: {},
        template: `
          <div class="category-item d-flex justify-content-between rounded text-black my-3"
               @click="changePage(this.index)"
          >
              <div class="py- col-3">
              </div>
              <div class="col row text-center ">
                <h5 class="col m-auto justify-content-evenly">
                  {{ category.title }}
                </h5>
              </div>
              <div class="col-3">
                <edit-icons
                    @up="up"
                    @down="down"
                    @edit="edit"
                    @remove="remove"
                    :item="category"
                    :index="index"
                    :array-length="this.$parent.categories.length"
                    :icon-size=1
                ></edit-icons>
              </div>


          </div>
        `
    },
)

app.component('deleteButton', {
    methods: {
        onDelete(){
            this.$emit('on-delete')

        }
    },
    template: `
    <button type="button" class="btn btn-danger"
        @click="onDelete"
    >Delete</button>
    `
})
app.component('saveButton', {
    methods: {
        onSave(){
            this.$emit('on-save')

        }
    },
    template: `
    <button type="button" class="btn btn-primary"
        @click="onSave"
    >Save</button>
    `
})
app.component('closeButton', {
    methods: {
    },
    template: `
    <button type="button" class="btn btn-close" data-bs-dismiss="modal"
        @click="onClose"
    >Close</button>
    `
})

