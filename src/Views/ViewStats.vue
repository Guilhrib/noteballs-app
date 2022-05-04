<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>  
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{ notesStore.getTotalNotes }}</td>
        </tr>
        <tr>
          <td>Number od characteres (of all notes)</td>
          <td>{{ notesStore.getTotalCharacteres }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
/*
  imports
*/
  import { useNotesStore } from '../stores/useNotesStore.js'

/*
  store
*/
  const notesStore = useNotesStore()

</script>