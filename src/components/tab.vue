<template>
  <div class="bg-slate-100 
        hover:-translate-y-3 cursor-pointer
        border shadow-md 
        shadow-indigo-500/50 
        border-slate-100 
        rounded-2xl 
        ease-in duration-100
    overflow-hidden">
    <a :href="url">
        <div>
        <div class="h-16" :style="{ backgroundImage: `linear-gradient(to right,` + randomColor1 + `,`+ randomColor2+`)` }"></div>
        <div class="mx-auto text-center">
            <div class="w-10 h-10 rounded-full mx-auto bg-white -my-5 ring-4 ring-white">
                <img :src="imageUrl" class="w-10 h-10 rounded-full" alt=""/>
            </div>
        </div>
        </div>
        <div class="mt-6 p-3 bg-stone">
        <p class="text-slate-600 text-sm h-24 line-clamp-2 hover:text-blue-500">{{ title }}</p>
        <p class="text-slate-400 text-right">📁{{ category }}</p>
        </div>
    </a>
  </div>
</template>

<script>
import randomColor from 'randomcolor';
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  data() {
       return {
         randomColor1: '',
         randomColor2: '',
       };
     },
     mounted() {
       this.randomColor1 = randomColor();
       this.randomColor2 = randomColor();
     },

};
</script>

<style lang="less">

</style>
