<template>
<body>
  <body id="generatePage" v-show="!parsed">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui teal header">
          <div class="content">CodiMD-sidebar</div>
        </h2>

        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="ui message">
              <p>
                Paste your CodiMD/HackMD host<br> note history (https://&lt;Host&gt;/history)
              </p>
            </div>

            <div class="field">
              <input v-model="rawData" type="text" placeholder="json">
            </div>
            <div class="field">
              <div class="ui left labeled input">
                <div class="ui label">
                  <i></i>https://
                </div>
                <input v-model="host" type="text" placeholder="Host URL">
              </div>
            </div>
            <input type="button" class="ui fluid large teal button" v-on:click="generate" value="Generate"/>
          </div>
        </form>
      </div>
    </div>
  </body>

  <body id="Main" v-show="parsed">
    <iframe
      v-show="!refreshing"
      :src="current_link"
      @load="pageLoaded"
      style="width: 100%;height: 100%;border: none; position: absolute;"
    ></iframe>
    <Slide disableOutsideClick noOverlay>
        <div class="ui labeled icon center aligned grid">
          <button v-on:click="newPage" class="ui button">
            <i class="folder open icon"></i>
              New Sidebar
          </button>
        </div>
      <tree ref='tree' :options="treeOptions" @node:selected="openLink"></tree>
    </Slide>
  </body>
</body>
</template>

<script>
import { Slide } from 'vue-burger-menu'
import LiquorTree from 'liquor-tree'

export default {
  name: 'App',
  components: {
    Slide,
    [LiquorTree.name]: LiquorTree
  },
  data () {
    return {
      parsed: false,
      refreshing: true,
      data: null,
      rawData: null,
      host: null,
      current_link: 'about:blank',
      treeData: null,
      treeOptions: {
        checkbox: false,
        multiple: false
      }
    }
  },
  methods: {
    openLink (note) {
      if (!note.hasChildren()) {
        this.current_link = 'https://' + this.host + '/' + note.id
        this.refreshing = true
      }
    },
    pageLoaded () {
      this.refreshing = false
    },
    parseHistoryJSON () {
      let newTree = []
      let folders = new Map()
      let rootFolders = new Map()
      let delimiterID =
      '_DELIMITER' +
      Math.random()
        .toString(36)
        .substring(2, 20) +
      '_'
      for (let note of this.data.history) {
        let key = note.tags.join(delimiterID)
        let entry = { text: note.text, id: note.id }
        let folder
        if (folders.has(key)) {
        // folder already created
          folder = folders.get(key)
          folder.children.push(entry)
        } else if (note.tags.length !== 0) {
          let temp = null
          let parent = null
          for (let i = 0; i < note.tags.length; i++) {
            let tempb = note.tags.slice(0, i + 1).join(delimiterID)
            if (folders.has(tempb)) {
              folder = folders.get(tempb)
            } else {
              folder = { text: note.tags[i] }
              folder.children = []
              folders.set(tempb, folder)
            }
            if (temp) {
              temp.children.push(folder)
            } else {
              parent = folder
            }
            temp = folder
          }
          // put note into it
          temp.children.push(entry)
          folders.set(key, temp)
          if (!rootFolders.has(parent.text)) {
            newTree.push(parent)
            rootFolders.set(parent.text, parent)
          }
        } else {
          newTree.push({ text: note.text, id: note.id })
        }
      }
      this.treeData = newTree
    },
    generate () {
      if (this.host && this.rawData) {
        this.data = JSON.parse(this.rawData)
        this.parseHistoryJSON()
        this.$refs.tree.setModel(this.treeData)
        this.parsed = true
        this.current_link = 'https://' + this.host + '/features'
        this.refreshing = true
        localStorage.setItem('rawData', this.rawData)
        localStorage.setItem('host', this.host)
      }
    },
    newPage () {
      this.parsed = false
      this.current_link = null
    }
  },
  created () {
    this.host = localStorage.getItem('host')
    this.rawData = localStorage.getItem('rawData')
    if (this.host && this.rawData) {
      this.generate()
    }
  }
}
</script>

<style>
#generatePage {
  background-color: #333;
}
#generatePage > .grid {
  height: 100%;
}
#generatePage .column {
  margin-top: -100px;
}
#generatePage .column {
  max-width: 450px;
}

#Main {
  background-color: #333;
}

#Main .bm-burger-button {
  top: 10px;
}

#Main .bm-menu {
  background-color: white;
  padding-top: 30px;
  transition: 0.3s;
}

#Main .bm-item-list {
  margin-left: -16px;
}
</style>
