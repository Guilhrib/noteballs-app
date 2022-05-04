<template>
  <div
    class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characters }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="`/edit/${note.id}`"
        class="card-footer-item"
        href="#"
      >
        Edit
      </RouterLink>
      <a
        @click.prevent="modals.deleteModal = true"
        href="#"
        class="card-footer-item"
      >
        Delete
      </a>
    </footer>
    <DeleteNoteModal
      v-if="modals.deleteModal"
      v-model="modals.deleteModal"
      :noteId="note.id"
    />
  </div>
</template>

<script setup>

/*
  imports
*/
  import { computed, reactive } from 'vue'
  import DeleteNoteModal from './DeleteNoteModal.vue'
  import { useNotesStore } from '../../stores/useNotesStore.js'

/*
  store
*/
  const storeNotes = useNotesStore()
/*

/*
  props
*/
  const props = defineProps({
    note: {
      type: Object,
      required: true
    }
  })

/*
  characters
*/
  const characters = computed(() => {
    const length = props.note.content.length
    const description = length > 1 ? 'characters' : 'character'
    return `${length} ${description}`
  })

/*
 modal
*/
  const modals = reactive({
    deleteModal: false
  })
</script>