<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div
      class="modal-card"
      ref="targetRef"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button
          @click="closeModal"
          class="delete"
          aria-label="close"
        >
        </button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button
          @click="closeModal"
          class="button"
        >
          Cancel
        </button>
        <button
          @click="notesStore.deleteNote(noteId)"
          class="button is-danger"
        >
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
  import { onClickOutside } from '@vueuse/core'
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useNotesStore } from '../../stores/useNotesStore.js'

/*
  props
*/
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    noteId: {
      type: String,
      required: true
    }
  })

/*
  emits
*/
  const emit = defineEmits(['update:modelValue'])

/*
  store
*/
  const notesStore = useNotesStore()

/*
  close modal
*/
  const closeModal = () => {
    emit('update:modelValue', false)
  }

/*
  click outside
*/
  const targetRef = ref(null)

 onClickOutside(targetRef, closeModal)

/*
  keyboard control
*/
  const handleKeyboard = e => {
    if (e.key === 'Escape') closeModal()
  }

  onMounted(() => {
    document.addEventListener('keyup', handleKeyboard)
  })
  onUnmounted(() => {
    document.addEventListener('keyup', handleKeyboard)
  })
</script>