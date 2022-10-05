// Component names should be TitleCase/PascalCase
// and should be multi-word, but singular in plurality.
// When used in HTML/templates, they become kabob-case.

app.component('pageComponent', {
        data: function () {
            return {
                currentPage: 0,
            }
        },
        methods: {
            changePage(newPage) {
                this.currentPage = newPage
            },
            removeCategory(item) {
                this.$parent.featureList.forEach((x, index) => {

                    if (x.category === item.id){
                        this.$parent.featureList[index].category = -1
                    }
                })
                this.$parent.categoryList = this.$parent.categoryList.filter(x => item.id !== x.id)
            },
            removeFeature(item) {
                this.$parent.featureList = this.$parent.featureList.filter(x => item.id !== x.id)
            },
            editFeature(item){

            },
            editCategory(item) {
                this.$emit('edit-category', item)
            },
            newFeature(){

            },
            newCategory(){

            }
        },
        props: {
            pageFeatures: {
                type: Array,
                required: true,
            },
            pageCategories: {
                type: Array,
                required: true,
            },
        },
        computed: {
            orderedCategories: function () {
                let newArray = this.pageCategories.sort((a, b) => a.position - b.position)
                newArray.push(

                )
                return newArray
            },
            orderedFilteredFeatures: function () {

                let thisCategory = this.orderedCategories?.[this.currentPage]
                return (typeof thisCategory == "undefined") ? [] : this.pageFeatures.filter(feature => thisCategory.id === feature.category).sort((a, b) => a.position - b.position)

            },
        },
        template: `
          <div id="body" class="col-md-auto shadow mt-1 mb-3 row ">

          <category-list
              :categories="orderedCategories"
              @change-page="changePage"
              @remove="removeCategory"
              @edit="editCategory"
          ></category-list>

          <feature-list
              :features="orderedFilteredFeatures"
              :categories="orderedCategories"
              @change-page="changePage"
              @remove="removeFeature"
              @edit="editFeature"
          ></feature-list>
          </div>
        `
    }
)
app.component('editIcons', {
        props: {
            iconSize: {
                type: Number,
                default: 0
            },
            arrayLength: {
                type: Number,
                required: true,
            },
            index: {
                type: Number,
                required: true,
            },
            item: {
                type: Object,
                required: true,
            },
            editLink: {
                type: String,
                required: true,
            },

        },

        computed: {},
        methods: {
            isFirst() {
                return this.index === 0
            },
            isLast() {
                return this.index === this.arrayLength - 1
            },

            up() {
                this.$emit('up', this.item)
            },

            down() {
                this.$emit('down', this.item)
            },

            edit() {
                this.$emit('edit', this.item)
            },
            remove() {
                this.$emit('remove', this.item)
            },
            iconSizeClass() {
                switch (this.iconSize) {
                    case 0:
                        return ""
                    case -3:
                        return 'fa-2xs'
                    case -2:
                        return 'fa-xs'
                    case -1:
                        return 'fa-sm'
                    case 1:
                        return 'fa-lg'
                    case 2:
                        return 'fa-xl'
                    case 3:
                        return 'fa-2xl'
                    default:
                        return ""
                }
            }

        },

        template: `
          <div class="d-flex justify-content-around">
          <div class="edit-icon-set text-danger"
               @click.stop="this.remove()"
          >
            <i class="fa-solid fa-trash" :class="iconSizeClass()"></i>
          </div>

          <div class="edit-icon-set"
               @click.stop="isFirst() ? null : this.up()"
               :class="{disabled : isFirst()}"
          >
            <i class="fa-solid fa-caret-up" :class="iconSizeClass()"></i>
          </div>
          <div class="edit-icon-set"
               @click.stop="isLast() ? null : this.down()"
               :class="{disabled : isLast()}"
          >
            <i class="fa-solid fa-caret-down" :class="iconSizeClass()"></i>
          </div>
          <div class="edit-icon-set" 
               data-bs-toggle="modal" 
               :data-bs-target="'#' + editLink"
               @click.stop="this.edit()"
          >
            <i class="fa-solid fa-pen-to-square" :class="iconSizeClass()"></i>
          </div>
          </div>
        `
    }
)

app.component('AppModal', {
        props: {
            title: {
                type: String,
                default: 'Modal Title'
            },
            id: {
                type: String,
                default: 'app-modal'
            },

        },
        mounted() {
            this.$el.addEventListener('show.bs.modal', function () {
                this.querySelector('[autofocus]')?.focus();
            })
        },
        template: `
          <div class="modal fade" :id="id" tabindex="-1" role="dialog" :aria-labelledby="id + '-modalTitle'"
               aria-hidden="true">
          <div class="modal-dialog" role="document">
            <form>
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" :id="id + 'modalTitle'">{{ title }}</h5>
                  <button type="button" class="btn-close" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <slot></slot>
                </div>
                <div class="modal-footer">
                  <slot name="footer">
                    <button type="button" class="btn btn-close" data-bs-dismiss="modal"></button>
                  </slot>
                </div>
              </div>
            </form>
          </div>
          </div>
        `
    }
)

//                        <div class="mb-3">
//                             <label for="name" class="form-label">Name</label>
//                             <input id="name" type="text" class="form-control">
//                         </div>
//                         <div class="mb-3">
//                             <label for="qty" class="form-label">Quantity</label>
//                             <input id="qty" type="number" class="form-control" size="3">
//                         </div>
//                         <div class="mb-3">
//                             <label for="category" class="form-label">Category</label>
//                             <select id="category" class="form-select">
//                                 <option value="need">Need</option>
//                                 <option value="want">Want</option>
//                             </select>
//                         </div>


//
// modalInfo{
//     isNew = true
//     item = object
// }

