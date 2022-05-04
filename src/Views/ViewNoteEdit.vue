<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditRef"
      bgColor="link"
      placeholder="Edit Note"
      label="Edit Note"
    > 
      <template #button>
        <button
          @click="$router.back()"
          class="button is-link is-light mr-2"
        >
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
          @click="editNote"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
  imports
*/
  import { ref } from 'vue'
  import AddEditNote from '../components/Notes/AddEditNote.vue'
  import { useNotesStore } from '../stores/useNotesStore.js'
  import { useRoute, useRouter } from 'vue-router'

/*
  router
*/
  const route = useRoute()
  const router = useRouter()

/*
  store
*/
 const noteStore = useNotesStore()

/*
  note
*/
  const noteContent = ref('')
  noteContent.value = noteStore.getNoteById(route.params.id)

  const editNote = () => {
    noteStore.updateNote(route.params.id, noteContent.value)
    router.push('/')
  }
</script>