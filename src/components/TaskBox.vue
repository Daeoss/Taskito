<template>
    <div>
        <div class="text-center mb-8">{{ tasksNumber }}</div>
        <task v-for="task in filteredTasks" :priority="task.priority" :taskID="task.id" :description="task.description" @dragstart="startDrag($event,task)"></task>
    </div>
</template>
  
<script>
    export default {
        data() {
            return {
                tasksNumber:0,
            }
        },
        setup() {
            const startDrag = (event, task) => {
                event.dataTransfer.drop = 'move'
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.setData('taskID', task.id)
            }
            return {
                startDrag
            }
        },
        inject:['tasks'],
        props: {
            'progressBoxId': Number
        },
        computed: {
            filteredTasks() {
                if (this.progressBoxId) {
                    let  filtered = this.tasks.filter((task) => task.state == this.progressBoxId);
                    this.tasksNumber = filtered.length;
                    return filtered;
                }else{
                    return [];
                }
                
            }
        },
        
    };
</script>
  
  <style></style>