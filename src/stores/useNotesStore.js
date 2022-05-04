import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: [
        {
          id: '1',
          content: 'Nostrud cupidatat adipisicing nostrud duis laborum sunt ex Lorem. Lorem ut Lorem voluptate esse consequat esse irure magna consectetur dolor do. Ad sint deserunt voluptate enim. Culpa culpa ex ad commodo aliquip do esse ipsum ea elit qui aliqua. Nisi ipsum adipisicing sunt officia ullamco et eu cupidatat sit irure. Irure nostrud qui consequat proident nostrud laboris laborum.'
        },
        {
          id: '2',
          content: 'Nostrud cupidatat adipisicing nostrud duis laborum sunt ex Lorem. Lorem ut Lorem voluptate esse consequat esse irure magna consectetur dolor do. Ad sint deserunt voluptate enim. Culpa culpa ex ad commodo aliquip do esse ipsum ea elit qui aliqua. Nisi ipsum adipisicing sunt officia ullamco et eu cupidatat sit irure. Irure nostrud qui consequat proident nostrud laboris laborum.'
        }
      ]
    }
  },
  actions: {
    addNewNote (content) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString()

      this.notes.unshift({
        id,
        content
      })
    },
    deleteNote (id) {
      this.notes = this.notes.filter(note =>  note.id !== id )
    },
    updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
    }
  },
  getters: {
    getNoteById: (state) => {
      return (id) => {
        return state.notes.filter(note =>  note.id === id )[0].content
      }
    },
    getTotalNotes: (state) => {
      return state.notes.length
    },
    getTotalCharacteres: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
})