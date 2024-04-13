<template>
        <div :class="{'border-t-red-600': priority == 1, 'border-t-orange-600': priority == 2, 'border-t-green-600': priority == 3}" class="grid grid-cols-7 mx-2 mb-3 bg-gray-500 rounded-xl border-t-2" draggable="true" @mouseenter="showDelete = !showDelete" @mouseleave="showDelete = !showDelete">
            <div class="col-span-1"></div>
            <div class="col-span-5 p-3"> {{ description }}</div>
            <button class="col-span-1 p-3" @click="callParentDeleteTask(taskID)">
                <Transition name="fade">
                    <font-awesome-icon v-if="showDelete" icon="fa-solid fa-trash-can" />  
                </Transition>
            </button>
        </div>
</template>
  
<script>
    export default {
        data() {
            return {
                showDelete:false,
            }
        },
        inject: ['deleteTask'],
        props: {
            "description": String,
            "priority": Number,
            "taskID": Number
        },
        methods: {
            callParentDeleteTask(taskID) {
                this.deleteTask(taskID);
            }
        }
    };
</script>
  
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>