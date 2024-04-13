<template>
    <form class="flex justify-center mt-16" @submit.prevent="addTask">
      <input type="text" :placeholder="phInput" class="p-1 px-3 outline-none text-black" v-model="taskText">
      <button type="submit" class="bg-slate-600 p-2">Add</button>
      <div class="mx-5">
        <p class="mx-1">Priority:</p>
        <div class="grid grid-cols-3">
            <button v-for="priority in priorityList" @click.prevent @click="selectPriority(priority.id)" :class="{'bg-red-600': priority.id == 1, 'bg-orange-600': priority.id == 2, 'bg-green-600': priority.id == 3, 'border-white': priority.selected}" class="border border-transparent rounded-full p-2 mx-1"></button>
        </div>
    </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                taskText: '',
                priority: {
                    id: 0,
                    selected: false
                }
            }
        },
        props: {
            'phInput': String,
            'priorityList': Array,
        },
        methods: {
            addTask() {
                this.$emit('add-task', this.taskText, this.priority.id);
                this.taskText = '';
            },
            selectPriority(priorityNumber) {
                this.priority.id = priorityNumber;
                this.priorityList.forEach((elem) => {
                    elem.selected = false;
                });
                const priority = this.priorityList.find((priority) => priority.id == priorityNumber);
                priority.selected = true;
            }
        }
    }
</script>


<style>
</style>