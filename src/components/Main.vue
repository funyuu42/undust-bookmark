<template>
  <div class="w-3/4 mx-auto place-content-center pb-1 relative">
    <div class="flex justify-between items-center  mb-8">
      <h1 class="italic font-semibold text-2xl text-slate-100">Let’s take a look at these dusty bookmarks</h1>
      <a href="#" @click="refresh" class="transition ease-in-out duration-300 hover:rotate-180 ">
        <svg class="fill-zinc-200 hover:fill-white" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>
      </a>
    </div>
    <div class="grid grid-rows-5 gap-4 grid-cols-3 md:grid-rows-2 md:grid-cols-5">
      <div v-for="(item, i) in unviewedMark" :key="i" :class="showStatus" :style="{animationDelay: 0.05*i +`s`}">
        <Card :url="item.url" :imageUrl="item.icon" :title="item.title" :category="item.parentTitle"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Card from './tab.vue'

const bookmarks = [];

const unviewedMark = ref([]);

const showIf = ref(true)


chrome.bookmarks.getTree((tree) => {
  const flattenBookmarks = (node) => {
    if (node.children) {
      node.children.forEach((child) => {
        child.parentTitle = node.title;
        flattenBookmarks(child);
      });
    } else {
      node.icon = '';    
      bookmarks.push(node);
    }
  };

  tree.forEach((node) => {
    flattenBookmarks(node);
  });
});



function getWebsiteIcon(u) {
  const url = new URL(chrome.runtime.getURL("/_favicon/"));
  url.searchParams.set("pageUrl", u);
  url.searchParams.set("size", "192");
  return url.toString();
}

const filterUnviewedHistory = () => {
  const today = new Date();
  const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  chrome.history.search({ 
    startTime: sevenDaysAgo.getTime(),
     endTime: today.getTime(),
     maxResults:500,
     text:''
    }, (historyItems) => {

    const filteredBookmarks = bookmarks.filter((bookmark) => {
      return !historyItems.some((historyItem) => historyItem.url === bookmark.url);
    });
    

    const randomBookmarks = [];
    const numBookmarks = Math.min(10, filteredBookmarks.length);
    const usedIndices = new Set();
    
    while (randomBookmarks.length < numBookmarks) {
      const randomIndex = Math.floor(Math.random() * filteredBookmarks.length);

      if (!usedIndices.has(randomIndex)) {
        filteredBookmarks[randomIndex].icon = getWebsiteIcon(filteredBookmarks[randomIndex].url);
        randomBookmarks.push(filteredBookmarks[randomIndex]);
        usedIndices.add(randomIndex);
      }
    }

    
    unviewedMark.value = randomBookmarks;

    
  });

};


filterUnviewedHistory();

const refresh = () => {
  showIf.value = false;


  setTimeout(() => {
    filterUnviewedHistory();
    showIf.value = true;
  }, 200);



}


const showStatus = computed(() => {
  return showIf.value ? 'showup':'showend'
}) 


</script>

<style scoped>

.showup{
  animation: fadein .1s ease-in-out 1 backwards;
}

.showend{
  animation: fadeout .1s ease-in-out 1 forwards;
}

@keyframes fadein{
  0% {
    transform: translateY(10px);
    opacity:0%
  }

  75% {
    transform: translateY(-5px);
    opacity:100%
  }

  100% {
    transform: translateY(0px);
    opacity:100%
  }
}

@keyframes fadeout{
  0% {
    transform: translateY(0px);
    opacity:100%
  }
  100% {
    transform: translateY(10px);
    opacity:0%
  }
}

</style>
