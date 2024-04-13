<template>
    <div class="bg-gray-700 text-center border border-slate-900 rounded-xl min-h-full" @drop="onDrop($event, progressBoxId)" @dragenter.prevent @dragover.prevent>
        <p class="text-xl font-medium mt-3">{{ progressBoxName }}</p>
        <task-box task-box-name="Taskbox" class="grid mt-4 mb-4" :progress-box-id="progressBoxId"></task-box>
    </div>
</template>
  
<script>

    import { inject } from 'vue';

    export default {
        props: {
            'progressBoxName': String,
            'progressBoxId': Number
        },
        setup() {

            const tasks = inject('tasks');

            const onDrop = (event, states) => {
                const taskID = event.dataTransfer.getData('taskID');
                const task = tasks.find((task) => task.id == taskID);
                task.state = states;
            }

            return {
                onDrop
            }
        },
    };
</script>
  
<style></style>