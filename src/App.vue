<template>
  <div class="h-screen">

    <p class="text-center text-7xl mb-32 mt-16">Taskito</p>

    <div class="flex grid grid-cols-5 mx-6 gap-4">
      <progress-box v-for="progressBox in progressBoxes" :progress-box-name="progressBox.name" :progress-box-id="progressBox.id"></progress-box>
    </div>

    <add-task-form ph-input="Your task goes here..." @add-task="addTask" :priorityList="priorityList"></add-task-form>
  </div>
  
</template>

<script>

export default {
  data() {
    return {
      progressBoxes: [
        {id:1, name: 'To do'},
        {id:2, name: 'In progress'},
        {id:3, name: 'Code review'},
        {id:4, name: 'Ready for QA'},
        {id:5, name: 'Done'},
      ],
      tasks:[
          {id: 1, state:1, priority: 1, description:"Add a task"},
      ],
      priorityList: [
        {id: 1, selected: false},
        {id: 2, selected: false},
        {id: 3, selected: false}
      ],
    }
  },
  provide() {
    return {
      tasks: this.tasks,
      priorityList: this.priorityList,
      deleteTask: this.deleteTask
    }
  },
  methods: {
    addTask(taskText, priorityID) {
      this.tasks.push({id: Object.keys(this.tasks).length + 1, state:1, priority: priorityID, description:taskText});
    },
    //Eroare cand mai raman 3 cred -- VERIFICA
    deleteTask(taskID) {
      const index = this.tasks.findIndex(task => task.id === taskID);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }
  },
}
</script>


<style></style>
