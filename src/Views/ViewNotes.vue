<template>
  <div class="notes">

    <AddEditNote
      v-model="newNotes"
      ref="addEditRef"
      placeholder="Add New Note"
    > 
      <template #button>
        <button
          class="button is-link has-background-success"
          :disabled="!newNotes"
          @click="addNewNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <NoteCard
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script setup>

/*
  imports
*/
  import { ref } from 'vue'
  import NoteCard from  '../components/Notes/NoteCard.vue'
  import AddEditNote from '../components/Notes/AddEditNote.vue'
  import { useNotesStore } from '../stores/useNotesStore.js'

/*
  store
*/
  const storeNotes = useNotesStore()
/*
  notes
*/
  const newNotes = ref('')
  const addEditRef = ref(null)

  const addNewNote = () => {
    storeNotes.addNewNote(newNotes.value)
    newNotes.value = '',
    addEditRef.value.focusTextArea()
  }

</script>