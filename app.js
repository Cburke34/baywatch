const app = {
  init(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },

  renderListItem(flick) {
    const item = document.createElement('li')
    const btn = document.createElement('button')
    const delbtn = document.createElement('button')
    const upbtn = document.createElement('button')


    item.textContent = flick.name
   
    btn.textContent = "Favorite"
    btn.className += "primary button"

    delbtn.textContent = "Delete"
    delbtn.className += 'alert button'

    // upbtn.textContent = "Up"
    // upbtn.className += 'info button'
    

    btn.addEventListener('click', function () {
    
        if (this.parentElement.style.backgroundColor === 'yellow') {
            this.parentElement.style.backgroundColor = ''
        } else {
            this.parentElement.style.backgroundColor = 'yellow'
        }

    })

    delbtn.addEventListener('click', function (max) {
        if (app.max >= 0) {
            item.remove()
        } else {
            
        }
    })

    // upbtn.addEventListener('click', function () {
    //     if (app.max >= 0) {
    //         flick.max - 1
    //     } else {

    //     }
    // })

    
    item.appendChild(btn)
    item.appendChild(delbtn)
    //item.appendChild(upbtn)
    return item

  },

  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
    }

    const listItem = this.renderListItem(flick)
    this.list.appendChild(listItem)
    this.flicks.push(flick)

    this.max ++
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})